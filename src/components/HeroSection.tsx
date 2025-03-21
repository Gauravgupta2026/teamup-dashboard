// import { Link } from "lucide-react"
// import {Image} from "@heroui/image";
// import {Button, ButtonGroup} from "@heroui/button";

// export default function HeroSection() {

//     return (
//       <div className=" px-4 py-12 md:py-24 ">
//         {/* <div className="container mx-auto px-4 py-12 md:py-24 opacity-0 transition-all duration-1000 translate-y-8"> */}

//         <div className="mx-32 flex flex-col md:flex-row gap-8 items-center">
//           <div className="w-full md:w-1/2">
//             <div className="flex space-x-1 mb-4">
//               <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
//               <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
//               <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
//               <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">1000+ satisfied students</span>
//             </div>
//             {/* <motion.h1
//               className="text-5xl md:text-6xl font-bold leading-tight mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               We help you
//               <br />
//               plan your game
//             </motion.h1> */}
//             <div
//               className="text-5xl md:text-6xl font-bold leading-tight mb-8">
//               We help you
//               <br />
//               plan your game
//             </div>
//           </div>
//           <div className="w-full md:w-1/2">
//             {/* <motion.p
//               className="text-sm md:text-base mb-6 dark:text-gray-300"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               Our platform helps people schedule and manage games. We also organize tournaments and offer discounts to
//               regular customers.
//             </motion.p> */}
//            <div className="w-full md:w-1/2">
//             <p className="text-end justify-end text-sm md:text-base mb-6 dark:text-gray-300">
//               Our platform helps people schedule and manage games. We also organize tournaments and offer discounts to
//               regular customers.
//             </p>
//             <div className="flex space-x-4">
//               <Button
             
//                 className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform"
//               >
//                 Book a Court
//               </Button>
//               <Button
   
//                 className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               >
//                 About Us
//               </Button>
//             </div>
//           </div>
            
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-4 mt-12">
//           <div className="col-span-1 h-[350px]  overflow-hidden rounded-lg border-2 group">
//             <Image
//               src="/tennis.jpg"
//               alt="Tennis court"
//               className="object-cover "
//             />
            
//           </div>
//           <div className="col-span-1 h-[350px]  overflow-hidden rounded-lg group">
//             <Image
//               src="/basketball.jpg"
//               alt="Basketball player"
//               // className="object-cover transition-transform duration-500 group-hover:scale-110"
//               className="object-cover"
//             />
            
//           </div>
//           <div className="col-span-1 h-[350px]  overflow-hidden rounded-lg group">
//             <Image
//               src="/swimm.jpg"
//               alt="Swimming pool"
//               // className="object-cover transition-transform duration-500 group-hover:scale-110"
//               className="object-cover "
//             />
//           </div>
//         </div>
      
        
//       </div>

        

        
//     )
// }



"use client"

import { useEffect, useRef, useState } from "react"
import {Image} from "@heroui/react";
import { Link } from "@heroui/link";
import { MapPin, Download, Moon, Sun } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils";

export default function HomeScreen() {
  const [darkMode, setDarkMode] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)


  return (
    <div className=" bg-white text-black">
      {/* Navigation */}
      <header className=" px-4 py-6 flex justify-between backdrop-blur-md items-center sticky top-0 z-50 bg-white/80">
        <Link href="/" className="font-bold text-black text-2xl">
          Team Up
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="text-black hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-blue-400 transition-colors">
            Memberships
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-blue-400 transition-colors">
            Events
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            
          </button> */}
          <Link
            href="/signup"
            className="hidden md:inline-flex items-center space-x-4 bg-black text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Sign Up</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="container  px-4 py-8 md:pt-20"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="flex space-x-1 mb-4">
              <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">1000+ satisfied students</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight mb-8"
              
            >
              We help you
              <br />
              plan your game
            </h1>
          </div>
          <div className="w-full md:w-1/2">
            <p
              className="text-sm pl-28 text-end md:text-base mb-6 dark:text-gray-300"
            >
              Our platform helps people schedule and manage games. We also organize tournaments and offer discounts to
              regular customers.
            </p>
            <div
              className="flex justify-end pl-28 space-x-4"
            >
              <Link
                href="#schedule"
                className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform"
              >
                Book a Court
              </Link>
              <Link
                href="#about"
                className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-2 md:py-10">
        <div>
          <div className="flex justify-center space-x-4 pb-10">
            <div className="flex-none w-1/4 h-80 relative overflow-hidden rounded-2xl">
              <img
                alt="Tennis player"
                src="/tennis.jpg"
                className="object-cover h-full w-full"
              />
            </div>
            
            <div className="flex-none w-1/2 h-80 relative overflow-hidden rounded-2xl shadow-md">
              <img
                alt="Basketball player"
                src="/basketball.jpg"
                className="object-cover h-full w-full"
              />
            </div>
            
            <div className="flex-none w-1/4 h-80 relative overflow-hidden rounded-xl shadow-md">
              <img
                alt="Swimming pool"
                src="/swimm.jpg"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
