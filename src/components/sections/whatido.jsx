import React from 'react';
import {motion} from "framer-motion";

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
  <>
  <motion.div 
    initial={{opacity: 0, y: 700}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1, ease: "easeOut"}}
    >
  <div className="service-item wow fadeInUp border" data-wow-delay={delay}>
      <div className="rounded-lg p-6 bg-transparent transition duration-300 hover:color-white-200">
        <div className="service-icon">
          <i className={icon}></i>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="">{description}</p>
      </div>
    </div>
    </motion.div>
  </>
  );
};

const ServiceSection = () => {
  const serviceItems = [
    {
      icon: 'flaticon-workout',
      title: 'Heal emotions',
      description: 'Embrace tranquility through mindful practices, finding solace in inner peace.',
      delay: '0.0s',
    },
    {
      icon: 'flaticon-workout-1',
      title: 'Body Refreshes',
      description: 'Renew your vitality with invigorating movements, rejuvenating the body from within.',
      delay: '0.2s',
    },
    {
      icon: 'flaticon-workout-2',
      title: 'Mind & Serenity',
      description: 'Cultivate mental clarity and inner calm, nurturing a sanctuary of peace in the mind.',
      delay: '0.4s',
    },
    {
      icon: 'flaticon-workout-3',
      title: 'Enjoy Your life',
      description: 'Embrace joy in every moment, savoring life\'s simple pleasures with gratitude and delight.',
      delay: '0.6s',
    },
    {
      icon: 'flaticon-workout-4',
      title: 'Body & Spirituality',
      description: 'Harmonize body and spirit, connecting to a deeper sense of purpose and meaning.',
      delay: '0.8s',
    },
    {
      icon: 'flaticon-yoga-pose',
      title: 'Body & Mind',
      description: 'Achieve balance and harmony, integrating physical and mental well-being for holistic health.',
      delay: '1s',
    },
  ];

  return (
    <div className="service bg-gray-100 py-16 ">
      <div className="container mx-auto ">
        <div className="section-header text-center mb-12 ">
          <p className="text-gray-500">What we do</p>
          <h2 className="text-3xl lg:text-4xl font-bold">Yoga For Health</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-rounded-ld">
        
          {serviceItems.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={item.delay}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
