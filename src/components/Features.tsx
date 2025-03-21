import React, { useEffect, useRef } from 'react';


const sports = [
  {
    title: "Football",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c",
  },
  {
    title: "Basketball",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
  },
  {
    title: "Swimming",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635",
  },
  {
    title: "Tennis",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0",
  },
];


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
    <section id="about">
      <div className="mx-32">
        <div className="mt-24">
          <h3
            ref={(el) => (elementsRef.current[0] = el)}
            className="reveal text-xs font-sans font-light text-gray-400 uppercase mb-16"
          >
            Why Team Up
          </h3>
          <div className="max-w-3xl mx-auto text-center items-center">
            <h2
              ref={(el) => (elementsRef.current[1] = el)}
              className="reveal section-title text-3xl font-sans font-medium"
            >
              We are driven by a deep passion for sports and a commitment to empowering athletes of all levels.
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div 
            ref={(el) => (elementsRef.current[3] = el)}
            className="reveal md:col-span-2 mx-auto text-center"
          >
            <p className="text-gray-600 mb-24 mt-8 px-32 font-light text-sm leading-relaxed">
              Our platform simplifies the process of finding, booking, and managing sports facilities and activities. 
              We understand the challenges that athletes, teams, and facility managers face, and we've developed 
              solutions that address these pain points.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {sports.map((sport) => (
                <div
                  key={sport.title}
                  className="relative aspect-square overflow-hidden mx-auto"
                >
                  <img
                    src={sport.image}
                    alt={sport.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-xl font-medium">{sport.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-video overflow-hidden mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018"
                  alt="Indoor court"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                  <h3 className="text-white text-2xl font-medium mb-2">Book a Court</h3>
                  <p className="text-white/80"><u>Explore here</u></p>
                </div>
              </div>
              
              <div className="relative aspect-video overflow-hidden mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018"
                  alt="Event venue"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                  <h3 className="text-white text-2xl font-medium mb-2">Event Details</h3>
                  <p className="text-white/80"><u>Book updates</u></p>
                </div>
              </div>
            </div>

            <div className="mt-20 text-sm text-gray-500 text-center">
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
