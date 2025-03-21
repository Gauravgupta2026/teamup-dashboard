// "use client"

// import { useEffect, useRef, useState } from "react"
// import { Link } from "lucide-react"
// import {Image} from "@heroui/image";
// import { MapPin, Download, Moon, Sun } from "lucide-react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { cn } from "@/lib/utils"

// export default function Home() {
//   const [darkMode, setDarkMode] = useState(false)
//   const heroRef = useRef<HTMLDivElement>(null)
//   const featuresRef = useRef<HTMLDivElement>(null)
//   const scheduleRef = useRef<HTMLDivElement>(null)
//   const reasonsRef = useRef<HTMLDivElement>(null)
//   const downloadRef = useRef<HTMLDivElement>(null)

//   const { scrollYProgress } = useScroll()
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2])

//   const toggleTheme = () => {
//     setDarkMode(!darkMode)
//     document.documentElement.classList.toggle("dark")
//   }

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-in")
//           }
//         })
//       },
//       { threshold: 0.1 },
//     )

//     const sections = [
//       heroRef.current,
//       featuresRef.current,
//       scheduleRef.current,
//       reasonsRef.current,
//       downloadRef.current,
//     ]

//     sections.forEach((section) => {
//       if (section) observer.observe(section)
//     })

//     return () => {
//       sections.forEach((section) => {
//         if (section) observer.unobserve(section)
//       })
//     }
//   }, [])

//   return (
//     <div className={cn("min-h-screen bg-white text-black transition-colors duration-300", { dark: darkMode })}>
//       {/* Navigation */}
//       <header className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-black/80">
//         <Link href="/" className="font-bold text-2xl transition-transform hover:scale-105">
//           Team Up
//         </Link>
//         <nav className="hidden md:flex space-x-8">
//           <Link href="#" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//             About
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//             Memberships
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//             Events
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//             Contact
//           </Link>
//         </nav>
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
//             aria-label="Toggle theme"
//           >
//             {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//           </button>
//           <Link
//             href="#download"
//             className="hidden md:inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
//           >
//             <Download className="h-4 w-4" />
//             <span>Download App</span>
//           </Link>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         className="container mx-auto px-4 py-12 md:py-24 opacity-0 transition-all duration-1000 translate-y-8"
//       >
//         <div className="flex flex-col md:flex-row gap-8 items-center">
//           <div className="w-full md:w-1/2">
//             <div className="flex space-x-1 mb-4">
//               <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
//               <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
//               <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
//               <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">1000+ satisfied students</span>
//             </div>
//             <motion.h1
//               className="text-5xl md:text-6xl font-bold leading-tight mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               We help you
//               <br />
//               plan your game
//             </motion.h1>
//           </div>
//           <div className="w-full md:w-1/2">
//             <motion.p
//               className="text-sm md:text-base mb-6 dark:text-gray-300"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               Our platform helps people schedule and manage games. We also organize tournaments and offer discounts to
//               regular customers.
//             </motion.p>
//             <motion.div
//               className="flex space-x-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <Link
//                 href="#schedule"
//                 className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform"
//               >
//                 Book a Court
//               </Link>
//               <Link
//                 href="#about"
//                 className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//               >
//                 About Us
//               </Link>
//             </motion.div>
//           </div>
//         </div>

//         <motion.div className="grid grid-cols-3 gap-4 mt-12" style={{ opacity }}>
//           <div className="col-span-1 h-[250px] relative overflow-hidden rounded-lg group">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-PcL7WXw7dkQ6eeFOIn6fwf33mJD6lI.png"
//               alt="Tennis court"

//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//           <div className="col-span-1 h-[250px] relative overflow-hidden rounded-lg group">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-PcL7WXw7dkQ6eeFOIn6fwf33mJD6lI.png"
//               alt="Basketball player"

//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//           <div className="col-span-1 h-[250px] relative overflow-hidden rounded-lg group">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-PcL7WXw7dkQ6eeFOIn6fwf33mJD6lI.png"
//               alt="Swimming pool"

//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Our Values */}
//       <section
//         id="about"
//         ref={featuresRef}
//         className="container mx-auto px-4 py-12 md:py-24 opacity-0 transition-all duration-1000 translate-y-8"
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-sm font-medium dark:text-gray-300">Our Values</h3>
//           <span className="text-sm dark:text-gray-300">2024</span>
//         </div>
//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="w-full md:w-1/2">
//             <motion.p
//               className="text-xl md:text-2xl font-medium mb-8 dark:text-gray-200"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               We are driven by a deep passion for sports and a commitment to empowering athletes of all levels.
//             </motion.p>
//             <div className="h-[300px] relative overflow-hidden rounded-lg group">
//               <Image
//                 src="/placeholder.svg?height=600&width=400"
//                 alt="Soccer player with ball"

//                 className="object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2">
//             <div className="mb-8">
//               <p className="text-sm font-medium mb-4 dark:text-gray-300">Football in lush green grounds</p>
//               <div className="grid grid-cols-4 gap-2">
//                 {[1, 2, 3, 4].map((i) => (
//                   <motion.div
//                     key={i}
//                     className="aspect-square relative overflow-hidden rounded-lg group"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: i * 0.1 }}
//                   >
//                     <Image
//                       src="/placeholder.svg?height=200&width=200"
//                       alt={`Sports image ${i}`}

//                       className="object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </motion.div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-4 gap-2 mt-2">
//                 <span className="text-xs dark:text-gray-400">[01]</span>
//                 <span className="text-xs dark:text-gray-400">[02]</span>
//                 <span className="text-xs dark:text-gray-400">[03]</span>
//                 <span className="text-xs dark:text-gray-400">[04]</span>
//               </div>
//             </div>
//             <p className="text-xs text-gray-600 dark:text-gray-400">
//               Play football at MIT ground. Only booking upon request.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Events / Scheduling */}
//       <section
//         id="schedule"
//         ref={scheduleRef}
//         className="container mx-auto px-4 py-12 md:py-24 opacity-0 transition-all duration-1000 translate-y-8"
//       >
//         <h3 className="text-sm font-medium mb-4 dark:text-gray-300">Featured Events</h3>
//         <motion.h2
//           className="text-2xl md:text-3xl font-medium mb-6 dark:text-gray-200"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           We offer a wide range of sports facilities across MAHE. Play, grow and have fun.
//         </motion.h2>
//         <p className="text-lg mb-12 dark:text-gray-300">Schedule your games and avoid clashes</p>

//         {/* Booking Form */}
//         <motion.div
//           className="border dark:border-gray-700 rounded-lg p-6 mb-12 bg-white dark:bg-gray-900 shadow-lg"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
//               <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Enter Team Name</label>
//               <input
//                 type="text"
//                 className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors"
//                 placeholder="Your team name"
//               />
//             </div>
//             <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
//               <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Select Game</label>
//               <select className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors">
//                 <option>Football</option>
//                 <option>Basketball</option>
//                 <option>Tennis</option>
//                 <option>Swimming</option>
//               </select>
//             </div>
//           </div>

//           <div className="border-t border-dashed border-gray-300 dark:border-gray-700 my-6"></div>

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
//             <div className="md:col-span-2">
//               <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Select Time</label>
//               <div className="flex items-center space-x-4">
//                 <input
//                   type="text"
//                   placeholder="From"
//                   className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors"
//                 />
//                 <span className="text-gray-500 dark:text-gray-400">To</span>
//                 <input
//                   type="text"
//                   placeholder="To"
//                   className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Players</label>
//               <input
//                 type="text"
//                 placeholder="5 Players"
//                 className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors"
//               />
//             </div>
//             <div>
//               <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Location</label>
//               <div className="flex items-center space-x-2">
//                 <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="MIT Manipal"
//                   className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Pay</label>
//               <select className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors">
//                 <option>Now / Later</option>
//                 <option>Now</option>
//                 <option>Later</option>
//               </select>
//             </div>
//           </div>

//           <div className="border-t border-dashed border-gray-300 dark:border-gray-700 my-6"></div>

//           <div>
//             <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Available Slots</label>
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//               {[...Array(5)].map((_, i) => (
//                 <motion.button
//                   key={i}
//                   className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-center hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
//                   whileHover={{ scale: 1.03 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 >
//                   <div className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                     June 26, 2025
//                   </div>
//                   <div className="text-xs text-gray-500 dark:text-gray-400">Wednesday, 09:00 - 12:00</div>
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8 flex justify-center">
//             <motion.button
//               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Book Now
//             </motion.button>
//           </div>

//           <div className="flex flex-col md:flex-row justify-between mt-8 text-xs text-gray-500 dark:text-gray-400">
//             <span>Trusted by 200+ students</span>
//             <span>30+ rounds everyday</span>
//             <span>Trusted by 100+ coaches</span>
//           </div>
//         </motion.div>
//       </section>

//       {/* Why Section */}
//       <section
//         id="why"
//         ref={reasonsRef}
//         className="container mx-auto px-4 py-12 md:py-24 opacity-0 transition-all duration-1000 translate-y-8"
//       >
//         <h3 className="text-sm font-medium mb-4 dark:text-gray-300">Why</h3>
//         <motion.h2
//           className="text-2xl md:text-3xl font-medium mb-12 dark:text-gray-200"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           3 reasons to come
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <motion.div
//             className="border border-blue-900 rounded-lg overflow-hidden"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="h-[400px] relative">
//               <Image src="/placeholder.svg?height=800&width=800" alt="Team activities" fill className="object-cover" />
//             </div>
//           </motion.div>
//           <motion.div
//             className="bg-blue-900 text-white rounded-lg p-8"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="space-y-12">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//               >
//                 <h3 className="text-xl font-medium mb-2">Live</h3>
//                 <p className="text-sm text-blue-200">Follow Team Up on the YouTube Channel</p>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//               >
//                 <h3 className="text-xl font-medium mb-2">Food & Drink</h3>
//                 <p className="text-sm text-blue-200">This is free for all registered</p>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.6 }}
//               >
//                 <h3 className="text-xl font-medium mb-2">Community</h3>
//                 <p className="text-sm text-blue-200">
//                   Builders, Developers, Designers, Marketers, the opportunity To Get
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* App Download */}
//       <section
//         id="download"
//         ref={downloadRef}
//         className="container mx-auto px-4 py-12 md:py-24 opacity-0 transition-all duration-1000 translate-y-8"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-medium mb-4 dark:text-gray-200">Download the TeamUp app</h2>
//             <p className="text-sm mb-6 dark:text-gray-300">
//               Connect with athletes, book facilities, and engage with your friends. Team up with manages and interacts
//               with trusted communities
//             </p>
//             <motion.button
//               className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-md text-sm font-medium flex items-center space-x-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Download className="h-4 w-4" />
//               <span>Download the app</span>
//             </motion.button>
//             <div className="flex space-x-4 mt-6">
//               <button className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//                 <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M16.5 8.5L10.5 14.5L7.5 11.5"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//               <button className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//                 <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V19Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M5 8C5 9.10457 5.89543 10 7 10H9V5C9 3.89543 8.10457 3 7 3H7C5.89543 3 5 3.89543 5 5V8Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M19 8C19 9.10457 18.1046 10 17 10H15V5C15 3.89543 15.8954 3 17 3H17C18.1046 3 19 3.89543 19 5V8Z"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </motion.div>
//           <motion.div
//             className="h-[400px] bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="relative w-[250px] h-[500px] overflow-hidden rounded-3xl border-8 border-gray-800 shadow-2xl">
//               <div className="absolute inset-0 bg-white dark:bg-gray-900">
//                 <div className="h-12 bg-gray-800 flex items-center justify-center">
//                   <div className="w-20 h-6 bg-black rounded-full"></div>
//                 </div>
//                 <div className="p-4">
//                   <div className="w-full h-8 bg-blue-600 rounded-full mb-4 flex items-center justify-center text-white text-xs">
//                     Team Up
//                   </div>
//                   <div className="space-y-2">
//                     <div className="w-full h-20 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
//                     <div className="w-full h-20 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
//                     <div className="w-full h-20 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-sm font-medium mb-4 dark:text-gray-300">About</h3>
//               <Link
//                 href="#"
//                 className="block text-sm text-gray-600 dark:text-gray-400 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//               >
//                 Contact
//               </Link>
//               <Link
//                 href="#"
//                 className="block text-sm text-gray-600 dark:text-gray-400 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//               >
//                 Instagram
//               </Link>
//               <Link
//                 href="#"
//                 className="block text-sm text-gray-600 dark:text-gray-400 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//               >
//                 Email
//               </Link>
//             </div>
//             <div>
//               <h3 className="text-sm font-medium mb-4 dark:text-gray-300">Terms & Conditions</h3>
//               <Link
//                 href="#"
//                 className="block text-sm text-gray-600 dark:text-gray-400 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//               >
//                 Privacy Policy
//               </Link>
//             </div>
//             <div>
//               <h3 className="text-sm font-medium mb-4 dark:text-gray-300">Built in Manipal</h3>
//               <Link
//                 href="#"
//                 className="block text-sm text-gray-600 dark:text-gray-400 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//               >
//                 Team Q & A
//               </Link>
//             </div>
//             <div>
//               <h3 className="text-sm font-medium mb-4 dark:text-gray-300">Follow Us</h3>
//               <div className="flex space-x-4">
//                 <Link
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                   </svg>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                 >
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
//             <p className="text-sm text-gray-600 dark:text-gray-400">
//               &copy; {new Date().getFullYear()} Team Up. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

