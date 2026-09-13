function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

         {/* Logo  */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center text-white font-bold">
            D
          </div>

          <h2 className="text-xl font-bold">
            Dev Stack
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          <a href="#home" className="text-gray-700 hover:text-violet-600">
            Home
          </a>

          <a href="#technologies" className="text-gray-700 hover:text-violet-600">
            Technologies
          </a>

          <a href="#projects" className="text-gray-700 hover:text-violet-600">
            Projects
          </a>

          <a href="#about" className="text-gray-700 hover:text-violet-600">
            About
          </a>

          <a href="#contact" className="text-gray-700 hover:text-violet-600">
            Contact
          </a>
        </div> {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-gray-700">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
}

       

export default Navbar;