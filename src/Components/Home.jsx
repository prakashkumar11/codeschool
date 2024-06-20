import Navbar from "./Navbar";
import Footer from "./Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="grid md:grid-cols-2 md:p-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate__animated animate__animate__animated animate__fadeIn">
        <div>
          <img
            src="./images/student1.jpg"
            className=" w-3/4 rounded-full animate__animated animate__pulse border-2 shadow-xl "
          />
        </div>

        <div className="flex flex-col gap-8 justify-center ">
          <h1 className=" text-7xl font-bold text-white animate__animated animate__pulse  shadow-xl p-4 ">
            "Say Hello !{" "}
          </h1>
          <p className=" text-2xl font-semibold ">
            Enjoy complete digital learning experience with codeschool by
            learning with me
          </p>
          <div className="flex gap-6">
            <button className="bg-[#100d22] text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-slate-800 ">
              Learn More
            </button>
            <button className="border-[#100d22] border-2 text-[#100d22] px-12 py-4 rounded-md text-lg font-semibold hover:bg-slate-800 hover:text-white ">
              Watch Video
            </button>
          </div>
        </div>
      </header>

      <div className="p-24">
        <h1 className="text-center text-4xl font-bold">
          Benifits & Advantages
        </h1>
        <p className="text-gray-600 text-center mt-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque vel
          sunt rerum? Optio similique obcaecati ullam quo quia magnam blanditiis
          ipsam, porro eaque excepturi repudiandae officiis recusandae eos
          voluptas!
        </p>

        <div className="w-11/12  mx-auto mt-12 grid grid-cols-3 gap-8">
          <div className="shadow-lg border rounded-md p-4 text-center ">
            <i className="ri-artboard-line text-6xl"></i>
            <h1 className="text-2xl font-semibold text-center mb-2">
              Great Faculty
            </h1>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae, quia veniam aperiam ad fugit{" "}
            </p>
          </div>

          <div className="shadow-lg border rounded-md p-4 text-center ">
            <i className="ri-edit-box-line text-6xl"></i>
            <h1 className="text-2xl font-semibold text-center mb-2">
              Latest Curriculum
            </h1>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae, quia veniam aperiam ad fugit{" "}
            </p>
          </div>

          <div className="shadow-lg border rounded-md p-4 text-center ">
            <i className="ri-tree-line text-6xl"></i>
            <h1 className="text-2xl font-semibold text-center mb-2">
              Green Enviroment
            </h1>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              recusandae, quia veniam aperiam ad fugit{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Sliding ke liye swiper js */}

      <div className="grid grid-cols-2 p-12">
        <div>
          <Swiper className="w-8/12">
            <SwiperSlide>
              <img src="./images/s1.jpeg" className="w-full" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/s4.jpeg" className="w-full" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/s3.jpeg" className="w-full" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/s2.jpeg" className="w-full" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <h1 className="text-7xl font-bold">"Say Hello !</h1>
          <p className="text-2xl font-semibold">
            Enjoy complete digital learning experience with CodeSchool...
          </p>
          <div className="flex gap-6">
            <button className="bg-[#100d22] text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-slate-800 ">
              Learn More
            </button>
            <button className="border-[#100d22] border-2 text-[#100d22] px-12 py-4 rounded-md text-lg font-semibold hover:bg-slate-800 hover:text-white ">
              Watch Video
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
