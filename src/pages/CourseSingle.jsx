import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardData } from "../assets/Data";

function CourseSingle() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const foundCourse = CardData.find(course => course.id === id);
    setCourse(foundCourse);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <div className="relative h-[450px] bg-gradient-to-r from-gray-900 to-gray-600">
        <img
          className="w-full h-full absolute object-cover object-top-center mix-blend-overlay"
          src={course.img}
          alt={course.name}
        />
        <h1 className="text-white text-4xl text-center flex justify-center items-center h-full">
          {course.name}
        </h1>
      </div>
      <div className="max-w-6xl mx-auto my-6 text-center text-orange-500 text-3xl">
        <h1>Description</h1>
      </div>
    </div>
  );
}

export default CourseSingle;
