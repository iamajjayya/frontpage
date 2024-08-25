
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


import fedex from '../../assets/Images/fedex.webp';
import kpmg from '../../assets/Images/kpmg.webp';
import mahindra from '../../assets/Images/mahindra.png';
import nestle from '../../assets/Images/nestle.webp';
import tata from '../../assets/Images/tata.webp';
import uber from '../../assets/Images/uber.webp';
import walmart from '../../assets/Images/walmart.webp';


import "swiper/swiper-bundle.css";


const imageArray = [
  { src: fedex, alt: 'FedEx' },
  { src: kpmg, alt: 'KPMG' },
  { src: mahindra, alt: 'Mahindra' },
  { src: nestle, alt: 'Nestle' },
  { src: tata, alt: 'Tata' },
  { src: uber, alt: 'Uber' },
  { src: walmart, alt: 'Walmart' },
];

const Swiperpage = () => {
  return (
    <div className="flex gap-5 h-25 justify-center border">
      <div >
        <h1 className='text-[#9cafc8] text-2xl p-3 ml-10'>Trusted by <span className='text-[#406694]'>Leaders : </span></h1>
      </div>
      <Swiper
        modules={[Autoplay]}  
        direction="horizontal" 
        spaceBetween={2}        
        slidesPerView={5}        
        autoplay={{             
          delay: 2000,          
          disableOnInteraction: false, 
        }}
        loop={true} 
        speed={1300} 
        className="h-20 object-contain  p-3 w-full "
      >
        {
          imageArray.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.src}
                alt={item.alt}
                
                 className='w-20 items-center justify-center '
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Swiperpage;
