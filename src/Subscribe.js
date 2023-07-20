import "./App.css";
import { useState } from "react";

export default function Subscribe() {
  return (
    <>
      <div className="h-40 rounded-xl bg-slate-200 text-center">
        <h4 className=" px-4 py-1 text-4xl text-gray-400">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo.
        </h4>
        <input
          className="rounded-xl px-3 py-2"
          type="text"
          placeholder="✉️ Your email"
        />
        <button className="m-2 rounded-xl bg-red-500 px-3 py-2 text-center text-white">
          Subscribe
        </button>
      </div>
    </>
  );
}
