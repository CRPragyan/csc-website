function Card({ img, title }) {
  return (
    <div>
      <div className="w-70">
        <div className="relative h-60">
          <img
            className="absolute object-center object-cover w-full h-full"
            src={img}
            alt=""
          />
          <div className="absolute -bottom-4 left-28 ">
            <h2 className="bg-orange-500 text-xl px-8 py-1 text-white rounded-full ">
              {title}
            </h2>
          </div>
        </div>
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
          <p>Duration: 1 Year</p>
        </div>

        <p className="text-center text-xl mt-6">
          Post Graduate Diploma In computer Application
        </p>
      </div>
    </div>
  );
}

export default Card;
