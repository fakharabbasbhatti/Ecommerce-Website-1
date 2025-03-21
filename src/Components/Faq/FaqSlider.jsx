import React from "react";

const FaqSlider = () => {
  const logos = [
    "/about/s1.jpeg",
    "/about/s2.jpeg",
    "/about/s3.jpeg",
    "/about/s4.jpeg",
    "/about/s5.jpeg",
  ];

  return (
    <div className="bg-white py-10">
      {/* Border with reduced left & right width */}
      <div className="border-t-1 border-gray-300 max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-32 py-6">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-8 sm:h-16 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSlider;


// import alenaph from "/about/s1.jpeg"

// import dog from "/about/s2.jpeg"
// import glases from "/about/s3.jpeg"
// import joey from "/about/s4.jpeg"
// import odity from "/about/s5.jpeg"
// import '../../Components/Faq/FaqSlider.css'
// export default function FaqSlider () {
//     const imagesslider = [
//         {
//             img: alenaph,
//             name: 'alenaph',
//             class: 'h-full w-full rounded-tl-[30px] rounded-br-[20px]',
//         },
//         {
//             img: dog,
//             name: 'dog',
//             class: 'h-full w-full rounded-tr-[40px] rounded-bl-[30px]',
//         },
//         {
//             img: glases,
//             name: 'glases',
//             class: 'h-full w-full rounded-tl-[50px] rounded-bl-[40px]',
//         },
//         {
//             img: joey,
//             name: 'joey',
//             class: 'h-full w-full rounded-tr-[20px] rounded-br-[10px]',
//         },
//         {
//             img: timu,
//             name: 'timu',
//             class: 'h-full w-full rounded-bl-[60px] rounded-tr-[50px]',
//         },
//         {
//             img: women,
//             name: 'women',
//             class: 'h-full w-full rounded-tl-[35px] rounded-tr-[25px]',
//         },
//         {
//             img: wendy,
//             name: 'wendy',
//             class: 'h-full w-full rounded-br-[45px] rounded-bl-[35px]',
//         },
//         {
//             img: siera,
//             name: 'siera',
//             class: 'h-full w-full rounded-tl-[25px] rounded-br-[15px]',
//         },
//         {
//             img: men,
//             name: 'men',
//             class: 'h-full w-full rounded-tr-[50px] rounded-tl-[40px]',
//         },
//         {
//             img: tocla,
//             name: 'tocla',
//             class: 'h-full w-full rounded-bl-[30px] rounded-tr-[20px]',
//         },
//         {
//             img: leeya,
//             name: 'leeya',
//             class: 'h-full w-full rounded-br-[40px] rounded-bl-[30px]',
//         },
//         {
//             img: chinese,
//             name: 'chinese',
//             class: 'h-full w-full rounded-tl-[30px] rounded-tr-[10px]',
//         },
//         {
//             img: odity,
//             name: 'odity',
//             class: 'h-full w-full rounded-br-[20px] rounded-tl-[10px]',
//         },

//     ]
//     return (
//         <div className=" w-full overflow-hidden sm:pb-10">
//             <div className="flex gap-10 animate-marquee">
//                 {imagesslider.map((image, index) => (
//                     <div
//                         key={index}
//                         className=" w-[200px] h-[200px] h md:h-[300px] md:w-[300px]  relative cursor-pointer flex-shrink-0"
//                     >
//                         <img
//                             src={image.img}
//                             className={`h-full w-full object-cover ${image.class}`}
//                             alt=""
//                         />
//                         <span className="absolute w-[70px] sm:w-[100px] top-20 right-14 text-xs sm:text-xl opacity-0 text-center z-20 text-black p-2 bg-white rounded-[50px] hover:opacity-100">
//                             @{image.name}
//                         </span>
//                     </div>
//                 ))}
//                 {/* Duplicate the images for a smooth loop */}
//                 {imagesslider.map((image, index) => (
//                     <div
//                         key={`duplicate-${index}`}
//                         className="h-[300px] w-[300px] bg-cyan-200 relative cursor-pointer flex-shrink-0"
//                     >
//                         <img
//                             src={image.img}
//                             className={`h-full w-full object-cover ${image.class}`}
//                             alt=""
//                         />
//                         <span className="absolute top-20 right-14 text-xl opacity-0 text-center z-20 text-black p-2 bg-white rounded-[50px] hover:opacity-100">
//                             @{image.name}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </div>


//     )
// }

