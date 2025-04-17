import React from "react";
import Home from "../src/components/AIPhotoEnchancer/Home";

const AIPhotoEnhancer = () => {
  //this is going to be traeted as my app.jsx

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="font-mono text-4xl font-bold">AI Image Enhancer</h1>
        <p>Upload Your Image and let AI enchance to in seconds</p>
      </div>

      <Home />

      <div className="text-lg text-gray-600">footer</div>
    </div>
  );
};

export default AIPhotoEnhancer;
