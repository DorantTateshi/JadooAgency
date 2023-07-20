import "./App.css";
import { useState } from "react";

export default function Feedback(props) {
  return (
    <>
      <div className="rounded-3xl border-2 border-solid">
        <p className="px-3 py-5">{props.feedback}</p>
        <div className="flex justify-between px-4 py-4">
          <div className="text-left">
            <p>
              <b>{props.name}</b>
            </p>
            <p>{props.place}</p>
          </div>
          <div className="text-right">
            <img className="w-26 h-16 rounded-full" src={props.image} />
          </div>
        </div>
      </div>
    </>
  );
}
