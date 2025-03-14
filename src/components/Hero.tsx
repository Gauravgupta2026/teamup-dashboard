
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const Hero = () => {
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
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom">
        {/* Dots decoration */}
        <div className="absolute top-32 left-4 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>

        {/* Top label */}
        <div 
          ref={(el) => (elementsRef.current[0] = el)}
          className="reveal text-sm text-gray-600 mb-4 flex items-center"
        >
          <span className="mr-2">Time to Plan</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              ref={(el) => (elementsRef.current[1] = el)}
              className="reveal text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              We help you <br />
              plan your game
            </h1>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button 
                ref={(el) => (elementsRef.current[2] = el)}
                className="reveal bg-teamup-dark text-white hover:bg-teamup-dark/90 px-6 text-base"
                size="lg"
              >
                Book a Court
              </Button>
              <Button 
                ref={(el) => (elementsRef.current[3] = el)}
                className="reveal bg-transparent hover:bg-gray-100 text-gray-900 border border-gray-300 px-6 text-base"
                size="lg"
                variant="outline"
              >
                About Us <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>

          <div
            ref={(el) => (elementsRef.current[4] = el)}
            className="reveal order-first md:order-last"
          >
            <div className="relative">
              <p className="text-sm bg-teamup-dark text-white p-4 rounded-lg absolute -top-6 right-10 md:right-0 max-w-xs z-10">
                Our platform offers a simple solution for booking sports facilities and organizing games with friends and teammates.
              </p>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-4 relative h-64 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1628779238634-a646e9a0faf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Tennis player" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="col-span-8 relative h-64 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Basketball player" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="col-span-12 relative h-40 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1532&q=80" 
                    alt="Swimming pool" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
