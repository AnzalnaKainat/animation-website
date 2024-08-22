// import React from "react";


// const About = () => {
//   return (
//     <div className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
//       <h1 className='font-["Neue_Montreal"] py-20 px-10 text-[4.5vw] leading-[3.5vw] tracking-tight'>
//         Ochi is a strategic presentation agency for forward-thinking businesses
//         that need to raise funds, sell products, explain complex ideas, and hire
//         great people.
//       </h1>

//       <div className="flex gap-5 w-full border-t-[1px] p-10 border-[#a1b562] ">
//         <div className="w-1/2">
//           <h2>What you can expect:</h2>
//         </div>
//         <div className="w-1/4">
//           <p>
//             We create tailored presentations to help you persuade your
//             colleagues, clients, or investors. Whether it’s live or digital,
//             delivered for one or a hundred people.
//           </p>
//           <p className="mt-10">
//             We believe the mix of
//             strategy and design (with a bit of coffee) is what makes your
//             message clear, convincing, and captivating.
//           </p>
//         </div>
//         <div className="w-1/4 pt-10">
//            <p className="mb-5">S:</p>
//            {["Instagram", "Behance", "Facebook", "LinkedIn"].map((item, index) => 
//             <a key={index} className="flex gap-5">{item}</a>
//            )} 
//         </div>
//       </div>

//       <div className="flex gap-5 w-full border-t-[1px] mt-20 p-10 border-[#a1b562] ">
//         <div className="w-1/2">
//           <h1 className="text-7xl">Our approach:</h1>
//           <button className="flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
//             Read More
//             <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
//           </button>
//         </div>
//         <div className="w-1/2 h-[80vh] rounded-2xl bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] "></div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.1" className="w-full pb-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] py-10 px-6 sm:py-20 sm:px-10 text-[5vw] sm:text-[4.5vw] leading-[5vw] sm:leading-[3.5vw] '>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div className="flex flex-col sm:flex-row gap-5 w-full border-t-[1px] p-6 sm:p-10 border-[#a1b562]">
        <div className="w-full sm:w-1/2">
          <h2 className="text-xl sm:text-2xl">What you can expect:</h2>
        </div>
        <div className="w-full sm:w-1/4">
          <p className="text-sm sm:text-base">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="mt-5 sm:mt-10 text-sm sm:text-base">
            We believe the mix of
            strategy and design (with a bit of coffee) is what makes your
            message clear, convincing, and captivating.
          </p>
        </div>
        <div className="w-full sm:w-1/4 pt-5 sm:pt-10">
           <p className="mb-3 sm:mb-5 text-sm sm:text-base">S:</p>
           {["Instagram", "Behance", "Facebook", "LinkedIn"].map((item, index) => 
            <a key={index} className="block text-sm sm:text-base mb-2">{item}</a>
           )} 
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 w-full border-t-[1px] mt-10 sm:mt-20 p-6 sm:p-10 border-[#a1b562]">
        <div className="w-full sm:w-1/2">
          <h1 className="text-4xl sm:text-7xl">Our approach:</h1>
          <button className="flex gap-2 sm:gap-10 items-center px-6 sm:px-10 py-3 sm:py-6 bg-zinc-900 mt-6 sm:mt-10 rounded-full text-white text-sm sm:text-base">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-full sm:w-1/2 h-[50vh] sm:h-[80vh] rounded-2xl bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]"></div>
      </div>
    </div>
  );
};

export default About;
