"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import LiquidChrome from "@/components/LiquidChrome/LiquidChrome";

export default function Home() {
  return (
    <div className="max-h-screen overflow-hidden">
      <LiquidChrome className="absolute top-0 left-0 w-full h-full z-10 opacity-50" />
      <div className="relative min-h-screen text-white bg-black">
        {/* Vanta.js Background */}
        {/* <div ref={backgroundRef} className="absolute top-0 left-0 w-full h-full -z-10" /> */}

        <Head>
          <title>Profico Academy Landing</title>
          <meta
            name="description"
            content="Profico Academy Style Landing Page"
          />
        </Head>

        {/* NAVBAR */}
        <header className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
          <div className="text-xl font-bold">Profico.</div>
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <Button className="bg-white text-black rounded-full px-4 py-2 font-semibold hover:bg-gray-300 transition duration-300">
            Apply Now
          </Button>
        </header>

        {/* HERO SECTION */}
        <main className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
          <section className="mt-20">
            <p className="text-lg text-gray-400 mb-2">
              Dev &amp; Design Internship
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">
              Profico Academy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Gain all the skills you need to kickstart your professional path
              through mentoring by industry professionals.
            </p>
            <Button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-full font-semibold text-white transition duration-300">
              Apply Now
            </Button>
          </section>

          {/* Stats (Location, Duration, Mentors, Courses) */}
          <section className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">Split / Zagreb</span>
              <span className="text-gray-400 mt-1">Location</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">8 weeks</span>
              <span className="text-gray-400 mt-1">Duration</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">5</span>
              <span className="text-gray-400 mt-1">Mentors</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">4</span>
              <span className="text-gray-400 mt-1">Courses</span>
            </div>
          </section>

          {/* Example Animated Geometric Decorations */}
          <div className="relative w-full h-64 md:h-96 mt-16">
            <motion.div
              className="absolute top-0 left-1/2 w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded transform -translate-x-1/2"
              animate={{
                y: [0, 30, -20, 0],
                rotate: [0, 45, 90, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/3 w-20 h-20 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-full"
              animate={{
                y: [0, -40, 20, 0],
                rotate: [0, 60, 120, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
