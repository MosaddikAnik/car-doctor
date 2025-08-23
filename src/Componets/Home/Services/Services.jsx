import React, { useEffect, useState } from "react";
import ServicesCart from "./ServicesCart";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="px-6 lg:px-20 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <h3 className="text-amber-600 text-xl font-semibold">Service</h3>
        <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
          Our Service Area
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServicesCart key={service._id} item={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
