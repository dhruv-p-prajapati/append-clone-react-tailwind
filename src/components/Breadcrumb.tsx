import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();

  return (
    <div className="bg-aboutBg py-4">
      <div className="container justify-center items-center">
        <div className="flex gap-2 items-center text-[#b2b2b2] font-semibold">
          <Link to="/" className="text-accent hover:opacity-70 duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="capitalize text-default">
            {location.pathname.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
