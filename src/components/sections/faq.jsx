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
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
      <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What do you mean by "Figma assets"?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.</p>
              </div>
              <div class="mb-10">                        
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What does "lifetime access" exactly mean?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.</p>
              </div>
          </div>
          <div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What does "free updates" include?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">The free updates that will be provided is based on the <a href="#" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.</p>
              </div>
              <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                      What does the free version include?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">The <a href="#" class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">free version</a> of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it.</p>
                  <p class="text-gray-500 dark:text-gray-400">You can use this version for any purposes, because it is open-source under the MIT license.</p>
              </div>
             
          </div>
      </div>
  </div>
</section>
    </motion.div>
  );
};

export default AboutSection;
