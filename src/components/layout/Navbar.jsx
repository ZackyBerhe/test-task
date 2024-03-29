import React from "react";
import Logo from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav class="flex justify-center border-gray-200">
      <div class="w-full md:w-4/5 flex flex-wrap items-center justify-between mx-4 py-3  md:py-8 mt-4 rounded-xl font-primary">
        <a href="/">
          <img src={Logo} alt="MY-HOME Logo" className="max-w-32 md:max-w-44" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                class="block py-2 px-3 text-white bg-Primary rounded md:bg-transparent md:text-Primary md:p-0 dark:text-white md:dark:text-Primary"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-Secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-Primary md:p-0"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-Secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-Primary md:p-0"
              >
                Locations
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-Secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-Primary md:p-0"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-Secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-Primary md:p-0"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
