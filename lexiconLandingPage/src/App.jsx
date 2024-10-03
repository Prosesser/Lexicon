import React, { useRef } from "react";
import "./App.css";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Heroimg from "./Heroimg.jsx";
import Hline from "./Hline.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

function App() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="flex justify-center items-center mg-24 p-24">
        <Hero></Hero>
        <Heroimg></Heroimg>
      </div>
      <Hline></Hline>
      <div className="m-24">
        <h2 className="text-tp text-3xl font-bold tracking-wide font-body">
          Lexicon Helps You Study Together
        </h2>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide mb-2"
          style={{ scrollBehavior: "smooth" }}
        >
          <Card
            img="/card1.png"
            head="Focused Study Sessions"
            text="Stay productive with distraction-free study sessions, designed to help you focus and collaborate effectively."
          />
          <Card
            img="/card2.png"
            head="Boost Productivity"
            text="Stay focused with our distraction-free study sessions and tools, designed to help you make the most of your time."
          />
          <Card
            img="/card3.png"
            head="Collaborate With Peers"
            text="Connect with your peers in real-time, form study groups, and stay focused with built-in tools designed specifically for learning."
          />
          <Card
            img="/card4.png"
            head="Interactive tools"
            text="Utilize in-app tools such as flashcards, shared notes, and live chat for a more engaging study experience."
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => scroll("left")}
            className="bg-p rotate-180 text-d px-6 py-2 rounded-full hover:bg-opacity-80 transition-colors duration-300"
          >
            ►
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-p text-d px-6 py-2 rounded-full hover:bg-opacity-80 transition-colors duration-300"
          >
            ►
          </button>
        </div>
      </div>
      <div className="m-24">
        <h2 className="text-tp text-3xl font-bold tracking-wide font-body">
          Get Started With Lexicon
        </h2>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
