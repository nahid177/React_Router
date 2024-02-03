import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="bg-[#F4E9E7] border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/sing_in" className="self-center ml-[60px] text-2xl font-semibold whitespace-nowrap dark:text-white">Router</Link>
  
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"  to="/sing_in" aria-current="page">Home</Link>
          
        </li>
        <li>
        <Link className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"  to="/user">User</Link>     
        </li>
        <li>
        <Link className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"  to="/User_contact">Contact</Link>     
        </li>
      
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;