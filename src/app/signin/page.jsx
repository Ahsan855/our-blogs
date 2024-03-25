"use client";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import img from "../../images/SingInBg.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: "400" });
export default function SignIn() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [randomOperator, setRandomOperator] = useState("");
  const [res, setRes] = useState(0);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setNum1(Math.round(Math.random() * 10));
    setNum2(Math.round(Math.random() * 10));
    const pmm = ["+", "-", "*"];
    setRandomOperator(pmm[Math.floor(Math.random() * pmm.length)]);
    setRes(calculateInitialResult());
  }, []);

  const calculateInitialResult = () => {
    switch (randomOperator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      default:
        return num1 + num2;
    }
  };

  const handleRes = (e) => {
    e.preventDefault();
    const inputValue = e.target.capraInput?.value;
    const myVal = Number(inputValue);
    let email = e.target.email.value;
    let password = e.target.password.value;

    if (res === myVal) {
      router.push("/"); // Navigate to the home page ("/")
    } else {
      setNum1(Math.round(Math.random() * 10));
      setNum2(Math.round(Math.random() * 10));
      setRes(calculateInitialResult());
    }
  };

  return (
    <div className="h-screen pt-20">
      <form onSubmit={handleRes} className="flex h-full">
        {/* Input Section */}
        <div className="w-full md:w-[60%] lg:w-[30%] mx-auto">
          <div className="flex flex-col md:pt-[70px] justify-center p-5 gap-2 lg:pt-[50px]">
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
              <Link href="/signup">
                New To this website
                <span className="text-primary text-xl font-medium pl-[8px]">
                  Signup
                </span>
              </Link>
              <h1 className="lg:text-right cursor-pointer hover:text-blue-500">
                Forgot password?
              </h1>
            </div>
            <div
              className={`flex items-center gap-x-2 justify-start text-xl ${nunito.className}`}
            >
              <h1 className="bg-primary w-1/4 text-center text-white px-2 py-1 rounded-md">
                {num1}
                {randomOperator}
                {num2}
              </h1>
              <span className="text-xl"> = </span>
              <input
                className="border px-3 py-1 w-full border-primary rounded-md"
                type="text"
                name="capraInput"
                placeholder="Result"
                required
              />
            </div>
            <div className="flex justify-center mt-7">
              <button
                type="submit"
                className="bg-primary rounded-lg hover:bg-[#0C2D57] duration-500 text-white px-20 w-full py-3"
              >
                Signin
              </button>
            </div>
          </div>
        </div>
        {/* ----------------------- Image and text section--------------------- */}
        <div className="hidden  lg:w-[70%] md:flex flex-col lg:flex-row bg-[#0C2D57] p-6">
          <div className="">
            <p className="text-3xl text-white font-bold lg:pt-7">
              Welcome Back, WritePress!
            </p>
            <p className="mt-4 text-gray-300 font-bold lg:pt-7">
              Access your seller dashboard to manage your inventory, orders, and
              customer messages. Quickly update your store information and keep
              track of your business performance.
            </p>
          </div>
          <Image
            className=" lg:w-[700px] object-cover"
            src={img}
            alt="signIn"
          />
        </div>
      </form>
    </div>
  );
}
