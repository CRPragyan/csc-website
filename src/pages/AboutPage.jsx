import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  const images = [
    { src: "img/img1.jpg", alt: "Image 1" },
    { src: "img/img2.jpg", alt: "Image 2" },
    { src: "img/img3.jpg", alt: "Image 3" },
    { src: "img/img4.jpg", alt: "Image 4" },
    { src: "img/img5.jpg", alt: "Image 5" },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Common Service Center, Basugaon is an Amtron authorised Computer
          Training Centre located in Basugaon, W/no- 2, Dist- Chirang, Assam,
          India. It is playing a key role in making the people of this locality
          digitally literate. It has trained several thousands of students in
          various computer courses and most of them were engaged in various
          Govt. or Private Jobs. It was established in July/2009 to provide the
          various digital services to the citizens including computer training.
          It was registered under Basugaon Town Committee as a Computer Training
          Centre on 2015 having registration number 302/290. Common Service
          Center, Basugaon was authorised by Amtron to conduct its computer
          Courses on July/2017 having Amtron Registration ID=10000109. Since
          then it is providing various computer courses designed by Amtron. The
          mission of Common Service Center, Basugaon is to make the entire
          community of this locality digitally literate and providing computer
          training to the students and unemployed youth with dedicated,
          talented, experienced teachers who motivate and energies the students
          to achieve the best.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to={"/contact"}
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
