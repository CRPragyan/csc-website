import React from "react";
import Card from "./Card";

function Courses() {
  return (
    <div className="max-w-6xl mx-auto my-0 mb-9">
      <h1 className="text-3xl bold text-center mb-7 font-semibold">
        Our Courses
      </h1>
      <div className="grid md:grid-cols-3 gap-9 grid-cols-1">
        <Card
          img={
            "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"DCOA"}
        />
        <Card
          img={
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"PGDCA"}
        />
        <Card
          img={
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWRlbnQlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D"
          }
          title={"ADCA"}
        />
      </div>
    </div>
  );
}

export default Courses;
