import { motion } from "framer-motion";
import logo from "../../imports/ashvani-logo-transparent.png";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#2D0B59] via-[#4A148C] to-[#1A0033] overflow-hidden z-[9999]">

      {/* Stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <motion.img
        src={logo}
        alt="Ashvani Logo"
        className="
          w-72 h-72
          md:w-96 md:h-96
          rounded-full
          border-4 border-yellow-400
          drop-shadow-[0_0_50px_rgba(255,215,0,0.9)]
        "
        initial={{
          opacity: 0,
          scale: 0.5,
          rotate: -2
        }}
        animate={{
          opacity: 1,
          scale: [0.5, 1.1, 1],
          rotate: [-2, 2, 0]
        }}
        transition={{
          duration: 3,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}