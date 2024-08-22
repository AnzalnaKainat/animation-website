// import { motion, useAnimation } from 'framer-motion';
// import React from 'react';

// const Featured = () => {
//   const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

//   const handleHover = (index) => {
//     cards[index].start({ y: '0' });
//   };

//   const handleHoverEnd = (index) => {
//     cards[index].start({ y: '100%' });
//   };

//   return (
//     <div className='w-full py-10'>
//       <div className='w-full px-20 border-b-[1px] border-zinc-400 pb-10'>
//         <h1 className='text-7xl tracking-tight font-["Neue_Montreal"]'>Featured projects</h1>
//       </div>

//       <div className='px-20'>
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20'>
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               onHoverStart={() => handleHover(index)}
//               onHoverEnd={() => handleHoverEnd(index)}
//               className='cardcontainer relative w-full h-[80vh] mt-20'
//             >
//               <div className='title flex gap-5 items-center pb-5'>
//                 <div className='w-2 h-2 bg-zinc-900 rounded-full'></div>
//                 <h1 className='uppercase'>{project.title}</h1>
//               </div>
//               <h1
//                 className={`absolute flex overflow-hidden z-[9] top-1/2 -translate-y-1/2 leading-none tracking-tight text-8xl text-[#CDEA68] font-bold ${
//                   index % 2 === 0 ? 'lg:right-0 translate-x-1/2' : 'lg:right-full translate-x-1/2'
//                 }`}
//               >
//                 {project.hoverTitle.split('').map((item, charIndex) => (
//                   <motion.span
//                     key={charIndex}
//                     className='inline-block uppercase'
//                     initial={{ y: '100%' }}
//                     animate={cards[index]}
//                     transition={{ ease: [0.22, 1, 0.36, 1], delay: charIndex * 0.05 }}
//                   >
//                     {item}
//                   </motion.span>
//                 ))}
//               </h1>
//               <div className='w-full h-full rounded-xl bg-green-600 overflow-hidden uppercase'>
//                 <img
//                   className='w-full h-full bg-cover'
//                   src={project.image}
//                   alt={`Project: ${project.title}`}
//                 />
//               </div>
//               <div className='tags flex flex-wrap gap-2 pt-3'>
//                 {project.tags.map((tag, tagIndex) => (
//                   <button
//                     key={tagIndex}
//                     className='py-1 px-5 border-[1px] border-zinc-900 text-zinc-900 rounded-full uppercase'
//                   >
//                     {tag}
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;

// export const projects = [
//   {
//     id: 1,
//     title: 'Cardboard Spaceship',
//     hoverTitle: 'Cardboard Spaceship',
//     image: 'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png',
//     tags: ['Audit', 'Copywriting', 'Sales Deck', 'Slides Designs'],
//     url: '#',
//   },
//   {
//     id: 2,
//     title: 'AH2 & Matt Horn',
//     hoverTitle: 'AH2 & Matt Horn',
//     image: 'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png',
//     tags: ['Pitch Deck'],
//     url: '#',
//   },
//   {
//     id: 3,
//     title: 'Fyde',
//     hoverTitle: 'Fyde',
//     image: 'https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png',
//     tags: ['Audit', 'Copywriting', 'Sales Deck', 'Slides Designs'],
//     url: '#',
//   },
//   {
//     id: 4,
//     title: 'Vise',
//     hoverTitle: 'Vise',
//     image: 'https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg',
//     tags: ['Agency', 'Company Presentation'],
//     url: '#',
//   },
// ];

// import { motion, useAnimation } from 'framer-motion';
// import React from 'react';

// const Featured = () => {
//   const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

//   const handleHover = (index) => {
//     cards[index].start({ y: '0' });
//   };

//   const handleHoverEnd = (index) => {
//     cards[index].start({ y: '100%' });
//   };

//   return (
//     <div className='w-full py-10'>
//       <div className='w-full px-6 sm:px-10 md:px-14 lg:px-20 border-b-[1px] border-zinc-400 pb-10'>
//         <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-["Neue_Montreal"]'>Featured projects</h1>
//       </div>

//       <div className='px-6 sm:px-10 md:px-14 lg:px-20'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8'>
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               onHoverStart={() => handleHover(index)}
//               onHoverEnd={() => handleHoverEnd(index)}
//               className='relative w-full h-full sm:py-10 py-10'
//             >
//               <div className='title flex gap-3 sm:gap-4 items-center pb-3 sm:pb-4'>
//                 <div className='w-2 h-2 bg-zinc-900 rounded-full'></div>
//                 <h1 className='uppercase'>{project.title}</h1>
//               </div>
//               <h1
//                 className={`absolute flex overflow-hidden z-[9] top-1/2 -translate-y-1/2 leading-none tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[#CDEA68] font-bold ${
//                   index % 2 === 0 ? 'lg:right-0 translate-x-1/2' : 'lg:right-full translate-x-1/2'
//                 }`}
//               >
//                 {project.hoverTitle.split('').map((item, charIndex) => (
//                   <motion.span
//                     key={charIndex}
//                     className='inline-block uppercase'
//                     initial={{ y: '100%' }}
//                     animate={cards[index]}
//                     transition={{ ease: [0.22, 1, 0.36, 1], delay: charIndex * 0.05 }}
//                   >
//                     {item}
//                   </motion.span>
//                 ))}
//               </h1>
//               <div className='w-full h-full rounded-xl bg-green-600 overflow-hidden uppercase'>
//                 <img
//                   className='w-full h-full object-cover'
//                   src={project.image}
//                   alt={`Project: ${project.title}`}
//                 />
//               </div>
//               <div className='tags flex flex-wrap gap-2 pt-2 sm:pt-3'>
//                 {project.tags.map((tag, tagIndex) => (
//                   <button
//                     key={tagIndex}
//                     className='py-1 px-3 sm:px-4 md:px-5 border-[1px] border-zinc-900 text-zinc-900 rounded-full uppercase text-xs sm:text-sm md:text-base'
//                   >
//                     {tag}
//                   </button>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;

// export const projects = [
//   {
//     id: 1,
//     title: 'Cardboard Spaceship',
//     hoverTitle: 'Cardboard Spaceship',
//     image: 'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png',
//     tags: ['Audit', 'Copywriting', 'Sales Deck', 'Slides Designs'],
//     url: '#',
//   },
//   {
//     id: 2,
//     title: 'AH2 & Matt Horn',
//     hoverTitle: 'AH2 & Matt Horn',
//     image: 'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png',
//     tags: ['Pitch Deck'],
//     url: '#',
//   },
//   {
//     id: 3,
//     title: 'Fyde',
//     hoverTitle: 'Fyde',
//     image: 'https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png',
//     tags: ['Audit', 'Copywriting', 'Sales Deck', 'Slides Designs'],
//     url: '#',
//   },
//   {
//     id: 4,
//     title: 'Vise',
//     hoverTitle: 'Vise',
//     image: 'https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg',
//     tags: ['Agency', 'Company Presentation'],
//     url: '#',
//   },
// ];

import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const Featured = () => {
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: '0' });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: '100%' });
  };

  return (
    <div className='w-full py-10'>
      <div className='w-full px-6 sm:px-10 md:px-14 lg:px-20 border-b-[1px] border-zinc-400 pb-10'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-["Neue_Montreal"]'>Featured projects</h1>
      </div>

      <div className='px-6 sm:px-10 md:px-14 lg:px-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onHoverStart={() => handleHover(index)}
              onHoverEnd={() => handleHoverEnd(index)}
              className='relative w-full h-full sm:py-10 py-10'
            >
              <div className='title flex gap-3 sm:gap-4 items-center pb-3 sm:pb-4'>
                <div className='w-2 h-2 bg-zinc-900 rounded-full'></div>
                <h1 className='uppercase'>{project.title}</h1>
              </div>
              <h1
                className={`absolute flex overflow-hidden z-[9] top-1/2 -translate-y-1/2 leading-none tracking-tight text-3xl sm:text-8xl text-[#CDEA68] font-bold ${
                  index % 2 === 0
                    ? 'lg:right-0 lg:translate-x-1/2 sm:right-0 sm:translate-x-0 text-center'
                    : 'lg:right-full lg:translate-x-1/2 sm:right-0 sm:translate-x-0 text-center'
                }`}
              >
                {project.hoverTitle.split('').map((item, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className='inline-block uppercase'
                    initial={{ y: '100%' }}
                    animate={cards[index]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: charIndex * 0.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className='w-full h-full rounded-xl bg-green-600 overflow-hidden uppercase'>
                <img
                  className='w-full h-full object-cover'
                  src={project.image}
                  alt={`Project: ${project.title}`}
                />
              </div>
              <div className='tags flex flex-wrap gap-2 pt-2 sm:pt-3'>
                {project.tags.map((tag, tagIndex) => (
                  <button
                    key={tagIndex}
                    className='py-1 px-3 sm:px-4 md:px-5 border-[1px] border-zinc-900 text-zinc-900 rounded-full uppercase text-xs sm:text-sm md:text-base'
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;


export const projects = [
  {
    id: 1,
    title: 'Cardboard Spaceship',
    hoverTitle: 'Cardboard Spaceship',
    image: 'https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png',
    tags: ['Audit', 'Copywriting', 'Sales Deck', 'Slides Designs'],
    url: '#',
  },
  {
    id: 2,
    title: 'AH2 & Matt Horn',
    hoverTitle: 'AH2 & Matt Horn',
    image: 'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png',
    tags: ['Pitch Deck'],
    url: '#',
  },
  {
    id: 3,
    title: 'Fyde',
    hoverTitle: 'Fyde',
    image: 'https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png',
    tags: ['Audit', 'Copywriting', 'Sales Deck', 'Slides Designs'],
    url: '#',
  },
  {
    id: 4,
    title: 'Vise',
    hoverTitle: 'Vise',
    image: 'https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg',
    tags: ['Agency', 'Company Presentation'],
    url: '#',
  },
];
