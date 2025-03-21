
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import LiveUpdates from '../components/LiveUpdates';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import HomeScreen from '@/components/HeroSection';
import NewSchedule from '../components/Scheduling';


const Index = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    revealOnScroll();
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-teamup-dark">

        <HomeScreen />
        <Features />
        <NewSchedule />
        <LiveUpdates />
        {/* <DownloadApp /> */}

      <Footer />
    </div>
  );
};

export default Index;
