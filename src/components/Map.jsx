import React from "react";

function Map() {
  return (
    <div className="w-full">
      <iframe
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.7766576259073!2d90.42033267510985!3d26.462927276918176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3758f7c852552641%3A0xd84e5d6d9c573970!2sAMTRON%2C%20Basugaon!5e0!3m2!1sen!2sin!4v1721537693637!5m2!1sen!2sin&z=22"
      ></iframe>
    </div>
  );
}

export default Map;
