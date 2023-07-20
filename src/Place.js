import "./App.css";
import { useState } from "react";

export default function Place(props) {
  return (
    <>
      <div className="max-w-sm rounded-xl shadow-lg">
        <div className="overflow-hidden">
          <img
            className="-z-10 w-full overflow-hidden transition-transform hover:scale-125"
            src={props.image}
            alt="City Image"
          />
        </div>
        <div className="z-10 px-6 py-4">
          <div className="mb-2 flex justify-between">
            <span className="text-left">
              <b>{props.place}</b>
            </span>
            <span className="text-right">{props.travellers}</span>
          </div>
          <p>{props.trip}</p>
        </div>
      </div>
    </>
  );
}
