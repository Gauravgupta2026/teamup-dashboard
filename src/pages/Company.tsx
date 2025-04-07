
import React from 'react';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { TrendingUp, TrendingDown, Calendar, Users, DollarSign, Activity } from 'lucide-react';

const Company = () => {
  // Sample data for metrics
  const metrics = {
    totalBookings: 245,
    bookingsTrend: +12.5,
    totalRevenue: 125000,
    revenueTrend: -2.3,
    activeCustomers: 178,
    customersTrend: +5.8,
    upcomingEvents: 8,
    recentCancellations: 5,
  };

  // Sample data for booking trend chart
  const bookingTrendData = [
    { name: 'Mon', bookings: 15 },
    { name: 'Tue', bookings: 22 },
    { name: 'Wed', bookings: 18 },
    { name: 'Thu', bookings: 25 },
    { name: 'Fri', bookings: 32 },
    { name: 'Sat', bookings: 38 },
    { name: 'Sun', bookings: 28 },
  ];

  // Sample data for facility utilization pie chart
  const facilityUtilizationData = [
    { name: 'Ground 1A', value: 35 },
    { name: 'Ground 1B', value: 25 },
    { name: 'Ground 2A', value: 20 },
    { name: 'Ground 2B', value: 15 },
    { name: 'Ground 3A', value: 5 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <main className="p-6 md:p-10 max-w-7xl mx-auto animate-fade-in">
          <h1 className="text-3xl font-semibold mb-6">Company Dashboard</h1>
          
          {/* Key Metrics Section */}
          <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">{metrics.totalBookings}</div>
                  <div className={`flex items-center ${metrics.bookingsTrend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {metrics.bookingsTrend > 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                    {Math.abs(metrics.bookingsTrend)}%
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Compared to last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">₹{metrics.totalRevenue.toLocaleString()}</div>
                  <div className={`flex items-center ${metrics.revenueTrend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {metrics.revenueTrend > 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                    {Math.abs(metrics.revenueTrend)}%
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Compared to last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Active Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">{metrics.activeCustomers}</div>
                  <div className={`flex items-center ${metrics.customersTrend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {metrics.customersTrend > 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                    {Math.abs(metrics.customersTrend)}%
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Compared to last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium text-gray-500">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                    Upcoming Events
                  </div>
                  <div className="font-semibold">{metrics.upcomingEvents}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <Activity className="h-4 w-4 mr-2 text-red-500" />
                    Recent Cancellations
                  </div>
                  <div className="font-semibold">{metrics.recentCancellations}</div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* Charts Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Booking Trend</CardTitle>
                <CardDescription>Number of bookings per day this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ChartContainer
                    config={{
                      bookings: {
                        label: "Bookings",
                        color: "#8884d8"
                      }
                    }}
                  >
                    <BarChart data={bookingTrendData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent labelFormatter={(label) => `${label}`} />
                        }
                      />
                      <Bar dataKey="bookings" fill="var(--color-bookings)" />
                    </BarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Facility Utilization</CardTitle>
                <CardDescription>Distribution of bookings across grounds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={facilityUtilizationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {facilityUtilizationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Utilization']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* Staff Availability Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Staff Availability</CardTitle>
                <CardDescription>Current staff availability status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium">Coaching Staff</div>
                        <div className="text-sm text-gray-500">8 out of 10 available</div>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">80% Available</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">Ground Maintenance</div>
                        <div className="text-sm text-gray-500">5 out of 6 available</div>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">83% Available</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-medium">Equipment Staff</div>
                        <div className="text-sm text-gray-500">3 out of 4 available</div>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">75% Available</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Company;
