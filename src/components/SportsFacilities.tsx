
import { motion } from "framer-motion";

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

export const SportsGrid = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-36">
        <h2 className="font-display text-4xl text-center mb-4">Plan your game</h2>
        <p className="text-center mb-4">Select your sport</p>
        <p className="text-gray-600 text-center mb-12">
          We offer a wide range of sports facilities across MME. Play, grow and have fun.
          Schedule your games and avoid clashes
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {sports.map((sport) => (
            <motion.div
              key={sport.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative aspect-square overflow-hidden"
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
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-video  overflow-hidden">
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
          
          <div className="relative aspect-video  overflow-hidden">
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
      </div>
    </section>
  );
};
