import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardData } from "../assets/Data";

function CourseSingle() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!id) return;

    const foundCourse = CardData.find(course => course.id === id);
    setCourse(foundCourse);
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.name}</p>
      <p>Duration: {course.duration}</p>
      <img src={course.img} alt={course.name} />
    </div>
  );
}

export default CourseSingle;
