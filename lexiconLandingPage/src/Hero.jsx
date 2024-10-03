function Hero() {
  return (
    <div className="">
      <h1 className="font-header font-bold text-6xl text-tp max-w-4xl tracking-wide">
        {" "}
        <span className="text-p">Lexicon</span>, Study with Friends, Minus the{" "}
        <span className="text-s bg-[#190211] p-2 m-2 -rotate-[2deg] inline-block">
          Distractions
        </span>
      </h1>
      <p className="text-tp text-lg max-w-xl tracking-wider">
        Lexicon: Connect, collaborate, and conquer your grades with a fleet of
        study strategies.
      </p>
      <button className="mt-3 bg-d p-3 px-5 font-bold font-body rounded-md text-tp text-lg tracking-wider">
        Download
      </button>
    </div>
  );
}

export default Hero;
