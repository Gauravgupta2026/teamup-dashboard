
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Calendar, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Scheduling = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="section-padding" id="memberships">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 
            ref={(el) => (elementsRef.current[0] = el)}
            className="reveal section-title"
          >
            We offer a wide range of sports facilities across MAHE
          </h2>
          <p 
            ref={(el) => (elementsRef.current[1] = el)}
            className="reveal section-subtitle"
          >
            Play, grow and schedule your games and avoid clashes
          </p>
        </div>

        <div 
          ref={(el) => (elementsRef.current[2] = el)}
          className="reveal max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden border-gray-200">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Event Booking Form</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
                    <div className="flex items-center p-3 border rounded-md bg-white">
                      <Clock size={18} className="text-gray-400 mr-2" />
                      <select className="form-select block w-full text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0">
                        <option value="">Choose a time</option>
                        <option value="morning">Morning (6 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                        <option value="evening">Evening (5 PM - 10 PM)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Players</label>
                    <div className="flex items-center p-3 border rounded-md bg-white">
                      <Search size={18} className="text-gray-400 mr-2" />
                      <input 
                        type="number" 
                        placeholder="Number of players" 
                        className="block w-full border-none focus:outline-none focus:ring-0 text-gray-700 bg-transparent"
                        min="1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <div className="flex items-center p-3 border rounded-md bg-white">
                      <MapPin size={18} className="text-gray-400 mr-2" />
                      <select className="form-select block w-full text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0">
                        <option value="">Select location</option>
                        <option value="MIT Campus">MIT Campus</option>
                        <option value="KMC Campus">KMC Campus</option>
                        <option value="Manipal Center">Manipal Center</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Sport</label>
                    <div className="flex items-center p-3 border rounded-md bg-white">
                      <div className="text-gray-400 mr-2">🏀</div>
                      <select className="form-select block w-full text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0">
                        <option value="">Select sport</option>
                        <option value="basketball">Basketball</option>
                        <option value="football">Football</option>
                        <option value="tennis">Tennis</option>
                        <option value="swimming">Swimming</option>
                        <option value="volleyball">Volleyball</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                    <div className="flex items-center p-3 border rounded-md bg-white">
                      <Calendar size={18} className="text-gray-400 mr-2" />
                      <input 
                        type="date" 
                        className="block w-full border-none focus:outline-none focus:ring-0 text-gray-700 bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment / Hour</label>
                    <div className="flex items-center p-3 border rounded-md bg-white">
                      <div className="text-gray-400 mr-2">₹</div>
                      <select className="form-select block w-full text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0">
                        <option value="">Select payment option</option>
                        <option value="credit">Credit Card</option>
                        <option value="debit">Debit Card</option>
                        <option value="upi">UPI</option>
                        <option value="cash">Cash</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-200 pt-5">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="qr-code bg-gray-100 w-24 h-24 flex items-center justify-center rounded-md">
                    <img 
                      src="data:image/png;base64,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"
                      alt="QR Code" 
                      className="w-20 h-20"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium">Trusted by 7500+ users</h4>
                    <p className="text-xs text-gray-500">Scan to download our app</p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((time, index) => (
                    <Button 
                      key={index}
                      variant={index === 2 ? "default" : "outline"}
                      className={`text-xs py-1 px-2 h-auto ${index === 2 ? 'bg-teamup-blue hover:bg-teamup-blue/90' : ''}`}
                    >
                      {time+3}:00 PM
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;
