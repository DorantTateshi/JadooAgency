import "./App.css";
import partner1 from "./assets/partners1.png";
import partner2 from "./assets/partners2.png";
import partner3 from "./assets/partners3.png";

export default function Partners() {
  return (
    <>
      <div>
        <img className="w-26 px-2" src={partner1} />
      </div>
      <div>
        <img className="w-26 px-2" src={partner2} />
      </div>
      <div>
        <img className="w-26 px-2" src={partner3} />
      </div>
      <div>
        <img className="w-26 px-2" src={partner1} />
      </div>
      <div>
        <img className="w-26 px-2" src={partner2} />
      </div>
      <div>
        <img className="w-26 px-2" src={partner3} />
      </div>
    </>
  );
}
