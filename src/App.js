import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar.js";
import Service from "./Service.js";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import places1 from "./assets/gallery1.jpeg";
import places2 from "./assets/gallery2.jpeg";
import places3 from "./assets/gallery3.jpeg";
import places4 from "./assets/gallery4.jpeg";
import places5 from "./assets/gallery5.jpeg";
import places6 from "./assets/gallery6.jpeg";
import Place from "./Place.js";
import { useState } from "react";
import profile1 from "./assets/profile1.jpeg";
import profile2 from "./assets/profile2.jpeg";
import profile3 from "./assets/profile3.jpeg";
import profile4 from "./assets/profile4.jpeg";
import Feedback from "./Feedback.js";
import Footer from "./Prefooter.js";
import Subscribe from "./Subscribe.js";
import Partners from "./Partners";
import BookTrip from "./BookTrip";
import First from "./First";
import Vector from "./assets/HeroVector.png";
import plus from "./assets/plusGroup.png";
const services = [
  {
    image: icon1,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vantity itself do in it",
  },
  {
    image: icon2,
    title: "Best Flight",
    description: "engrossed listening. Park gate sell they west hard for the.",
  },
  {
    image: icon3,
    title: "Local Events",
    description:
      "barton vantity itself do in it.Preferred to men it engrossed listening.",
  },
  {
    image: icon4,
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
  },
];

const places = [
  {
    id: 0,
    image: places1,
    place: "Rome, Italy",
    trip: "✈︎ 10 days trip",
    travellers: "15.2k",
  },
  {
    id: 1,
    image: places2,
    place: "London, UK",
    trip: "✈︎ 12 days trip",
    travellers: "8.2k",
  },
  {
    id: 2,
    image: places3,
    place: "Paris, France",
    trip: "✈︎ 26 days trip",
    travellers: "24.2k",
  },
  {
    id: 3,
    image: places4,
    place: "New York, USA",
    trip: "✈︎ 8 days trip",
    travellers: "3.2k",
  },
  {
    id: 4,
    image: places5,
    place: "Warsaw, Poland",
    trip: "✈︎ 14 days trip",
    travellers: "9.2k",
  },
  {
    id: 5,
    image: places6,
    place: "Dubai, UAE",
    trip: "✈︎ 17 days trip",
    travellers: "5.8k",
  },
];

const feedbacks = [
  {
    name: "Emma",
    image: profile1,
    place: "Vancouver, Canada",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi debitis nobis id consequuntur rem perferendis hic pariatur voluptatum assumenda, omnis dolorum suscipit quod eius.",
  },
  {
    name: "Gina",
    image: profile2,
    place: "Owerri, Nigeria",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi debitis nobis id consequuntur rem perferendis hic pariatur voluptatum assumenda, omnis dolorum suscipit quod eius.",
  },
  {
    name: "Mark Taylor",
    image: profile3,
    place: "Lahore, Pakistan",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi debitis nobis id consequuntur rem perferendis hic pariatur voluptatum assumenda, omnis dolorum suscipit quod eius.",
  },
  {
    name: "Loveth",
    image: profile4,
    place: "Lavos, Nigeria",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi debitis nobis id consequuntur rem perferendis hic pariatur voluptatum assumenda, omnis dolorum suscipit quod eius.",
  },
];
function App() {
  const [travelImage, setTravelImage] = useState([0, 1, 2]);
  const [feedback, setFeedback] = useState(0);

  function handleClickRight() {
    const [a, b, c] = travelImage;
    if (c === places.length - 1) {
      setTravelImage([0, 1, 2]);
    } else {
      setTravelImage([a + 1, b + 1, c + 1]);
    }
  }

  function handleClickLeft() {
    const [a, b, c] = travelImage;
    if (a === 0) {
      setTravelImage([3, 4, 5]);
    } else {
      setTravelImage([a - 1, b - 1, c - 1]);
    }
  }

  function handleFeedbackDown() {
    if (feedback === 0) {
      setFeedback(feedbacks.length - 1);
    } else {
      setFeedback(feedback - 1);
    }
  }

  function handleFeedbackUp() {
    if (feedback === feedbacks.length - 1) {
      setFeedback(0);
    } else {
      setFeedback(feedback + 1);
    }
  }
  return (
    <>
      <Navbar />

      <First />
      <div className="mb-max">
        <img className=" float-right" src={plus} />
      </div>
      <div id="services" className="container mt-56 max-w-6xl py-8">
        <div class="grid grid-cols-1 place-content-center gap-0 py-5">
          <p class="text-center text-sm">CATEGORY</p>
          <h1 class="text-center text-4xl">We Offer Best Services</h1>
        </div>
        <div class="grid grid-cols-4 place-content-center gap-4 px-10">
          <Service
            image={services[0].image}
            title={services[0].title}
            description={services[0].description}
          />

          <Service
            image={services[1].image}
            title={services[1].title}
            description={services[1].description}
          />

          <Service
            image={services[2].image}
            title={services[2].title}
            description={services[2].description}
          />

          <Service
            image={services[3].image}
            title={services[3].title}
            description={services[3].description}
          />
        </div>
      </div>

      <div id="bestplaces" class="py-5">
        <div class="grid grid-cols-1 place-content-center gap-0">
          <p class="text-md text-center font-serif">Top selling</p>
          <h1 class="text-center text-4xl">Top Destinations</h1>
        </div>

        <div className="container max-w-6xl py-8">
          <div class="flex justify-end pr-8">
            <button
              onClick={handleClickLeft}
              class="mx-3 rounded-xl bg-yellow-400 px-2 py-2"
            >
              ◀
            </button>
            <button
              onClick={handleClickRight}
              class="mx-3 rounded-xl bg-yellow-400 px-2 py-2"
            >
              ▶
            </button>
          </div>
          <div class="grid grid-cols-3 gap-6 py-6">
            <Place
              image={places[travelImage[0]].image}
              place={places[travelImage[0]].place}
              trip={places[travelImage[0]].trip}
              travellers={places[travelImage[0]].travellers}
            />
            <Place
              image={places[travelImage[1]].image}
              place={places[travelImage[1]].place}
              trip={places[travelImage[1]].trip}
              travellers={places[travelImage[1]].travellers}
            />
            <Place
              image={places[travelImage[2]].image}
              place={places[travelImage[2]].place}
              trip={places[travelImage[2]].trip}
              travellers={places[travelImage[2]].travellers}
            />
          </div>
        </div>
        <div
          id="feedbacks"
          className="container grid max-w-6xl grid-cols-2 py-8"
        >
          <div className="my-3 px-3 py-4 text-center">
            <p className="text-md">TESTIMONIALS</p>
            <h1 className="text-5xl">What people say about us</h1>
          </div>
          <div className="flex px-3">
            <div className="flex-inline">
              <Feedback
                name={feedbacks[feedback].name}
                place={feedbacks[feedback].place}
                image={feedbacks[feedback].image}
                feedback={feedbacks[feedback].feedback}
              />
            </div>
            <div className="flex-inline px-2 py-5">
              <button
                onClick={handleFeedbackUp}
                className="my-2 rounded-full bg-yellow-400 px-2"
              >
                ▲
              </button>
              <br />
              <button
                onClick={handleFeedbackDown}
                className="rounded-full bg-yellow-400 px-2 "
              >
                ▼
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid max-w-6xl grid-cols-2  py-8">
        <BookTrip />
      </div>
      <div className="container grid max-w-6xl grid-cols-6 py-8">
        <Partners />
      </div>
      <div className="container grid max-w-6xl justify-center py-8">
        <Subscribe />
      </div>
      <div className="container grid max-w-6xl grid-cols-5 gap-10 py-8">
        <Footer />
      </div>
      <footer className="mt-3 bg-blue-900 py-5 text-center text-white">
        <p className="text-sm">
          Copyright 2023. Jadoo.com. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
