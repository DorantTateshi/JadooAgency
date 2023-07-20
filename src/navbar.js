import logo from "./assets/logo1.png";
import "./App.css";

export default function Navbar() {
  return (
    <nav class="bg-white-800 h-20">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="hover:text-yellow inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-shrink-0 items-center justify-start">
            <img class="h-8 w-auto" src={logo} alt="Your Company" />
          </div>
          <div class="flex flex-1 items-center  sm:items-stretch sm:justify-center">
            <div class=" sm:ml-6 ">
              <div class="flex space-x-4">
                <a
                  href="#bestplaces"
                  class="text-m rounded-md px-3 py-2 font-medium text-gray-950 hover:bg-yellow-500 hover:text-white"
                >
                  Destinations
                </a>
                <a
                  href="#"
                  class="text-m rounded-md px-3 py-2 font-medium text-gray-950 hover:bg-yellow-500 hover:text-white"
                >
                  Hotels
                </a>
                <a
                  href="#"
                  class="text-m rounded-md px-3 py-2 font-medium text-gray-950 hover:bg-yellow-500 hover:text-white"
                >
                  Flights
                </a>
                <a
                  href="#"
                  class="text-m rounded-md px-3 py-2 font-medium text-gray-950 hover:bg-yellow-500 hover:text-white"
                >
                  Bookings
                </a>
                <div class="flex flex-shrink-0 items-center justify-end">
                  <button class="text-m rounded-md border-2 border-solid border-black px-3 py-2 font-medium text-gray-950 hover:bg-yellow-500 hover:text-white">
                    Log in
                  </button>
                  <button class="text-m rounded-md border-2 border-solid border-black px-3 py-2 font-medium text-gray-950 hover:bg-yellow-500 hover:text-white">
                    Sign up
                  </button>
                  <select class="text-m rounded-md px-3 py-2 font-medium text-gray-950 hover:bg-yellow-500 hover:text-black">
                    <option>EN</option>
                    <option>ITA</option>
                    <option>FRA</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
