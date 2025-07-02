"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const TryAgainPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const handleTryAgain = () => {
    if (from === "game2") {
      router.push("/game2");
    } else {
      router.push("/game");
    }
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
        {/* Speech Bubble */}
        <div className="absolute top-6 right-6 z-10">
          <Image
            src="/assets/bubble.png"
            alt="bubble"
            width={180}
            height={60}
            className="w-[180px] h-auto"
          />
        </div>

        {/* Cross Image */}
        <Image
          src="/assets/cross.png"
          alt="cross"
          width={180}
          height={180}
          className="absolute top-[110px] left-1/2 -translate-x-1/2 w-[180px] h-auto z-10"
        />

        {/* Monkey */}
        <div className="absolute bottom-[160px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <Image
            src="/assets/crymonkey.png"
            alt="crymonkey"
            width={160}
            height={160}
            className="w-[160px] h-auto"
          />
          {/* Try Again Button */}
          <button
            className="mt-[-40px] px-10 py-3 text-[22px] font-bold bg-[#ffcc00] border-[4px] border-[#19FC21] rounded-[15px] shadow-lg text-white transition duration-200 hover:bg-[#ffe066] hover:scale-105"
            style={{ boxShadow: "0 4px 0 #19FC21" }}
            onClick={handleTryAgain}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default TryAgainPage;
