import "./App.css";
import { useState } from "react";
import logo2 from "./assets/logo2.png";
import appdownload from "./assets/appdownload.png";

export default function Footer() {
  return (
    <>
      <div>
        <img src={logo2} />
        <p className="text-indigo-900">
          Book your trip in minutes, get full control for much longer.
        </p>
      </div>

      <div>
        <h4 className="text-xl">Quick Links</h4>
        <ul className="py-1 text-indigo-900">
          <li className="py-2">
            <a href="bestplaces">Destinations</a>
          </li>
          <li className="py-1">
            <a>Hotels</a>
          </li>
          <li className="py-1">
            <a>Flights</a>
          </li>
          <li className="py-1">
            <a>Bookings</a>
          </li>
          <li className="py-1">
            <a>Login</a>
          </li>
          <li className="py-1">
            <a>Signup</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl">Contacts</h4>
        <ul className="py-1 text-indigo-900">
          <li className="py-1">
            <a>FAQs</a>
          </li>
          <li
            className="
            py-1
          "
          >
            <a>Help</a>
          </li>
          <li className="py-1">
            <a>Policies</a>
          </li>
          <li
            className="
            py-1
          "
          >
            <a>Terms & Conditions</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl">More</h4>
        <ul className="py-1 text-indigo-900">
          <li className="py-1">
            <a>Career</a>
          </li>
          <li className="py-1">
            <a>Airlines</a>
          </li>
          <li className="py-1">
            <a>Airline Fees</a>
          </li>
          <li className="py-1">
            <a>Low Fare Tips</a>
          </li>
        </ul>
      </div>

      <div>
        <div className="flex ">
          <div className="rounded-xl border-solid border-indigo-900 px-3">
            O
          </div>
          <div className="rounded-xl border-solid border-indigo-900 px-3">
            O
          </div>
          <div className="rounded-xl border-solid border-indigo-900 px-3">
            O
          </div>
        </div>
        <h4 className="py-3 text-xl text-indigo-900">Discover Our App</h4>
        <img src={appdownload} className="w-36" />
      </div>
    </>
  );
}
