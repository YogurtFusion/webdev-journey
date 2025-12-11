import React from "react";

const About = () => {
  return (
    <div className="max-h-screen h-full rounded-lg max-w-[50vw] m-auto ">
      <h1 className="text-3xl text-white text-center bg-purple-500 m-2 rounded-lg p-8">This is about page</h1>
      <img
        className="rounded-lg max-w-[50vw] w-full"
        src="https://picsum.photos/1000"
        alt="about page"
      />
    </div>
  );
};

export default About;
