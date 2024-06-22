import React from 'react';
import { Carousel, Tabs } from "flowbite-react";
import { MdHome, MdLocalHospital, MdVideoCall } from "react-icons/md";
import { FaStethoscope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const images = [
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      alt: "Image 1",
      description: "Description for image 1"
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "Image 2",
      description: "Description for image 2"
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
      alt: "Image 3",
      description: "Description for image 3"
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
      alt: "Image 4",
      description: "Description for image 4"
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
      alt: "Image 5",
      description: "Description for image 5"
    },
  ];

  const data = [
    {
      name: "rehemah",
      img: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      review: "very good",
    },
    {
      name: "rehemah",
      img: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      review: "very good",
    },
    {
      name: "rehemah",
      img: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      review: "very good",
    },
    {
      name: "rehemah",
      img: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      review: "very good",
    },
    {
      name: "rehemah",
      img: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      review: "very good",
    },
    {
      name: "rehemah",
      img: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      review: "very good",
    },
    {
      name: "rehemah",
      img: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      review: "very good",
    },
  ];
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black' }}
        onClick={onClick}
      />
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black' }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

  return (
    <div>
      <div className="mt-2 mb-2 h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          {images.map((image, index) => (
            <div key={index} className="flex items-center h-full">
              <div className="w-1/2 h-full flex items-center p-4 bg-black text-white">
                <p className="text-lg text-left">{image.description}</p>
              </div>
              <img className="w-1/2 h-full object-cover" src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="overflow-x-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <Tabs aria-label="Full width tabs" style="fullWidth">
          <Tabs.Item active title="VideoCall Visit" icon={MdVideoCall}>
            <Link to="/videocall-visit">View more details</Link>
          </Tabs.Item>
          <Tabs.Item title="Farm Visit" icon={MdHome}>
         <h1>Farm visits are carried out on different demonstration farms around Uganda in different areas. Demonstration farms were created to serve different purposes and a few of them include:- Demonstration farms serve as practical training grounds for farmers, showcasing best practices, innovative techniques, and new technologies in agriculture.Practical activities such as planting, irrigation......... <span className="font-medium text-gray-800 dark:text-green"><Link to="/farmvisit">Click to read more</Link></span> </h1>             </Tabs.Item>
          <Tabs.Item title="Urgent Care" icon={MdLocalHospital}>
            <Link to="/urgent-care">This is <span className="font-medium text-gray-800 dark:text-white">Urgent Care tab's associated content</span>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</Link>
          </Tabs.Item>
          <Tabs.Item title="Vet-Clinics" icon={FaStethoscope}>
            <Link to="/vet-clinics">This is <span className="font-medium text-gray-800 dark:text-white">Vet-Clinics tab's associated content</span>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</Link>
          </Tabs.Item>
        </Tabs>
      </div>

     <div className="w-full px-7 bg-white">
  <div className="mt-2 mb-5">
  <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold">Top Veterinary Doctors</h2>
      <Link to='/doctor' className="text-indigo-500 text-lg font-medium text-sm underline">See all doctors</Link>
    </div>
    <Slider {...settings}>
      {data.map((d, index) => (
        <div key={index} className='bg-gray-200 h-[320px] text-black rounded-xl mx-2'>
          <div className='h-40 rounded-t-xl bg-white flex justify-center items-center'>
            <img src={d.img} alt={d.name} className='h-32 w-32 rounded-full' />
          </div>
          <div className='flex flex-col justify-center items-center gap-4 p-4'>
            <p className='font-semibold text-xl'>{d.name}</p>
            <p>{d.review}</p>
            <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read more</button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

    </div>
  );
}

export default Home;
