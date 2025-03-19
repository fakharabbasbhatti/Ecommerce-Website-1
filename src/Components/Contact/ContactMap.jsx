import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <iframe
        title="Google Map"
        className="w-full max-w-[1100px] h-[450px] md:h-[400px] sm:h-[350px] border-0 rounded-sx shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3476.278146779855!2d71.67005179999998!3d29.391418249700017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91f4a89601cd%3A0xaf34dd6c1d59a43a!2sCodes%20Thinker!5e0!3m2!1sen!2s!4v1742380022170!5m2!1sen!2s"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
