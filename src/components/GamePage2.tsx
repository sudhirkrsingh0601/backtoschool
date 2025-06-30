"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const GamePage2: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialWrongAttempts = Number(searchParams.get("wrongAttempts")) || 0;

  const [filledBlanks, setFilledBlanks] = useState(["_", "A", "_"]);
  const [fadeOut, setFadeOut] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(initialWrongAttempts);

  const correctWord = ["B", "A", "G"];

  const handleLetterClick = (letter: string) => {
    const nextIndex = filledBlanks.findIndex(
      (char, index) => char === "_" && correctWord[index] !== "_"
    );

    if (nextIndex === -1) return;

    if (letter === correctWord[nextIndex]) {
      const updated = [...filledBlanks];
      updated[nextIndex] = letter;
      setFilledBlanks(updated);

      if (updated.join("") === correctWord.join("")) {
        setTimeout(() => {
          router.push(`/bag-score?wrongAttempts=${wrongAttempts}`);
        }, 1000);
      }
    } else {
      setWrongAttempts((prev) => {
        const updated = prev + 1;
        if (updated >= 2) {
          setFadeOut(true);
          setTimeout(() => router.push("/try-again"), 1000);
        }
        return updated;
      });
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <motion.div
        className="flex items-center justify-center flex-col w-full h-full min-h-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="w-[393px] h-[852px] overflow-hidden flex flex-col relative rounded-xl shadow-lg"
          style={{
            backgroundImage: "url('/assets/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Bag Image */}
          <div className="flex justify-center pt-6">
            <Image
              src="/assets/bag.png"
              alt="bag"
              width={220}
              height={120}
              className="w-[220px] h-auto bg-transparent drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>

          {/* Lives */}
          <motion.div
            className="absolute top-4 right-4 text-xl bg-cyan-200 rounded-xl px-4 py-2"
            animate={{ rotate: wrongAttempts > 0 ? [0, -10, 10, -10, 0] : 0 }}
            transition={{ duration: 0.2 }}
          >
            {wrongAttempts === 0
              ? "❤️❤️"
              : wrongAttempts === 1
              ? "❤️💔"
              : "💔💔"}
          </motion.div>

          {/* Fill-in-the-blanks */}
          <div className="absolute left-1/2 top-[32%] -translate-x-1/2 flex bg-transparent text-white text-[2rem] font-bold drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)] z-10">
            {filledBlanks.map((letter, i) => (
              <span
                key={i}
                className="mx-3 px-2 py-1 border-b-[3px] border-white"
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Letters (scattered but responsive) */}
          <div className="absolute bottom-8 left-0 w-full h-[180px] pointer-events-none z-20">
            {/* B */}
            <motion.button
              onClick={() => handleLetterClick("B")}
              className="absolute left-[18%] bottom-[60%] w-[60px] h-[60px] text-2xl font-black bg-[#F9BD20] text-white rounded-[10px] border-[3px] border-white pointer-events-auto"
              whileTap={{ scale: 1.2 }}
            >
              B
            </motion.button>
            {/* A */}
            <motion.button
              onClick={() => handleLetterClick("A")}
              className="absolute left-[65%] bottom-[60%] w-[60px] h-[60px] text-2xl font-black bg-[#F9BD20] text-white rounded-[10px] border-[3px] border-white pointer-events-auto"
              whileTap={{ scale: 1.2 }}
            >
              A
            </motion.button>
            {/* G */}
            <motion.button
              onClick={() => handleLetterClick("G")}
              className="absolute left-[43%] bottom-[20%] w-[60px] h-[60px] text-2xl font-black bg-[#F9BD20] text-white rounded-[10px] border-[3px] border-white pointer-events-auto"
              whileTap={{ scale: 1.2 }}
            >
              G
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GamePage2;
