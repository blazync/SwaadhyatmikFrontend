import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import { applyAnimation, slideInFromTop } from "../../util/motion";

const AboutSection = () => {
  return (
    <motion.div 
    initial={{opacity: 0, y: 700}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1, ease: "easeOut"}}
    >
    <div className="about wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="about-img">
            {/* Apply animation to the parent container */}
            {applyAnimation(
              <div>
                <Image src="/img/about.png" alt="About Image" width={500} height={500} />
              </div>,
              slideInFromTop
            )}
          </div>
          <div className="text-left">
            <div className="section-header">
              <p className="text-gray-500">Learn About Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold">Welcome to Yooga</h2>
            </div>
            <div className="about-text">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
              </p>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg mr-4">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default AboutSection;
