import { LazyLoadImage } from "react-lazy-load-image-component";
import Typical from "react-typical";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Button from "../UI/Button";

function Header({ header }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className=" bg-primary min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between md:w-10/12">
        <div className=" w-4/5 md:w-2/5 ">
          <LazyLoadImage
            src={header.img}
            className="rounded-full"
            placeholderSrc={process.env.PUBLIC_URL + "/logo512.png"}
          />
        </div>
        <div className=" text-white font-dosis text-center md:text-left">
          <h2
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 ease-in-out  text-4xl font-bold  md:text-5xl`}
          >
            {header.text[0]}
            <br />

            {header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 ease-in-out font-bold text-2xl text-gray-500`}
          >
            {header.text[2]}{" "}
            <Typical
              steps={header.typical}
              loop={Infinity}
              className=" inline-block"
            />
          </h1>
          <ScrollLink to="stack" smooth="true">
            <Button text={header.btnText} animation="animate-float" />
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
