
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const DownloadApp = () => {
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
    <section className="section-padding bg-white" id="download">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              ref={(el) => (elementsRef.current[0] = el)}
              className="reveal text-3xl md:text-4xl font-bold mb-6"
            >
              Download the
              <br />
              TeamUp app
            </h2>
            <p 
              ref={(el) => (elementsRef.current[1] = el)}
              className="reveal text-gray-600 mb-8"
            >
              Book your favorite spots on the go, join games, and track your sports activities. Our app makes it easier than ever to stay active and connected with the sports community.
            </p>
            <div 
              ref={(el) => (elementsRef.current[2] = el)}
              className="reveal flex flex-wrap gap-4"
            >
              <Button className="bg-black hover:bg-black/90 text-white flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.5,2 C18.8807119,2 20,3.11928813 20,4.5 L20,19.5 C20,20.8807119 18.8807119,22 17.5,22 L6.5,22 C5.11928813,22 4,20.8807119 4,19.5 L4,4.5 C4,3.11928813 5.11928813,2 6.5,2 L17.5,2 Z M12,17.5 C11.4477153,17.5 11,17.9477153 11,18.5 C11,19.0522847 11.4477153,19.5 12,19.5 C12.5522847,19.5 13,19.0522847 13,18.5 C13,17.9477153 12.5522847,17.5 12,17.5 Z M8.5,5 L7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L16.5,6 C16.7761424,6 17,5.77614237 17,5.5 C17,5.22385763 16.7761424,5 16.5,5 L15.5,5 L15.5,5 L8.5,5 Z"></path>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-sm font-medium">App Store</span>
                </div>
              </Button>
              <Button className="bg-black hover:bg-black/90 text-white flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.61111 1.5C2.77803 1.5 2.11111 2.16693 2.11111 3V21C2.11111 21.8331 2.77803 22.5 3.61111 22.5H20.3889C21.222 22.5 21.8889 21.8331 21.8889 21V3C21.8889 2.16693 21.222 1.5 20.3889 1.5H3.61111ZM8.56667 8.45576L13.2178 7.23258C13.8161 7.05532 14.4306 7.43359 14.6079 8.03183L15.831 12.6829C16.0083 13.2812 15.63 13.8957 15.0318 14.073L10.3807 15.2962C9.78241 15.4734 9.16793 15.0952 8.99067 14.4969L7.76748 9.84584C7.59022 9.24761 7.96849 8.63302 8.56667 8.45576ZM17.7222 12C17.7222 12.8331 16.4891 13.5 15.6561 13.5C14.823 13.5 14.1561 12.8331 14.1561 12C14.1561 11.1669 14.823 10.5 15.6561 10.5C16.4891 10.5 17.7222 11.1669 17.7222 12ZM6.30556 12C6.30556 12.8331 5.63863 13.5 4.80556 13.5C3.97249 13.5 3.30556 12.8331 3.30556 12C3.30556 11.1669 3.97249 10.5 4.80556 10.5C5.63863 10.5 6.30556 11.1669 6.30556 12ZM12.0139 16.9444C12.0139 17.7775 11.347 18.4444 10.5139 18.4444C9.68083 18.4444 9.01389 17.7775 9.01389 16.9444C9.01389 16.1114 9.68083 15.4444 10.5139 15.4444C11.347 15.4444 12.0139 16.1114 12.0139 16.9444ZM12.0139 7.05556C12.0139 7.88863 11.347 8.55556 10.5139 8.55556C9.68083 8.55556 9.01389 7.88863 9.01389 7.05556C9.01389 6.22249 9.68083 5.55556 10.5139 5.55556C11.347 5.55556 12.0139 6.22249 12.0139 7.05556Z"></path>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-sm font-medium">Google Play</span>
                </div>
              </Button>
            </div>
          </div>

          <div
            ref={(el) => (elementsRef.current[3] = el)}
            className="reveal relative md:flex justify-center items-center"
          >
            <div className="bg-gradient-to-br from-teamup-blue/20 to-teamup-purple/20 backdrop-blur-xl rounded-3xl p-8 aspect-square max-w-sm mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teamup-blue/5 to-teamup-purple/5 backdrop-blur-xl"></div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-teamup-blue/20 rounded-full mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teamup-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">TeamUp Mobile</h3>
                <p className="text-gray-600 text-sm text-center mb-6">
                  Scan the QR code in the scheduling section to download our app instantly
                </p>
                <Button className="bg-teamup-blue hover:bg-teamup-blue/90">
                  <ArrowRight size={16} className="mr-2" /> Get the App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
