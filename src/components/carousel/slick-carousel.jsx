// // Carousel.js
// import {useState} from 'react'
// import Slider from 'react-slick'
// import {FaChevronLeft, FaChevronRight} from 'react-icons'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// export default function SlickCarousel() {
//   const [sliderRef, setSliderRef] = useState(null)

//   const sliderSettings = {
//     // removes default buttons
//     arrows: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: false,
//   }

//   const hotelCards = [
//     // ...
//   ]

//   return (
//     <div className='content'>
//       <div className='controls'>
//         <button>
//           <FaChevronLeft />
//         </button>
//         <button>
//           <FaChevronRight />
//         </button>
//       </div>
//       <Slider ref={setSliderRef} {...sliderSettings}>
//         {pricingCards.map((card, index) => (
//           <div key={index}>
//             <h2>{card.title}</h2>
//             <p>{card.description}</p>
//             <ul>
//               {card.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//             <button>Buy Now</button>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   )
// }