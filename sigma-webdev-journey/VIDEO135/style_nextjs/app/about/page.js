"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="container">
        <h1>About page </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, numquam
          maiores? Quaerat minus itaque animi dolore veniam ipsam mollitia
          voluptas!
        </p>
        <style jsx>
          {`
            .container {
              background-color: red;
              color: white;
              height: 100vh;
              width: 100vw;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              background-image: url("https://picsum.photos/4000");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            }
          `}
        </style>
      </div>

      <div className="container alt">
        this contianer style will not work here
        {/* <style jsx global> */}
        <style jsx>
          {`
            .alt{
              color: azure;
              text-align : center;
              height: 30vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default page;
