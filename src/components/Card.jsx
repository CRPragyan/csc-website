import { Link } from "react-router-dom";

function Card({ img, title, name, duration, id }) {
  return (
    <div>
      <div className="md:w-full w-4/5 mx-auto my-0 hover:scale-105 shadow-md hover:shadow-lg transition-all rounded-md bg-white">
        <Link to={"/course/" + id + "/" + name}>
          <div className="relative h-60 ">
            <img
              className="absolute object-center object-cover w-full h-full overflow-hidden rounded-t-sm"
              src={img}
              alt=""
            />
            <div className="absolute -bottom-4 md:left-28 left-[28%] ">
              <h2 className="bg-orange-500 text-xl px-8 py-1 text-white rounded-full ">
                {title}
              </h2>
            </div>
          </div>
        </Link>
        <div className="flex justify-center items-center text-orange-500 mt-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 "
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
              clipRule="evenodd"
            />
          </svg>

          <p>Duration: {duration}</p>
        </div>
        <div className="">
          <p className="text-center text-xl py-4">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
