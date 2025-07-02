"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const FruitsScore: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const wrongAttempts = Number(searchParams.get("wrongAttempts")) || 0;

  const handleNextClick = () => {
    router.push(`/game2?wrongAttempts=${wrongAttempts}`);
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <div
        className="w-[393px] h-[852px] rounded-xl overflow-hidden flex flex-col relative shadow-lg"
        style={{
          backgroundImage: "url('/assets/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Fruits image */}
        <Image
          src="/assets/fruits.png"
          alt="fruits"
          width={220}
          height={120}
          className="absolute w-[60%] left-[20%] top-[30%] bg-transparent drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)]"
          priority
        />

        {/* Title box */}
        <div className="absolute top-[5%] left-[5%] w-[90%] bg-black/30 text-center">
          <h1 className="text-white text-[2.5rem] font-extrabold drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)] m-0">
            Congratulations!
          </h1>
        </div>

        {/* Answer box */}
        <div className="absolute top-[50%] left-[5%] w-[90%] bg-black/30 text-center">
          <h1 className="text-white text-[2rem] font-extrabold drop-shadow-[10px_10px_5px_rgba(0,0,0,0.5)] m-0">
            FRUITS
          </h1>
        </div>

        {/* Next button */}
        <div className="absolute top-[70%] left-[35%] text-center bg-transparent">
          <button
            onClick={handleNextClick}
            className="mt-2 px-5 py-3 text-[2rem] font-bold text-white bg-[#ffcc00] border-[4px] border-[#19FC21] rounded-[15px] cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FruitsScore;
