import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Gig Connect is a platform that connects gig workers in Kenya to service seekers within the cities. We believe that gig work is not only a source of income, but also a way of empowerment, innovation and social impact. Our mission is to create a vibrant and inclusive gig economy in Kenya, where workers can access opportunities, skills and support, and where service seekers can find quality, reliable and affordable solutions. Gig Connect is more than just a platform, it is a community of changemakers who are shaping the future of work in Kenya
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        The gig economy in Kenya is growing fast, and it has the potential to transform the lives of millions of people. Gig Connect is at the forefront of this revolution, and we invite you to join us in making it happen. Whether you are a gig worker or a service seeker, you can sign up on our website and start exploring the possibilities. Together, we can make gig work work for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;