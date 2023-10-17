import React from "react";

const page = () => {
  return (
    <section className=" p-5">
      <div className="navbar bg-base-100">
        <div className="flex-1 ">
          <a className="btn btn-ghost text-xl">
            <span className=" text-blue-500">T</span>
            <span className=" text-red-500">h</span>
            <span className=" text-green-500">r</span>
            <span className=" text-yellow-500">e</span>
            <span className=" text-purple-500">a</span>
            <span className=" text-pink-500">d</span>
            <span className=" text-orange-500">e</span>
            <span className=" text-green-500">r</span>
            <span className=" text-blue-500">s</span>
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <main className=" flex justify-center p-5  h-screen w-max-100 ">
        <div className=" bg-base-200 w-[50rem] rounded-2xl">
          <div className=" p-4">
            <h1 className=" text-4xl font-bold">Search</h1>
            {/* <p>Curious about </p> */}
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w mt-6"
            />
          </div>
          <div className=" px-8 py-4">
            <ul>
              <li>hello</li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
};

export default page;
