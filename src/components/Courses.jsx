import React from "react";
import Card from "./Card";
import { CardData } from "../assets/Data";

function Courses() {
  return (
    <div className="max-w-6xl mx-auto my-0 py-6">
      <h1 className="text-3xl bold text-center my-10 font-semibold">
        Our Courses
      </h1>
      <div className="grid md:grid-cols-3 gap-9 grid-cols-1">
        {CardData.map(card => (
          <Card
            title={card.title}
            name={card.name}
            img={card.img}
            duration={card.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
