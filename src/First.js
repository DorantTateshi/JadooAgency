import "./App.css";
import Vector from "./assets/HeroVector.png";
import plus from "./assets/plusGroup.png";

export default function First() {
  return (
    <>
      <div className="container grid max-w-6xl grid-cols-2">
        <div>
          <p className="text-md py-1 text-red-500">
            BEST DESTINATIONS AROUND THE WORLD
          </p>
          <h1 className="py-1 text-7xl">
            Travel , enjoy and live a new and full life
          </h1>
          <p className="py-1 text-xl">
            Built Wicket longer admire do barton vantity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex">
            <button className="mx-3 rounded-md bg-orange-500 px-2 py-2">
              Find out more
            </button>
            <div className="mx-3 rounded-full bg-red-600 px-3 py-3 ">▶</div>
            <p className="mx-3 py-3">Play Demo</p>
          </div>
        </div>
        <div>
          <img className="absolute float-right pl-5" src={Vector} />
        </div>
        {/* <div>
          <img className="absolute float-right" src={plus} />
        </div> */}
      </div>
    </>
  );
}
