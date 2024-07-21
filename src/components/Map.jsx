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
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA18DCuhNqZ61kKu1vKZgJ0jTUN6FjNNqo&q=Space+Needle,Seattle+WA"
      ></iframe>
    </div>
  );
}

export default Map;
