import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <nav className=" bg-blue-500 border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            KCL★Hack
          </span>
          <div className="flex items-center lg:order-2">
            <Link
              href="/login"
              className="text-white bg-gray-800  focus:ring-4  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-500 focus:outline-none focus:ring-gray-800"
            >
              LOGIN
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white"
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/todo"
                  className="block py-2 pr-4 pl-3  border-b lg:border-0 lg:hover:text-primary-700 lg:p-0 text-white lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700"
                >
                  TODO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
