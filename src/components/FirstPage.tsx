'use client'

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Import your images from src/assets
import monkeyLeft from "../assets/monkey-left.png";
import monkeyRight from "../assets/monkey-right.png";

// Letter images from public/assets
const letterImages = {
    b: "/assets/b.png",
    a: "/assets/a.png", 
    c: "/assets/c.png",
    k: "/assets/k.png",
    t: "/assets/t.png",
    o: "/assets/o.png",
    s: "/assets/s.png",
    c2: "/assets/c2.png",
    h: "/assets/h.png",
    o2: "/assets/o2.png",
    o3: "/assets/o3.png",
    l: "/assets/l.png"
};

function FirstPage() {
    const router = useRouter();

    return (
        <>
            {/* Add Google Font */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Ewert&display=swap');
            `}</style>
            
            {/* Landing Container */}
            <div className="w-full min-h-screen flex items-center justify-center flex-col bg-white">
                {/* Mobile Screen Container */}
                <div
                    className="w-[393px] h-[852px] overflow-hidden flex flex-col relative rounded-xl shadow-lg"
                    style={{
                        backgroundImage: "url('/assets/bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Top Half */}
                    <div className="relative w-full h-56 sm:h-64 bg-transparent">
                        
                        {/* Letter B */}
                        <div className="absolute top-[26%] left-[9.5%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.b} 
                                alt="Letter B" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        {/* Letter A */}
                        <div className="absolute top-[34%] left-[21%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.a} 
                                alt="Letter A" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        {/* Letter C */}
                        <div className="absolute top-[30%] left-[34%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.c} 
                                alt="Letter C" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        {/* Letter K */}
                        <div className="absolute top-[33%] left-[48%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.k} 
                                alt="Letter K" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        {/* Letter T */}
                        <div className="absolute top-[33%] left-[70%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.t} 
                                alt="Letter T" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        {/* Letter O */}
                        <div className="absolute top-[29%] left-[82%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.o} 
                                alt="Letter O" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        {/* Letter S */}
                        <div className="absolute top-[50%] left-[16%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.s} 
                                alt="Letter S" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        {/* Letter C2 */}
                        <div className="absolute top-[53%] left-[28%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.c2} 
                                alt="Letter C" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        {/* Letter H */}
                        <div className="absolute top-[50%] left-[40%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.h} 
                                alt="Letter H" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        {/* Letter O2 */}
                        <div className="absolute top-[52%] left-[53%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.o2} 
                                alt="Letter O" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        {/* Letter O3 */}
                        <div className="absolute top-[50%] left-[64%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.o3} 
                                alt="Letter O" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        {/* Letter L */}
                        <div className="absolute top-[48%] left-[77%] w-[11%] h-auto bg-transparent">
                            <Image 
                                src={letterImages.l} 
                                alt="Letter L" 
                                width={50} 
                                height={50} 
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                    
                    {/* Bottom Half */}
                    <div className="flex-1 bg-transparent flex flex-col items-center justify-center">
                        
                        {/* Play Section */}
                        <div className="flex items-center justify-center bg-transparent w-full">
                            
                            {/* Left Monkey */}
                            <div className="bg-transparent w-1/4 max-w-[100px] h-auto">
                                <Image 
                                    src="/assets/monkey-left.png" 
                                    alt="Monkey Left" 
                                    width={100} 
                                    height={100} 
                                    className="w-full h-auto"
                                />
                            </div>
                            
                            {/* Play Button */}
                            <button 
                                className="flex items-center justify-center bg-white border-4 border-yellow-400 px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 text-xl font-bold hover:scale-105 hover:shadow-lg active:scale-95 mx-2"
                                onClick={() => router.push("/game")}
                            >
                                <span 
                                    className="mx-1 bg-white text-[#EC171E]" 
                                    style={{ fontFamily: 'Ewert, cursive, sans-serif', fontWeight: 'lighter' }}
                                >
                                    P
                                </span>
                                <span 
                                    className="mx-1 bg-white text-[#FFCA3E]" 
                                    style={{ fontFamily: 'Ewert, cursive, sans-serif', fontWeight: 'lighter' }}
                                >
                                    L
                                </span>
                                <span 
                                    className="mx-1 bg-white text-[#5A55F9]" 
                                    style={{ fontFamily: 'Ewert, cursive, sans-serif', fontWeight: 'lighter' }}
                                >
                                    A
                                </span>
                                <span 
                                    className="mx-1 bg-white text-[#20D720]" 
                                    style={{ fontFamily: 'Ewert, cursive, sans-serif', fontWeight: 'lighter' }}
                                >
                                    Y
                                </span>
                            </button>
                            
                            {/* Right Monkey */}
                            <div className="bg-transparent w-1/4 max-w-[100px] h-auto">
                                <Image 
                                    src="/assets/monkey-right.png" 
                                    alt="Monkey Right" 
                                    width={100} 
                                    height={100} 
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FirstPage;