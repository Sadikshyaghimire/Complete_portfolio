import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        "Passionate about technology and driven by
         a curiosity for innovation, I am a tech enthusiast 
         with a deep love for all things that are digital. With a 
         background in technology and a career in 
         data science, I have honed my skills in creating cutting-edge solutions 
         that leverage the power of technology so as to solve real-world problems.
          My journey in the tech world has been marked by continuous learning
           and a commitment to staying at the forefront of industry trends.
            Beyond my professional pursuits, I enjoy sharing my knowledge and insights with others, whether through writing, mentoring, or participating in tech communities. 
            Join me on this exciting journey through the ever-evolving landscape of technology, where we explore
            its limitless potential and shape the digital future together."

        </p>

        <br />

        <p className="text-xl">
         
        </p>
      </div>
    </div>
  );
};

export default About;
