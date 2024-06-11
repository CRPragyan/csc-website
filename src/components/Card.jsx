function Card() {
  return (
    <div>
      <div className="w-80 ">
        <div className="relative">
          <img
            className="mb-9"
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className=" absolute -bottom-4 left-24 flex  ">
            <h2 className="bg-orange-500 text-xl px-8 py-1 text-white rounded-full ">
              PGDCSA
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center text-orange-500 mb-6">
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
        <p>
          <p className="text-center text-xl mb-6">
            Post Graduate Diploma In computer Application
          </p>
        </p>
      </div>
    </div>
  );
}

export default Card;
