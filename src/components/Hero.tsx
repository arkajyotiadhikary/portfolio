"use client";
import React from "react";
import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const HeroSection = () => {
      return (
            <section className="lg:py-16 w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-12">
                        <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5 }}
                              className="col-span-8 sm:col-start-1"
                        >
                              <Heading className="text-dark">
                                    Hello I&apos;m{" "}
                                    <TypeAnimation
                                          sequence={[
                                                "Arka",
                                                1000,
                                                "Software Engineer",
                                                1000,
                                                "Fullstack Developer",
                                                1000,
                                                "React Developer",
                                                1000,
                                                "React Native Developer",
                                                1000,
                                                "Frontend Developer",
                                                1000,
                                                "Backend Developer",
                                                1000,
                                                "Node.js Developer",
                                                1000,
                                          ]}
                                          wrapper="span"
                                          speed={50}
                                          repeat={Infinity}
                                    />
                              </Heading>
                              <p className="text-dark">
                                    🚀 Passionate React/React Native Developer | 💻 Proficient in
                                    Node.js | 📊 Experienced with PostgreSQL & MongoDB | 🔧 Building
                                    Scalable & Dynamic Web & Mobile Applications
                              </p>
                              <div className="mt-8 flex">
                                    {/* Hire me button */}
                                    <Link
                                          className="bg-pink hover:bg-darkpink text-light font-bold py-2 px-4 rounded mr-2"
                                          href="/contact"
                                    >
                                          Available for Jobs
                                    </Link>
                                    {/* download resume */}
                                    <Link
                                          href="/resume.pdf"
                                          className="flex border-2 border-pink hover:border-darkpink text-blue-500 font-semibold py-2 px-4 rounded shadow"
                                    >
                                          <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                          >
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                />
                                          </svg>
                                          <span className="ml-2">Get Resume</span>
                                    </Link>
                              </div>
                        </motion.div>
                        <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                              className="col-span-4 col-start-10 max-sm:col-start-1  max-sm:mt-4 lg:mt-0"
                        >
                              <div className="rounded h-52 w-52 relative border-2 shadow-lg lg:h-100 lg:w-100 max-sm:h-50 max-sm:w-50">
                                    <Image
                                          className="rounded object-cover shadow-lg w-full h-full"
                                          src="/hero.jpg"
                                          alt="hero image"
                                          layout="fill"
                                          objectFit="cover"
                                          objectPosition="top"
                                          loading="lazy"
                                          quality={100}
                                    />
                              </div>
                        </motion.div>
                  </div>
            </section>
      );
};

export default HeroSection;
