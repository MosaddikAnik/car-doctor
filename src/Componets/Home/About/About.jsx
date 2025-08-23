import React from "react";
import img from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-20 py-16">
      <div className="relative flex-1">
        <img
          src={img}
          alt="Person working"
          className="w-4/5 rounded-lg shadow-2xl"
        />
        <img
          src={img2}
          alt="Car parts"
          className="absolute right-5 top-1/2 w-3/5 border-8 border-white rounded-lg shadow-lg hidden md:block"
        />
      </div>
      <div className="flex-1 space-y-6">
        <h3 className="text-amber-600 text-xl font-semibold">About Us</h3>
        <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
          We are qualified & have years of experience <br /> in this field
        </h2>
        <p className="text-gray-600 leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable.
        </p>
        <button className="btn btn-active border-none bg-orange-600 text-white">
          Get More Info
        </button>
      </div>
    </section>
  );
};

export default About;
