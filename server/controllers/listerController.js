import mongoose from "mongoose";
import Listers from "../models/listersModel.js";
import { response } from "express";

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  //validate fields
  if (!name) {
    next("Lister Name is required!");
    return;
  }
  if (!email) {
    next("Email address is required!");
    return;
  }
  if (!password) {
    next("Password is required and must be greater than 6 characters");
    return;
  }

  try {
    const accountExist = await Listers.findOne({ email });

    if (accountExist) {
      next("Email Already Registered. Please Login");
      return;
    }

    // create a new account
    const lister = await Listers.create({
      name,
      email,
      password,
    });

    // user token
    const token = lister.createJWT();

    res.status(201).json({
      success: true,
      message: "Lister Account Created Successfully",
      user: {
        _id: lister._id,
        name: lister.name,
        email: lister.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //validation
    if (!email || !password) {
      next("Please Provide User Credentials");
      return;
    }

    const lister = await Listers.findOne({ email }).select("+password");

    if (!lister) {
      next("Invalid email or Password");
      return;
    }

    //compare password
    const isMatch = await lister.comparePassword(password);
    if (!isMatch) {
      next("Invalid email or Password");
      return;
    }
    lister.password = undefined;

    const token = lister.createJWT();

    res.status(200).json({
      success: true,
      message: "Login Successful",
      user: lister,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const updateListerProfile = async (req, res, next) => {
  const { name, contact, location, profileUrl, about } = req.body;

  try {
    // validation
    if (!name || !location || !about || !contact || !profileUrl) {
      next("Please Provide All Required Fields");
      return;
    }

    const id = req.body.user.userId;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No Lister with id: ${id}`);

    const updateLister = {
      name,
      contact,
      location,
      profileUrl,
      about,
      _id: id,
    };

    const lister = await Listers.findByIdAndUpdate(id, updateLister, {
      new: true,
    });

    const token = lister.createJWT();

    lister.password = undefined;

    res.status(200).json({
      success: true,
      message: "Lister Profile Updated SUccessfully",
      lister,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const getListerProfile = async (req, res, next) => {
  try {
    const id = req.body.user.userId;

    const lister = await Listers.findById({ _id: id });

    if (!lister) {
      return res.status(200).send({
        message: "Lister Not Found",
        success: false,
      });
    }

    lister.password = undefined;
    res.status(200).json({
      success: true,
      data: lister,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

//GET ALL LISTERS
export const getListers = async (req, res, next) => {
  try {
    const { search, sort, location } = req.query;

    //conditons for searching filters
    const queryObject = {};

    if (search) {
      queryObject.name = { $regex: search, $options: "i" };
    }

    if (location) {
      queryObject.location = { $regex: location, $options: "i" };
    }

    let queryResult = Listers.find(queryObject).select("-password");

    // SORTING
    if (sort === "Newest") {
      queryResult = queryResult.sort("-createdAt");
    }
    if (sort === "Oldest") {
      queryResult = queryResult.sort("createdAt");
    }
    if (sort === "A-Z") {
      queryResult = queryResult.sort("name");
    }
    if (sort === "Z-A") {
      queryResult = queryResult.sort("-name");
    }

    // PADINATIONS
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    // records count
    const total = await Listers.countDocuments(queryResult);
    const numOfPage = Math.ceil(total / limit);
    // move next page
    // queryResult = queryResult.skip(skip).limit(limit);

    // show more instead of moving to next page
    queryResult = queryResult.limit(limit * page);

    const listers = await queryResult;

    res.status(200).json({
      success: true,
      total,
      data: listers,
      page,
      numOfPage,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

//GET  LISTER JOBS
export const getListerJobListing = async (req, res, next) => {
  const { search, sort } = req.query;
  const id = req.body.user.userId;

  try {
    //conditons for searching filters
    const queryObject = {};

    if (search) {
      queryObject.location = { $regex: search, $options: "i" };
    }

    let sorting;
    //sorting || another way
    if (sort === "Newest") {
      sorting = "-createdAt";
    }
    if (sort === "Oldest") {
      sorting = "createdAt";
    }
    if (sort === "A-Z") {
      sorting = "name";
    }
    if (sort === "Z-A") {
      sorting = "-name";
    }

    let queryResult = await listers.findById({ _id: id }).populate({
      path: "jobPosts",
      options: { sort: sorting },
    });
    const listers = await queryResult;

    res.status(200).json({
      success: true,
      listers,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

// GET SINGLE LISTER
export const getListerById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const lister = await Listers.findById({ _id: id }).populate({
      path: "jobPosts",
      options: {
        sort: "-_id",
      },
    });

    if (!lister) {
      return res.status(200).send({
        message: "Lister Not Found",
        success: false,
      });
    }

    lister.password = undefined;

    res.status(200).json({
      success: true,
      data: lister,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};