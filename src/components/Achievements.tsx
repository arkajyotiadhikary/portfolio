"use client";
import React from "react";
import { motion } from "framer-motion";
const achievementsList = [
      {
            metric: "Projects",
            value: 10,
            prefix: "🧳",
      },
      {
            metric: "Github Stars",
            value: 1000,
            prefix: "🌟",
      },
      {
            metric: "Awards",
            value: 5,
            prefix: "🏆",
      },
      {
            metric: "Years",
            value: 2,
            prefix: "🕒",
      },
];

const Achievements = () => {
      return (
            <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="grid grid-cols-1 sm:grid-cols-4 sm:my-16 gap-4 p-4 bg-pink bg-opacity-30 rounded-md shadow-md w-full"
            >
                  {achievementsList.map((achievement, index) => (
                        <div className="flex flex-col justify-center items-center text-center p-4">
                              <p className="text-dark text-xl font-bold">{achievement.prefix}</p>
                              <p className="text-dark font-semibold text-lg">
                                    {achievement.metric}
                              </p>
                              <p className="text-[1.5rem] font-bold text-2xl">
                                    {achievement.value}
                              </p>
                        </div>
                  ))}
            </motion.div>
      );
};

export default Achievements;
