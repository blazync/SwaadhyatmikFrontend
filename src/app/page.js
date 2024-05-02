'use client'
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import {motion} from "framer-motion";

import TeamSection from '../components/sections/whatido';
import About from '../components/sections/About';
import Price from '../components/sections/Price';
import Blog from '../components/sections/blog';
import Testimonial from '../components/sections/testimonial.jsx';
import { applyAnimation, slideInFromTop } from "../util/motion";
 


export default function Home() {
  return (
    <div>
      <>
      <Head>
        <title>Swaadhyatmik Services</title>
      </Head>
        
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="hero-text text-gray-900">
          
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Yoga Practice For Good Health</h1>
                            
              <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Embark on a Journey to Wellness, Yoga Practices for Optimal Health.Yoga's Impact on Body, Mind, and Soul.Yoga for Holistic Well-being
              </p>
              <div className="hero-btn">
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg mr-4"
                >
                  Join Now
                </a>
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="hero-image">
          {applyAnimation(
                  <img src="/img/hero.png" alt="Hero Image" />,
                slideInFromTop // Pass animation variants
              )}
          </div>
        </div>
      </div>
    </div>
      <About />
      <TeamSection />
      <Blog />
      <Testimonial />
      </>
    </div>
  );
}
