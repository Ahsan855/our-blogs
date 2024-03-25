"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import img from "../../images/SingInBg.png";

const SignUp = () => {
  const [open, setOpen] = useState(false);

  const handleRes = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    console.log(name, email, password);
  };

  return (
    <div className="h-screen pt-20">
      <form onSubmit={handleRes} className="flex h-full">
        <div className="w-full md:w-[60%] lg:w-[30%] mx-auto">
          <div className="flex flex-col md:pt-[70px] justify-center p-7 gap-2 lg:pt-[50px]">
            <label htmlFor="Name">Name</label>
            <input
              className="border rounded-md w-[100%] p-2 mx-auto hover:border-gray-700 border-gray-400"
              type="text"
              name="name"
              id="Name"
              required
            />
            <label htmlFor="Email">Email address</label>
            <input
              className="border rounded-md w-[100%] p-2 mx-auto hover:border-gray-700 border-gray-400"
              type="email"
              name="email"
              id="Email"
              required
            />
            <label htmlFor="Password">Password</label>
            <div className="relative">
              <input
                className="border rounded-md w-[100%] p-2 mx-auto hover:border-gray-700 border-gray-400"
                type={`${open ? "text" : "password"}`}
                name="password"
                id="Password"
                required
              />
              <span
                onClick={() => setOpen(!open)}
                className="cursor-pointer absolute top-3 right-5"
              >
                {open ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
              <Link href="/signin">
                Already have an account?
                <span className="text-primary text-xl font-medium pl-[8px]">
                  SignIn
                </span>
              </Link>
              <h1 className="lg:text-right cursor-pointer hover:text-blue-500">
                Forgot password?
              </h1>
            </div>

            <div className="flex justify-center mt-7 ">
              <button className="bg-primary rounded-lg duration-500 w-full text-white px-20 py-3">
                Signup
              </button>
            </div>
          </div>
        </div>
        {/* ----------------------- Image and text section--------------------- */}
        <div className="hidden  lg:w-[70%] md:flex flex-col lg:flex-row bg-primary p-6">
          <div className="">
            <p className="text-3xl text-white font-bold lg:pt-7">
              WRITEPRESS By <br /> Sifat CEO
            </p>
            <p className="mt-4 text-white font-bold lg:pt-7">
              All in one human resource management <br /> system. Dino
              simplifies every aspect of <br /> CEO.
            </p>
          </div>
          <Image className=" lg:w-[700px] object-cover" src={img} alt="" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
