"use client"

import { useState, useEffect, useMemo } from "react"
import { Search, Filter, Calendar, MapPin, User, Clock, Tag, ChevronDown, X, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { Config } from "tailwindcss"


// Filter options
const FILTER_OPTIONS = [
  { value: "customer", label: "Customer", icon: <User className="w-4 h-4" /> },
  { value: "ground", label: "Ground", icon: <MapPin className="w-4 h-4" /> },
  { value: "date", label: "Date", icon: <Calendar className="w-4 h-4" /> },
  { value: "time", label: "Time", icon: <Clock className="w-4 h-4" /> },
  { value: "booking_id", label: "Booking ID", icon: <Tag className="w-4 h-4" /> },
  { value: "status", label: "Status", icon: <Tag className="w-4 h-4" /> },
]

export default function BookingSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("customer")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Get the current filter option
  const currentFilter = FILTER_OPTIONS.find((option) => option.value === selectedFilter)

  // Filter bookings based on search term and selected filter
  const filteredBookings = useMemo(() => {
    if (!searchTerm) return bookings

    return bookings.filter((booking) => {
      const value = booking[selectedFilter as keyof typeof booking]
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchTerm.toLowerCase())
      }
      return false
    })
  }, [bookings, searchTerm, selectedFilter])

  // Simulate API call with loading state
  const fetchBookings = async () => {
    try {
      setLoading(true);
      setError(null);
  
      // API request to Django backend
      const response = await fetch("http://localhost:8000/api/bookings/");
      
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }
  
      const data = await response.json();
      const formattedData = data.map((booking) => ({
       ...booking,
        booking_id: booking.id,  // Ensure frontend can access it
      }));
setBookings(formattedData);

  
    } catch (err) {
      setError("Failed to fetch bookings. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  

  // Fetch bookings on initial load
  useEffect(() => {
    fetchBookings();
  }, []);
  

  // Handle filter selection
  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter)
    setIsDropdownOpen(false)
  }

  // Clear search
  const handleClearSearch = () => {
    setSearchTerm("")
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-sports-purple to-sports-blue p-6 text-white">
          <h1 className="text-2xl font-bold">Booking Search</h1>
          <p className="text-purple-100">Search and filter bookings in real-time</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="p-6 border-b">
          <div className="relative flex items-center">
            {/* Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 rounded-l-lg px-4 py-2.5 text-gray-700 transition-colors"
              >
                <div className="flex items-center">
                  {currentFilter?.icon}
                  <span className="ml-2">{currentFilter?.label}</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div className="absolute z-10 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 animate-scale-in">
                    {FILTER_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleFilterSelect(option.value)}
                        className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                          selectedFilter === option.value ? "bg-purple-50 text-purple-600" : "text-gray-700"
                        }`}
                      >
                        {option.icon}
                        <span className="ml-2">{option.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-10 py-2.5 border-0 border-l border-gray-300 bg-white rounded-r-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder={`Search by ${currentFilter?.label.toLowerCase()}...`}
              />
              {searchTerm && (
                <button onClick={handleClearSearch} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>

          {/* Active Filters */}
          {searchTerm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 flex items-center"
            >
              <span className="text-sm text-gray-500 mr-2">Active filter:</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                {currentFilter?.label}: {searchTerm}
                <button onClick={handleClearSearch} className="ml-1 text-purple-600 hover:text-purple-800">
                  <X className="w-3 h-3" />
                </button>
              </span>
            </motion.div>
          )}
        </div>

        {/* Results Section */}
        <div className="p-6">
          {/* Results Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {loading ? "Loading bookings..." : `${filteredBookings.length} Bookings Found`}
            </h2>

            {/* Additional controls could go here */}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
              <span className="ml-2 text-gray-600">Loading bookings...</span>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              <p>{error}</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && filteredBookings.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No bookings found</h3>
              <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}

          {/* Results Table */}
          {!loading && !error && filteredBookings.length > 0 && (
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Booking ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Customer
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ground
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <AnimatePresence>
                    {filteredBookings.map((booking, index) => (
                      <motion.tr
                        key={booking.id}
                        className="hover:bg-gray-50 transition-colors animate-slide-up"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {booking.booking_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.ground}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              booking.status === "paid"
                                ? "bg-sports-green/20 text-sports-green"
                                : "bg-sports-orange/20 text-sports-orange"
                            }`}
                          >
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

