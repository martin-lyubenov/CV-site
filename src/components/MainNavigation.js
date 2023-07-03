import { NavLink } from "react-router-dom";
import MobileMenuBtn from "../UI/MobileMenuBtn";
import { memo, useState } from "react";

// let isInitial = true;

const MainNavigation = memo(function MainNavigation({ nav }) {
  const [isVisible, setIsVisible] = useState(true);

  function toggleMobileMenu(params) {
    setIsVisible((prevValue) => !prevValue);
  }

  return (
    <>
      <MobileMenuBtn onClickHandler={toggleMobileMenu} isVisible={isVisible} />
      <header
        className=" bg-primary relative md:sticky top-0 z-10"
      >
        <div className="flex items-center justify-between w-10/12 mx-auto text-white font-dosis ">
          <NavLink className=" text-3xl font-bold" to={nav.logo.to} end>
            {nav.logo.text}
            <span className=" w-3 h-3 bg-red-500 inline-block rounded-full"></span>
          </NavLink>
          <ul
            className={`${
              isVisible ? "translate-x-full" : "translate-x-0"
            } transition transform duration-300 flex flex-col fixed justify-between py-20 px-5 inset-mobile z-20 gap-1 bg-white pt-24 md:bg-inherit md:static md:flex-row md:text-white md:p-0 md:m-0 md:translate-x-0 md:transition-none`}
          >
            {nav.links.map((link, i) => {
              return (
                <li key={i} className=" group-[]:">
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-primary bg-white border md:border-none"
                          : "bg-primary text-white"
                      }  text-xl mr-4 block px-10 py-5 font-bold md:p-3 z-30 md:rounded-none hover:text-primary hover:bg-white hover:border md:hover:border-none`
                    }
                    onClick={toggleMobileMenu}
                    to={link.to}
                  >
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
});

export default MainNavigation;
