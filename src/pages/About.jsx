import React from 'react';

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-6 mt-10 bg-darkBlue text-white">
        <h1 className="text-2xl mb-6">About Us</h1>
        <h1 className="text-6xl font-bold mb-4">Komyùt</h1>
        <p className="text-xl">Your Smart Commuting Partner</p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center mt-16 space-y-10 text-xl text-center">
        <p>
          At Komyút, we are committed to revolutionizing the daily commute for
          Filipinos. Our mission is to provide a seamless and reliable platform
          that simplifies public transportation navigation across the
          Philippines. Whether you're a daily commuter, a tourist exploring the
          country, or someone planning your route, Komyút is here to make your
          journey smoother and stress-free.
        </p>

        <p>
          Inspired by the challenges faced by Filipino commuters, we developed a
          user-friendly web app that delivers real-time transportation routes,
          traffic updates, and localized tips. With coverage across jeepneys,
          buses, MRT/LRT, and ferries, our goal is to empower commuters with the
          tools they need to make informed travel decisions.
        </p>
      </div>
    </div>
  );
};

export default About;
