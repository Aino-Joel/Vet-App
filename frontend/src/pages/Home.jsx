import React from 'react';
import { Carousel, Tabs } from "flowbite-react";
import { MdHome, MdLocalHospital } from "react-icons/md";
import { FaStethoscope, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const images = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBx1AoggwXndrDxWMvFyHwL_qSqhf-g9lCKQ&s",
      alt: "Image 1",
      description: "Why it is important to listen to your animals"
    },
    {
      src: "https://images.fineartamerica.com/images-medium-large-5/cows-feeding-in-a-barn-simon-frasertarset-archive-groupscience-photo-library.jpg",
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
      name: "Dr Jauharag Kiti",
      img: "doctor2.jpeg",
      speciality: "Veterinary Surgeon",
      review: 4,
      nextAvailable: "Tomorrow 10:00 AM",
      location: "Kampala, Uganda",
    },
    {
      name: "Rehemah",
      img: "doctor3.jpeg",
      speciality: "Animal Nutritionist",
      review: 5,
      nextAvailable: "Today 3:00 PM",
      location: "Entebbe, Uganda",
    },
    {
      name: "Dr Nuru Katende",
      img: "doctor1.png",
      speciality: "Veterinary Pathologist",
      review: 4,
      nextAvailable: "Tomorrow 11:00 AM",
      location: "Jinja, Uganda",
    },
    {
      name: "Dr Sarah Achieng",
      img: "doctor2.png",
      speciality: "Veterinary Surgeon",
      review: 5,
      nextAvailable: "Today 4:00 PM",
      location: "Mbarara, Uganda",
    },
    {
      name: "Dr Isaac Mugisha",
      img: "doctor3.png",
      speciality: "Veterinary Radiologist",
      review: 3,
      nextAvailable: "Next Monday 9:00 AM",
      location: "Gulu, Uganda",
    },
    {
      name: "Dr Aisha Nakato",
      img: "doctor1.png",
      speciality: "Veterinary Dentist",
      review: 4,
      nextAvailable: "Friday 2:00 PM",
      location: "Fort Portal, Uganda",
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
 <div className="relative w-full h-98 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={3000}>
    {images.map((image, index) => (
      <div key={index} className="relative w-full h-full">
        <img className="w-full h-full object-cover" src={image.src} alt={image.alt} />
        <div className="absolute inset-0 flex flex-col items-end justify-end bg-black bg-opacity-50 text-white p-4">
          <div className="mb-8 text-center">
            <p className="text-lg">{image.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Click to read more
            </button>
          </div>
        </div>
      </div>
    ))}
  </Carousel>
</div>




      <div className="overflow-x-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <Tabs aria-label="Full width tabs" style="fullWidth">
          <Tabs.Item title="Farm Visit" icon={MdHome}>
            <h1>Farm visits are carried out on different demonstration farms around Uganda in different areas. Demonstration farms were created to serve different purposes and a few of them include:- Demonstration farms serve as practical training grounds for farmers, showcasing best practices, innovative techniques, and new technologies in agriculture.Practical activities such as planting, irrigation......... <span className="font-medium text-gray-800 dark:text-green"><Link to="/farmvisit">Click to read more</Link></span></h1>
          </Tabs.Item>
          
          <Tabs.Item title="Urgent Care" icon={MdLocalHospital}>
            <Link to="/urgent-care">This is <span className="font-medium text-gray-800 dark:text-white">Urgent Care tab's associated content</span>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</Link>
          </Tabs.Item>
          <Tabs.Item title="Vet-Clinics" icon={FaStethoscope}>
            <Link to="/vet-clinics">This is <span className="font-medium text-gray-800 dark:text-white">Vet-Clinics tab's associated content</span>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</Link>
          </Tabs.Item>
        </Tabs>
      </div>

      <div className="w-full px-4 bg-white">
        <div className="mt-8 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Top Veterinary Doctors</h2>
            <Link to='/doctor' className="text-indigo-600 text-lg font-medium underline">
              See all doctors
            </Link>
          </div>
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className='bg-gray-100 h-[420px] text-black rounded-lg shadow-md mx-2'>
                <div className='h-48 rounded-t-lg bg-white flex justify-center items-center'>
                  <img src={d.img} alt={d.name} className='h-32 w-32 rounded-full object-cover border-4 border-indigo-600' />
                </div>
                <div className='flex flex-col justify-center items-center gap-2 p-4'>
                  <p className='font-semibold text-xl text-gray-900'>{d.name}</p>
                  <p className='text-center text-gray-700'>{d.speciality}</p>
                  <div className='flex'>
                    {[...Array(5)].map((star, i) => (
                      <FaStar key={i} color={i < d.review ? "#ffc107" : "#e4e5e9"} />
                    ))}
                  </div>
                  <p className='text-center text-gray-700'>Next Available: {d.nextAvailable}</p>
                  <p className='text-center text-gray-700'>Location: {d.location}</p>
                  <Link to="/appointment" className='mt-2 mb-8 w-full flex justify-center'>
                    <button className='bg-green-600 text-white text-lg px-6 py-2 rounded-lg hover:bg-green-700'>
                      View Details
                    </button>
                  </Link>
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
