import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-start py-4">
        <div>
          <h1 className="text-3xl mb-3">Get in Touch</h1>
          <Logo size={"text-xl"} />
          <p className="text-l text-gray-200 semi-bold mt-3">
            Basugaon, Dhanbazar, Near Durga Mandir
            <br />
            Assam-783372 (BTR)
            <br /> Contact No - (8402865264)
            <br /> Email - (csc.basugaon@gmail.com)
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-orange-500 font-bold">Quick Links</h1>
          <Link to={"/"}>Home</Link>
          <Link to={"/courses"}>Courses</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/conatct"}>Contact</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-orange-500 font-bold">Follow US</h1>
          <Link to={"/"}>Facebook</Link>
          <Link to={"/courses"}>Instgram</Link>
          <Link to={"/about"}>Linkdin</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
