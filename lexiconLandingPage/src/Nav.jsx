function Nav() {
  return (
    <div className="bg-d text-tp text-lg tracking-wider m-4 p-3 rounded-2xl font-body flex justify-between items-center">
      <div className="flex justify-center items-center">
        <img
          className="size-12 cursor-pointer pr-1"
          src="/logo.png"
          alt="Lexicon Logo"
        />
        <h2 className="font-bold text-3xl cursor-pointer">Lexicon</h2>
      </div>
      <div className="flex justify-center align-middle cursor-pointer">
        <p className="pr-6">Learn More</p>
        <p>Get Started</p>
        <p className="pl-6">Download</p>
      </div>
      <button className="bg-bg p-2 px-4 font-bold text-lg rounded-md">
        Login
      </button>
    </div>
  );
}

export default Nav;
