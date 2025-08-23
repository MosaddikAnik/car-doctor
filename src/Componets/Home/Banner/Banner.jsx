import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img5}
          className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
        />
        <div className="absolute top-1/4 left-6 md:left-12 lg:left-24 space-y-3 md:space-y-4">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl leading-tight">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white max-w-xs md:max-w-md text-sm md:text-base">
            There are many variations of passages available, but the majority
            have suffered alteration in some form.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <button className="btn btn-active border-none bg-orange-600 text-white">
              Discover More
            </button>
            <button className="btn btn-outline hover:bg-amber-600 border-amber-50 text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-10 right-1/2 md:right-6 flex gap-3 transform translate-x-1/2 md:translate-x-0">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn bg-orange-500 btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
        />
        <div className="absolute top-1/4 left-6 md:left-12 lg:left-24 space-y-3 md:space-y-4">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl leading-tight">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white max-w-xs md:max-w-md text-sm md:text-base">
            There are many variations of passages available, but the majority
            have suffered alteration in some form.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <button className="btn btn-active border-none bg-orange-600 text-white">
              Discover More
            </button>
            <button className="btn btn-outline hover:bg-amber-600 border-amber-50 text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-10 right-1/2 md:right-6 flex gap-3 transform translate-x-1/2 md:translate-x-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn bg-orange-500 btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
        />
        <div className="absolute top-1/4 left-6 md:left-12 lg:left-24 space-y-3 md:space-y-4">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl leading-tight">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white max-w-xs md:max-w-md text-sm md:text-base">
            There are many variations of passages available, but the majority
            have suffered alteration in some form.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <button className="btn btn-active border-none bg-orange-600 text-white">
              Discover More
            </button>
            <button className="btn btn-outline hover:bg-amber-600 border-amber-50 text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-10 right-1/2 md:right-6 flex gap-3 transform translate-x-1/2 md:translate-x-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn bg-orange-500 btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
        />
        <div className="absolute top-1/4 left-6 md:left-12 lg:left-24 space-y-3 md:space-y-4">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl leading-tight">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white max-w-xs md:max-w-md text-sm md:text-base">
            There are many variations of passages available, but the majority
            have suffered alteration in some form.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <button className="btn btn-active border-none bg-orange-600 text-white">
              Discover More
            </button>
            <button className="btn btn-outline hover:bg-amber-600 border-amber-50 text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-10 right-1/2 md:right-6 flex gap-3 transform translate-x-1/2 md:translate-x-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn bg-orange-500 btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 5 */}
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
        />
        <div className="absolute top-1/4 left-6 md:left-12 lg:left-24 space-y-3 md:space-y-4">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl leading-tight">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white max-w-xs md:max-w-md text-sm md:text-base">
            There are many variations of passages available, but the majority
            have suffered alteration in some form.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <button className="btn btn-active border-none bg-orange-600 text-white">
              Discover More
            </button>
            <button className="btn btn-outline hover:bg-amber-600 border-amber-50 text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-10 right-1/2 md:right-6 flex gap-3 transform translate-x-1/2 md:translate-x-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn bg-orange-500 btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 6 */}
      <div id="slide6" className="carousel-item relative w-full">
        <img
          src={img6}
          className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
        />
        <div className="absolute top-1/4 left-6 md:left-12 lg:left-24 space-y-3 md:space-y-4">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl leading-tight">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="text-white max-w-xs md:max-w-md text-sm md:text-base">
            There are many variations of passages available, but the majority
            have suffered alteration in some form.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <button className="btn btn-active border-none bg-orange-600 text-white">
              Discover More
            </button>
            <button className="btn btn-outline hover:bg-amber-600 border-amber-50 text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-10 right-1/2 md:right-6 flex gap-3 transform translate-x-1/2 md:translate-x-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn bg-orange-500 btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
