import { Nunito } from "next/font/google";

// import Link from "next/link";
const nunito = Nunito({ subsets: ["latin"], weight: "400" });

const items = [
  {
    id: 1,
    title: "Back End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 2,
    title: "Front End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 3,
    title: "User Interface Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
  },
];

export default function Pagination() {
  return (
    <div className=" mt-10 px-5 md:px-0 py-3">
      <div className={nunito.className}>
        <nav
          className="isolate inline-flex ring-1 w-auto ring-inset rounded-full ring-gray-300 shadow-sm"
          aria-label="Pagination"
        >
          <a
            href="#"
            className="relative inline-flex items-center rounded-l-full px-3 py-2 text-gray-400  hover:bg-gray-200 focus:z-20 focus:outline-offset-0"
          >
            PREV
            <span className="sr-only">Previous</span>
          </a>
          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
          <a
            href="#"
            aria-current="page"
            className="relative inline-flex items-center px-3 py-2 dark:text-white text-sm font-semibold text-gray-900  hover:bg-gray-200 focus:z-20 focus:outline-offset-0"
          >
            <span className="text-xl">1</span>
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-3 py-2 dark:text-white text-sm font-semibold text-gray-900  hover:bg-gray-200 focus:z-20 focus:outline-offset-0"
          >
            2
          </a>
          <a
            href="#"
            className="relative hidden items-center px-3 py-2 text-sm dark:text-white font-semibold text-gray-900  hover:bg-gray-200 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            3
          </a>
          <span className="relative inline-flex dark:text-white items-center px-3 py-2 text-sm font-semibold text-gray-700 focus:outline-offset-0">
            ...
          </span>
          <a
            href="#"
            className="relative hidden items-center dark:text-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-200 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            8
          </a>
          <a
            href="#"
            className="relative inline-flex dark:text-white items-center px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-200 focus:z-20 focus:outline-offset-0"
          >
            9
          </a>
          <a
            href="#"
            className="relative inline-flex dark:text-white items-center px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 focus:z-20 focus:outline-offset-0"
          >
            10
          </a>
          <a
            href="#"
            className="relative inline-flex dark:text-white items-center rounded-r-full px-3 py-2 text-gray-400  hover:bg-gray-200 focus:z-20 focus:outline-offset-0"
          >
            NEXT
            <span className="sr-only">Next</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
