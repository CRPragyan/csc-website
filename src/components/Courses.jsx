import React from "react";
import Card from "./Card";

function Courses() {
  return (
    <div className="max-w-6xl mx-auto my-0">
      <h1 className="text-3xl bold text-center">Our Courses</h1>
      <div className="grid grid-cols-3 gap-4 ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Courses;
