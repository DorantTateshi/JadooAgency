import "./App.css";
import bookingImg1 from "./assets/bookingImage1.jpeg";
import bookingImg2 from "./assets/bookingImage2.jpeg";
import wallet from "./assets/wallet.png";
import plane from "./assets/plane.jpg";
import location from "./assets/location.png";

export default function BookTrip() {
  return (
    <>
      <div className="mx-2 my-2 mt-3">
        <p className="text-md">Easy and fast</p>
        <h4 className="py-1 text-5xl">Book your next trip in 3 easy steps</h4>
        <div className="py-3">
          <p>
            <img className="m-2 inline w-8" src={location} />
            Choose Destination lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Urna, tortor tempus.
          </p>
        </div>
        <div className="py-3">
          <p>
            <img className="m-2 inline w-8" src={wallet} />
            Make Payment lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Urna, tortor tempus.
          </p>
        </div>
        <div className="py-3">
          <p>
            <img className="m-2 inline w-8" src={plane} />
            Reach Airport on selected date lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Urna, tortor tempus.
          </p>
        </div>
      </div>
      <div className="mx-2 pt-5">
        <div className="h-80 rounded-2xl border-2 border-solid shadow-2xl shadow-sky-500">
          <div class="h-[150px] w-full overflow-hidden rounded-xl px-2 py-2">
            <img
              src={bookingImg1}
              alt="Trip To Greece"
              class="h-full w-full object-cover object-top"
            />
          </div>
          {/* <img
            className="h-40 w-full rounded-3xl object-contain object-top px-2 py-2"
            src={bookingImg1}
          /> */}
          <h3 className="px-5 py-2 text-lg">
            <b>Trip To Greece</b>
          </h3>
          <p className="px-5 py-2 text-sm font-light">
            14-29 June | by Robbin Jobs
          </p>
          <div className="flex px-5 py-1">
            <div className="mx-1 rounded-full bg-gray-300 px-2 py-1">🛫</div>
            <div className="mx-1 rounded-full bg-gray-300 px-2 py-1">🗺️</div>
            <div className="mx-1 rounded-full bg-gray-300 px-2 py-1">🗒️</div>
          </div>
          <p className="text-color3 gap-3 px-5 py-2 text-sm font-light">
            🏢24 people going
          </p>
        </div>
      </div>
    </>
  );
}
