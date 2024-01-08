import {
    Services,
    JobinAction,
    JobImg,
    GigWorker,
    NoProfile,
  } from "../assets";
  
  export const jobTypes = ["One-offs", "Long-term"];
  
  export const popularSearch = [
    'Plumber',
    'Electrician',
    'Carpenter',
    'Painter',
    'Housekeeper'
  ];

  export const jobs = [
    {
      id: "1",
      lister: {
        name: "BuruBuru Plumbing",
        location: "BuruBuru",
        email: "buruburuplb@gmail.com",
        contact: "0758495888",
        about:
          "Seeking to connect available plumbers to client around Buruburu",
        profileUrl: NoProfile,
      },
      jobTitle: "Plumber",
      location: "BuruBuru",
      jobType: "One-off",
      salary: "15000",
      detail: [
        {
          desc: "Repairing blocked drainage system in residences",
  
          requirement:
            "Available by next week latest.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 1,
      createdAt: new Date(),
    },
    {
      id: "2",
      lister: {
        name: "Madaraka Electricals",
        location: "Madaraka",
        email: "madarakaelec@gmail.com",
        contact: "0758496888",
        about:
          "Connecting the Madaraka locals with available electricians",
        profileUrl: NoProfile,
      },
      jobTitle: "Electrician",
      location: "Madaraka",
      jobType: "Long-term",
      salary: "30000",
      detail: [
        {
          desc: "Managing residence servants quarter grid system",
  
          requirement:
            "Good communication skills, and proof of work",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 2,
      createdAt: new Date(),
    },
    {
      id: "3",
      lister: {
        name: "BuruBuru Carpentry",
        location: "BuruBuru",
        email: "buruburucptry@gmail.com",
        contact: "0758486888",
        about:
          "Connecting the BuruBuru clientelle with available carpenters",
        profileUrl: NoProfile,
      },
      jobTitle: "Carpenter",
      location: "BuruBuru",
      jobType: "Long-term",
      salary: "400000",
      detail: [
        {
          desc: "Furnished apartments project. Hand-made furniture endavour in BuruBuru Highview Apartments.",
  
          requirement:
            "Proofable successful carpentry projects and leadership skills",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 3,
      createdAt: new Date(),
    },
    {
      id: "4",
      lister: {
        name: "Madaraka Housekeeping",
        location: "Madaraka",
        email: "madarakahsk@gmail.com",
        contact: "0758488888",
        about:
          "Connecting Madaraka residents with housekeeping services",
        profileUrl: NoProfile,
      },
      jobTitle: "Housekeeper",
      location: "Madaraka",
      jobType: "Long-term",
      salary: "10000",
      detail: [
        {
          desc: "Cloth washing services in the Madaraka environs",
  
          requirement:
            "Proper communication skills and thorough cleaners",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 2,
      createdAt: new Date(),
    },
    {
      id: "5",
      lister: {
        name: "BuruBuru Painters",
        location: "BuruBuru",
        email: "buruburuptrs@gmail.com",
        contact: "0758485688",
        about:
          "Painting service connectors around the BuruBuru area",
        profileUrl: NoProfile,
      },
      jobTitle: "Painter",
      location: "BuruBuru",
      jobType: "One-off",
      salary: "6000",
      detail: [
        {
          desc: "re-painting resident bathroom area",
  
          requirement:
            "available by this  weekend.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "6",
      lister: {
        name: "Madaraka Painters",
        location: "Madaraka",
        email: "madarakaptrs@gmail.com",
        contact: "0788485688",
        about:
          "Connecting Madaraka Painters to the local service seeker",
        profileUrl: NoProfile,
      },
      jobTitle: "Painter",
      location: "Madaraka",
      jobType: "Long-term",
      salary: "20000",
      detail: [
        {
          desc: "Repainting Madaraka Primary classrooms.",
  
          requirement:
            "proof of work and good teamwork ability",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 3,
      createdAt: new Date(),
    },
    {
      id: "7",
      lister: {
        name: "BuruBuru Housekeeping",
        location: "BuruBuru",
        email: "buruburuhsk@gmail.com",
        contact: "0788785688",
        about:
          "Connecting housekeepers to the BuruBuru residents",
        profileUrl: NoProfile,
      },
      jobTitle: "Housekeeper",
      location: "BuruBuru",
      jobType: "Long-term",
      salary: "15000",
      detail: [
        {
          desc: "Month long contract for resident housecleaning services",
  
          requirement:
            "Police report, good at following instructions",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 1,
      createdAt: new Date(),
    },
    {
      id: "8",
      lister: {
        name: "Madaraka Plumbing",
        location: "Madaraka",
        email: "madarakaplb@gmail.com",
        contact: "0788767988",
        about:
          "Connecting waterwork service providers to the local madaraka population.",
        profileUrl: NoProfile,
      },
      jobTitle: "Plumber",
      location: "Madaraka",
      jobType: "One-off",
      salary: "5000",
      detail: [
        {
          desc: "Repairing leaking sink in a Madaraka residence",
  
          requirement:
            "available by the weekend, good at what they do.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 1,
      createdAt: new Date(),
    },
    {
      id: "9",
      lister: {
        name: "BuruBuru Electricals",
        location: "BuruBuru",
        email: "buruburuelec@gmail.com",
        contact: "0712367888",
        about:
          "Connecting electricians to the buruburu practitioners",
        profileUrl: NoProfile,
      },
      jobTitle: "Electrician",
      location: "BuruBuru",
      jobType: "One-off",
      salary: "15000",
      detail: [
        {
          desc: "repairing flat screen display for BuruBuru resident",
  
          requirement:
            "available by the weekend",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 1,
      createdAt: new Date(),
    },
  ];
  
  export const footerLinks = [
    {
      id: "01",
      title: "Company",
      links: ["Home", "About Us", "Services", "Our Team"],
    },
    {
      id: "02",
      title: "Policy",
      links: ["Policies", "Contact", "FAQ"],
    },
    {
      id: "03",
      title: "Support",
      links: ["Account", "Support Center", "Feedback", "Accessibility"],
    },
  ];
  
  export const listers = [
    {
      _id: 1,
      name: "BuruBuru Plumbing",
      location: "BuruBuru",
      email: "buruburuplb@gmail.com",
      contact: "0758495888",
      about:
        "Seeking to connect available plumbers to clients around Buruburu",
      profileUrl: NoProfile,
      jobPosts: ["1", "2"],
    },
    {
      _id: 2,
      name: "Madaraka Electricals",
      location: "Madaraka",
      email: "madarakaelec@gmail.com",
      contact: "0758496888",
      about:
        "Connecting the Madaraka locals with available electricians",
      profileUrl: NoProfile,
      jobPosts: ["1", "2"],
    },
    {
      _id: 3,
      name: "BuruBuru Carpentry",
      location: "BuruBuru",
      email: "buruburucptry@gmail.com",
      contact: "0758486888",
      about:
        "Connecting the BuruBuru clientelle with available carpenters",
      profileUrl: NoProfile,
      jobPosts: ["1", "2"],
    },
    {
      _id: 4,
      name: "Madaraka Housekeeping",
      location: "Madaraka",
      email: "madarakahsk@gmail.com",
      contact: "0758488888",
      about:
        "Connecting Madaraka residents with housekeeping services",
      profileUrl: NoProfile,
      jobPosts: ["1", "2"],
    },
    {
      _id: 5,
      name: "BuruBuru Painters",
      location: "BuruBuru",
      email: "buruburuptrs@gmail.com",
      contact: "0758485688",
      about:
        "Painting service connectors around the BuruBuru area",
      profileUrl: NoProfile,
      jobPosts: ["1", "2"],
    },
    {
      _id: 6,
      name: "Madaraka Painters",
      location: "Madaraka",
      email: "madarakaptrs@gmail.com",
      contact: "0788485688",
      about:
        "Connecting Madaraka Painters to the local service seeker",
      profileUrl: NoProfile,
      jobPosts: ["1", "2"],
    },
    {
      _id: 7,
      name: "BuruBuru Housekeeping",
      location: "BuruBuru",
      email: "buruburuhsk@gmail.com",
      contact: "0788785688",
      about:
        "Connecting housekeepers to the BuruBuru residents",
      profileUrl: NoProfile,
      jobPosts: ["1", "2"],
    },
    {
      _id: 8,
      name: "Madaraka Plumbing",
      location: "Madaraka",
      email: "madarakaplb@gmail.com",
      contact: "0788767988",
      about:
        "Connecting waterwork service providers to the local madaraka population.",
      profileUrl: NoProfile,
      jobPosts: ["1", "2"],
    },
    {
      _id: 9,
      name: "BuruBuru Electricals",
      location: "BuruBuru",
      email: "buruburuelec@gmail.com",
      contact: "0712367888",
      about:
        "Connecting electricians to the buruburu practitioners",
      profileUrl: NoProfile,
      jobPosts: ["1", "2"],
    },
  ];
  
  export const users = [
    {
      name: "BuruBuru Plumbing",
      location: "BuruBuru",
      email: "buruburuplb@gmail.com",
      contact: "0758495888",
      about:
        "Seeking to connect available plumbers to client around Buruburu",
      profileUrl: NoProfile,
      jobPosts: ["1", "2"],
      token: "gjhsdgsjgdjh",
    },
    {
      firstName: "Marvin",
      lastName: "Oketch",
      email: "moketch@gmail.com",
      contact: "0715399271",
      about:
        "Fluent plumber with 5 yrs experience",
      profileUrl: GigWorker,
      accountType: "seeker",
      cvUrl: "",
      token: "gjhsdgsjgdjh",
    },
  ];


  