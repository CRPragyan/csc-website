import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="">
        <div className="flex gap-3 max-w-6xl mx-auto my-y justify-between items-center">
          <Link to={"/"} className="flex items-center gap-1 h-24 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 fill-blue-300 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>

            <span className="text-3xl font-mono ">
              <span className="text-orange-500 bold">Common</span> Service
              Center
            </span>
          </Link>
          <div className="flex gap-3">
            <div className="flex gap-2 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-orange-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <div>
                <h1 className="">Working Time</h1>
                <p className="text-sm text-gray-500 semi-bold">
                  Monday - Friday: 08 AM - 06 PM
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8   text-orange-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <div>
                <h1>Find Us</h1>
                <p className="text-sm text-gray-500 semi-bold">
                  Basugaon,Dhanbazar,ASSAM(BTR)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-900 to-blue-500 p-6 ">
          <div className="flex justify-between items-center max-w-6xl mx-auto my-y">
            <div className="flex  gap-7  text-xl text-white font-semibold">
              <Link to={"/"}>Home</Link>
              <Link to={"/courses"}>Courses</Link>
              <Link to={"/about"}>About Us</Link>
              <Link to={"/conatct"}>Conact</Link>
            </div>
            <div className="flex">
              <button className="text-white bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
