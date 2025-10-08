import React from "react";

function Map() {
  return (
    <div className="map-container" style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Mysore Palace Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.4488577311261!2d76.65514926951487!3d12.305176999199424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7bcd5b7fdf7f%3A0xe9b9c879b0a3f727!2sMysore%20Palace!5e0!3m2!1sen!2sin!4v1696706563736!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
