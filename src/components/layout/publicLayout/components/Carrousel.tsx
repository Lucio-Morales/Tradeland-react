// import { useState } from 'react';

import { DiAndroid } from 'react-icons/di';
import { FaBusinessTime, FaCode } from 'react-icons/fa';
import { MdOutlineDesignServices, MdSupportAgent } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

// const Carousel = () => {
//   const images = [
//     'card1.webp',
//     'card2.webp',
//     'card3.webp',
//     'card4.webp',
//     'card5.webp',
//   ];
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   const selectNewImage = (index: number, images: string[], next = true) => {
//     const condition = next
//       ? selectedIndex < images.length - 1
//       : selectedIndex > 0;
//     const nextIndex = next
//       ? condition
//         ? selectedIndex + 1
//         : 0
//       : condition
//       ? selectedIndex - 1
//       : images.length - 1;

//     setSelectedImage(images[nextIndex]);
//     setSelectedIndex(nextIndex);
//   };

//   const previous = () => {
//     selectNewImage(selectedIndex, images, false);
//   };

//   const next = () => {
//     selectNewImage(selectedIndex, images);
//   };
//   return (
//     <>
//       <img src={`/${selectedImage}`} loading="lazy" alt="carousel image" />
//       <button onClick={previous}>{'<'}</button>
//       <button onClick={next}>{'>'}</button>
//     </>
//   );
// };

// export default Carousel;
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    icon: DiAndroid,
    title: 'Medios de pago',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
  {
    icon: MdSupportAgent,
    title: 'Los más vendidos',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
  {
    icon: FaBusinessTime,
    title: 'Ofertas especiales',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
  {
    icon: TbTruckDelivery,
    title: '20% de descuento',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
  {
    icon: FaCode,
    title: 'Lo ultimo que viste',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
  {
    icon: MdOutlineDesignServices,
    title: 'Medios de pago',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
  {
    icon: DiAndroid,
    title: 'Medios de pago',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
  {
    icon: MdSupportAgent,
    title: 'Los más vendidos',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
  {
    icon: FaBusinessTime,
    title: 'Ofertas especiales',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
  {
    icon: TbTruckDelivery,
    title: '20% de descuento',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
  {
    icon: FaCode,
    title: 'Lo ultimo que viste',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
  {
    icon: MdOutlineDesignServices,
    title: 'Medios de pago',
    para: 'lorem ipsum bla bla bla many text and that jaja',
    label: 'Conocer medios de pago',
  },
];
const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full bg-slate-20 h-fit flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 gap-6">
      <div className="w-full h-fit p-8">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              id="slider-boxes"
              key={index}
              className="bg-white p-10 rounded-xl flex flex-col justify-center items-center border-b-[8px] border-red-500"
            >
              <div
                id="icon-box"
                className="bg-yellow-400 p-6 rounded-full hover:bg-yellow-500 cursor-pointer"
              >
                {item.icon && <item.icon className="w-[45px] h-[45px]" />}
              </div>
              <div className="flex flex-col justify-center items-center gap-6 mt-6">
                <h1 className="text-2xl text-black font-bold">{item.title}</h1>
                <p className="text-[17px] text-center">{item.para}</p>
                <button className="bg-yellow-400 px-8 py-3 rounded-xl font-semibold hover:bg-black hover:text-white ">
                  {item.label}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
