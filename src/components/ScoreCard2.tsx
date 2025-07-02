"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ScoreCard2Props {
  gamesPlayed?: number;
  secondTrial?: number;
  totalScore?: number;
}

const ScoreCard2: React.FC<ScoreCard2Props> = ({
  gamesPlayed = 6,
  secondTrial = -2,
  totalScore = 4,
}) => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#042603]">
      <div
        className="w-[393px] h-[852px] overflow-hidden flex flex-col relative rounded-xl shadow-lg"
        style={{
          backgroundImage: "url('/assets/tree.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Title Box */}
        <div className="absolute top-[5%] left-[5%] w-[90%] bg-black/30 text-center">
          <h1 className="text-white text-[3rem] font-extrabold drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)] m-0">
            LEVEL COMPLETED
          </h1>
        </div>

        {/* Stars Row */}
        <div className="absolute top-[20%] left-[14%] flex gap-2">
          <span className="text-[100px] text-yellow-400 drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]">
            ★
          </span>
          <span className="text-[120px] text-yellow-400 drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]">
            ★
          </span>
          <span className="text-[100px] text-gray-500 drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]">
            ★
          </span>
        </div>

        {/* Scoreboard */}
        <div className="absolute top-[50%] left-[5%] w-[90%] bg-[#19FC2145] rounded-[30px] py-4">
          <div className="w-[80%] max-w-[300px] bg-[#f9bd20] text-center text-[1.2rem] font-bold text-white mx-auto my-2 p-2 border-2 border-white rounded-[10px] drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]">
            <p className="m-0">
              GAMES PLAYED:{" "}
              <span className="font-black">{gamesPlayed.toString().padStart(2, "0")}</span>
            </p>
          </div>

          <div className="w-[80%] max-w-[300px] bg-[#f9bd20] text-center text-[1.2rem] font-bold text-white mx-auto my-2 p-2 border-2 border-white rounded-[10px] drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]">
            <p className="m-0">
              SECOND TRIAL: <span className="font-black">{secondTrial}</span>
            </p>
          </div>

          <div className="w-[80%] max-w-[300px] bg-[#f9bd20] text-center text-[1.2rem] font-bold text-white mx-auto my-2 p-2 border-2 border-white rounded-[10px] drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]">
            <p className="m-0">
              TOTAL SCORE:{" "}
              <span className="font-black">{totalScore.toString().padStart(2, "0")}</span>
            </p>
          </div>
        </div>

        {/* Play Again Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push("/game")}
          className="absolute top-[80%] left-[21%] text-white text-[2rem] font-bold bg-[#29E510] px-8 py-2 rounded-[20px] cursor-pointer drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)] transition-all duration-200 hover:bg-[#28a745]"
        >
          Play again
        </motion.button>
      </div>
    </div>
  );
};

export default ScoreCard2;
