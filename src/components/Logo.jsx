import { Link } from "react-router-dom";

function Logo({ size, responsive }) {
  return (
    <div>
      <Link to={"/"} className="flex items-center gap-1 hover:text-current">
        <span className={`${responsive} md:${size} font-mono items-center `}>
          <span className="text-orange-500 bold">Common</span> Service
          Center,Basugaon
        </span>
      </Link>
    </div>
  );
}

export default Logo;
