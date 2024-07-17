import React from "react";

function Map() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314.24792642879174!2d90.42302606398944!3d26.46289810853199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3758f7c852552641%3A0xd84e5d6d9c573970!2sKBFkwebf%2C%20Basugaon!5e0!3m2!1sen!2sin!4v1720076554612!5m2!1sen!2sin&z=5&"
        className="w-full h-96 sm:h-64 border-0"
        allowFullScreen=""
        loading=""
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
