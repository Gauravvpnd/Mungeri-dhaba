// import "./FrameComponent5.css";

// const FrameComponent5 = () => {
//   return (
//     <div className="component-6-group">
//       <div className="component-61">
//         <img
//           className="bb7947c94b51760e467704378fe8-2-icon1"
//           alt=""
//           src="/6087bb7947c94b51760e467704378fe8-2@2x.png"
//         />
//         <img
//           className="f8af29b11c81974eb40fa072edfbd5-icon1"
//           loading="lazy"
//           alt=""
//           src="/8f8af29b11c81974eb40fa072edfbd54-2@2x.png"
//         />
//         <img
//           className="d0634ba2f16728cb4a1842876043a2-icon1"
//           loading="lazy"
//           alt=""
//           src="/d0634ba2f16728cb4a1842876043a25c-3@2x.png"
//         />
//         <img
//           className="ea17ac5c8d087dda936624199d6-2-icon1"
//           loading="lazy"
//           alt=""
//           src="/80951ea17ac5c8d087dda936624199d6-2@2x.png"
//         />
//       </div>
//       <div className="frame-wrapper11">
//         <div className="frame-parent11">
//           <div className="frame-parent12">
//             <div className="frame-parent13">
//               <div className="mungeri-dhaba-pdf-page-0001-1-container">
//                 <img
//                   className="mungeri-dhaba-pdf-page-0001-11"
//                   alt=""
//                   src="/mungeri-dhaba-pdf-page0001-1@2x.png"
//                 />
//               </div>
//               <div className="mungeri-group">
//                 <h1 className="mungeri1">MUNGERI</h1>
//                 <div className="dhaba-container">
//                   <h1 className="dhaba1">DHABA</h1>
//                 </div>
//               </div>
//             </div>
//             <div className="frame-wrapper12">
//               <img className="frame-child4" alt="" src="/frame-103.svg" />
//             </div>
//           </div>
//           <div className="frame-wrapper13">
//             <div className="frame-parent14">
//               <div className="frame-parent15">
//                 <button className="rectangle-parent1">
//                   <div className="frame-child5" />
//                   <b className="our-menu1">Our Menu</b>
//                 </button>
//                 <button className="rectangle-parent2">
//                   <div className="frame-child6" />
//                   <b className="book-a-table1">Book a Table</b>
//                 </button>
//               </div>
//               <div className="experience-a-vibrant-container1">
//                 <p className="experience-a-vibrant1">
//                   Experience a vibrant and extraordinary hotspot in the city of
//                   Bhubaneswar !
//                 </p>
//                 <p className="perfect-fit-to1">
//                   Perfect fit to your hang to the mungeri dhaba.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrameComponent5;


import React from "react";
import "./FrameComponent5.css";
import pic from '../pages/Component 6.png'

const FrameComponent5 = () => {
  return (
    <div className="container">
      <div className="header">
        <img 
          src={pic}
          alt="Mungeri Dhaba Logo"
          className="logo"
        />
        <img 
          src="./assets/frame-103.svg" 
          alt="Menu Icon" 
          className="menu-icon"
        />
      </div>
      <div className="content">
        <div className="text-group">
          <div className="title">MUNGERI</div>
          <div className="subtitle">DHABA</div>
        </div>
        <div className="buttons">
          <button className="menu-button">Our Menu</button>
          <button className="table-button">Book a Table</button>
        </div>
        <p className="description">
          Experience a vibrant and extraordinary hotspot in the city of Bhubaneswar! 
          Perfect fit to your hang to the mungeri dhaba.
        </p>
      </div>
    </div>
  );
};

export default FrameComponent5;
