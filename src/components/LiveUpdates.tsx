
import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';
import { Trophy, Users, Coffee } from 'lucide-react';

const LiveUpdates = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState("live");

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
    <section className="section-padding bg-teamup-dark text-white" id="events">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 
            ref={(el) => (elementsRef.current[0] = el)}
            className="reveal text-teamup-blue uppercase text-sm tracking-wide font-medium mb-2"
          >
            Why
          </h3>
          <h2 
            ref={(el) => (elementsRef.current[1] = el)}
            className="reveal text-3xl md:text-4xl font-bold mb-4"
          >
            3 reasons to come
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div 
            ref={(el) => (elementsRef.current[2] = el)}
            className="reveal bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden"
          >
            <div className="aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Sports event" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <span className="text-teamup-blue font-medium text-sm mb-2">Featured Event</span>
                <h3 className="text-xl font-bold mb-2">Manipal University Championship</h3>
                <p className="text-gray-300 text-sm">Join us for the annual championship featuring teams from all departments.</p>
              </div>
            </div>
          </div>

          <div 
            ref={(el) => (elementsRef.current[3] = el)}
            className="reveal"
          >
            <Tabs defaultValue="live" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="w-full grid grid-cols-3 mb-6 bg-black/20">
                <TabsTrigger 
                  value="live" 
                  className={`font-medium ${activeTab === 'live' ? 'text-white' : 'text-gray-400'}`}
                >
                  <Trophy size={16} className="mr-2" /> Live
                </TabsTrigger>
                <TabsTrigger 
                  value="food" 
                  className={`font-medium ${activeTab === 'food' ? 'text-white' : 'text-gray-400'}`}
                >
                  <Coffee size={16} className="mr-2" /> Food & Drink
                </TabsTrigger>
                <TabsTrigger 
                  value="community" 
                  className={`font-medium ${activeTab === 'community' ? 'text-white' : 'text-gray-400'}`}
                >
                  <Users size={16} className="mr-2" /> Community
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="live" className="mt-0">
                <Card className="bg-gradient-to-br from-teamup-blue/10 to-teamup-purple/10 backdrop-blur-xl border-0 p-6 text-white h-[320px] flex flex-col">
                  <h3 className="text-xl font-bold mb-4">Follow Team Up for your favorite updates</h3>
                  <p className="text-gray-300 mb-6">
                    Get real-time updates on games, scores, and events happening right now across all our locations.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Live Scores</h4>
                      <p className="text-xs text-gray-300">Track real-time scores for all ongoing games</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Live Streaming</h4>
                      <p className="text-xs text-gray-300">Watch select games streamed live on our platform</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="food" className="mt-0">
                <Card className="bg-gradient-to-br from-teamup-blue/10 to-teamup-purple/10 backdrop-blur-xl border-0 p-6 text-white h-[320px] flex flex-col">
                  <h3 className="text-xl font-bold mb-4">This is for all your favorites</h3>
                  <p className="text-gray-300 mb-6">
                    Enjoy delicious food and refreshing drinks at our venues. Pre-order through the app and have your refreshments ready.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Health Options</h4>
                      <p className="text-xs text-gray-300">Nutritious choices for the health-conscious athlete</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Quick Service</h4>
                      <p className="text-xs text-gray-300">Skip the lines with our pre-ordering system</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="community" className="mt-0">
                <Card className="bg-gradient-to-br from-teamup-blue/10 to-teamup-purple/10 backdrop-blur-xl border-0 p-6 text-white h-[320px] flex flex-col">
                  <h3 className="text-xl font-bold mb-4">Build Connections, Meet like-minds & Experience Teamship</h3>
                  <p className="text-gray-300 mb-6">
                    Join our community of sports enthusiasts. Connect with like-minded individuals, join teams, and participate in events.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Find Teams</h4>
                      <p className="text-xs text-gray-300">Join existing teams or create your own</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Community Events</h4>
                      <p className="text-xs text-gray-300">Participate in community-organized tournaments</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveUpdates;
