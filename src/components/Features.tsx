
import React, { useEffect, useRef } from 'react';

const Features = () => {
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
    <section className="section-padding bg-gray-50" id="about">
      <div className="container-custom">
        <div className="mb-12">
          <h3
            ref={(el) => (elementsRef.current[0] = el)}
            className="reveal text-sm text-gray-500 uppercase tracking-wider mb-2"
          >
            Why Team Up
          </h3>
          <div className="max-w-3xl">
            <h2
              ref={(el) => (elementsRef.current[1] = el)}
              className="reveal section-title"
            >
              We are driven by a deep passion for sports and a commitment to empowering athletes of all levels.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div 
            ref={(el) => (elementsRef.current[2] = el)}
            className="reveal md:col-span-1 order-last md:order-first"
          >
            <div className="relative h-full w-full rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" 
                alt="Soccer player with ball" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-medium">Find your passion</span>
              </div>
            </div>
          </div>

          <div 
            ref={(el) => (elementsRef.current[3] = el)}
            className="reveal md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-6">
              We solve your daily problems for sports and activities bookings
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our platform simplifies the process of finding, booking, and managing sports facilities and activities. 
              We understand the challenges that athletes, teams, and facility managers face, and we've developed 
              solutions that address these pain points.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 1, image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80", name: "Basketball" },
                { id: 2, image: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1532&q=80", name: "Swimming" },
                { id: 3, image: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", name: "Football" },
                { id: 4, image: "https://images.unsplash.com/photo-1530915365347-e35b749a0381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", name: "Tennis" },
              ].map((sport, index) => (
                <div 
                  key={sport.id}
                  ref={(el) => (elementsRef.current[4 + index] = el)}
                  className="reveal relative rounded-lg overflow-hidden group card-hover aspect-square"
                >
                  <img 
                    src={sport.image} 
                    alt={sport.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end justify-center p-3">
                    <span className="text-white font-medium text-sm">{sport.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>Practice like you've never won, play like you've never lost. Our mission is to help you play at your best.</p>
              <p className="mt-1 font-medium">We support all your favorite sports and activities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
