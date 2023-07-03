import React from "react";
import contactImg from "../assets/contact.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Alex</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for full-time positions. Contact me and let&apos;s
                  talk.
                </p>
              </div>
              <p className="uppercase pt-8">Connect With Me</p>
              <div className="flex items-center justify-start gap-4 py-4">
                <a href="https://github.com/AlexeiVorobev" target="_blank">
                  <div className="rounded-full shadow-md shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiFillGithub />
                  </div>
                </a>
                <div className="rounded-full shadow-md shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiFillLinkedin />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiFillMail />
                </div>
                <div className="rounded-full shadow-md shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonFill />
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppecase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppecase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppecase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppecase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppecase text-sm py-2">Email</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <a href="#">
            <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="m-auto text-[#5651e5]" size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;