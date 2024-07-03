import React from "react";

const Loading = () => {
  return (
    <section className="absolute w-full bg-black text-white overflow-hidden z-50">
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
