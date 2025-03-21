



"use client"

import { useState, useRef } from "react"
import { MapPin } from "lucide-react"

export default function NewSchedule() {
  const [darkMode, setDarkMode] = useState(false)
  const scheduleRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <div id="schedule" className=" mx-32 px-4 mt-24 md:py-24">
        <h3 className="text-xs font-light font-sans uppercase mb-16 text-gray-400">Featured Events</h3>
        <h2 className=" section-title text-center text-3xl font-sans font-medium">
          We offer a wide range of sports facilities across MAHE. Play, grow and have fun.
        </h2>
        <p className="text-base mb-24 font-sans text-center text-gray-400 ">Schedule your games and avoid clashes</p>

        <div className="border dark:border-gray-700 rounded-lg p-6 mb-12 bg-white dark:bg-gray-900 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Enter Team Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="Your team name"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Select Game</label>
              <select className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors">
                <option>Football</option>
                <option>Basketball</option>
                <option>Tennis</option>
                <option>Swimming</option>
              </select>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-300 dark:border-gray-700 my-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="md:col-span-2">
              <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Select Time</label>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="From"
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors"
                />
                <span className="text-gray-500 dark:text-gray-400">To</span>
                <input
                  type="text"
                  placeholder="To"
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Players</label>
              <input
                type="text"
                placeholder="5 Players"
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Location</label>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="MIT Manipal"
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Pay</label>
              <select className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none focus:border-blue-600 transition-colors">
                <option>Now / Later</option>
                <option>Now</option>
                <option>Later</option>
              </select>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-300 dark:border-gray-700 my-6"></div>

          <div>
            <label className="block text-xs mb-2 text-gray-500 dark:text-gray-400">Available Slots</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-center hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                >
                  <div className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    June 26, 2025
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Wednesday, 09:00 - 12:00</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium">
              Book Now
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-8 text-xs text-gray-500 dark:text-gray-400">
            <span>Trusted by 200+ students</span>
            <span>30+ rounds everyday</span>
            <span>Trusted by 100+ coaches</span>
          </div>
        </div>
      </div>
    </div>
  )
}