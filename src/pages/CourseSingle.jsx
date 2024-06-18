import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import CardData from "../assets/data.json";
import SyllabusData from "../assets/syllabus.json";
import Syllabus from "../components/Syllabus";

function CourseSingle() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const pdfComponent = useRef();

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
      <div className="max-w-6xl mx-auto my-6 ">
        <h1 className=" text-orange-500 text-4xl mb-3">Description</h1>
        <p className="text-xl mb-4 text-gray-600">{course.description}</p>
        <h1 className=" text-orange-500 text-4xl">Syllabus</h1>
        <div className="mt-2">
          <Syllabus courseTitle={course.title} SyllabusData={SyllabusData} />
        </div>
      </div>
    </div>
  );
}

export default CourseSingle;
