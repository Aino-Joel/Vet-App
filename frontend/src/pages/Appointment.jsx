import React from 'react';
import { Rating } from 'flowbite-react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Appointment() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Doctor's Profile</h1>

      <div className="flex flex-col sm:flex-row justify-center items-center p-8 rounded-lg shadow-md">
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Dr Cosmas Kijjo" className="w-24 h-24 rounded-full object-cover" />
        <div className="flex flex-col justify-center ml-6 mt-4 sm:mt-0">
          <div className="mb-4 text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">Dr. Cosmas Kijjo</h2>
            <h6 className="text-sm font-bold text-gray-700">Artificial Insemination</h6>
          </div>
          <div className="flex space-x-16 justify-center sm:justify-start">
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-2xl font-bold text-green-600">RATING</h1>
              <h3 className="text-lg font-medium text-gray-800">4.5</h3>
              <div className="flex">
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                </Rating>
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-2xl font-bold text-green-600">PATIENTS</h1>
              <h2 className="text-lg font-medium text-gray-800">1000 +</h2>
              <div className="flex space-x-1 text-green-600">
                <FaUser /><FaUser /><FaUser />
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start mt-4">
            <Link to="/booking">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition duration-200">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-lg shadow-md max-w-4xl mx-auto mt-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">About</h2>
        <h4 className="text-sm font-medium text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam optio ratione, et dolorum unde voluptate, id laboriosam eum ex nulla officiis error est laborum voluptatibus qui laudantium. Reprehenderit, laborum voluptate.
        </h4>
      </div>

      <section id='testimonials' className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-left text-2xl font-bold mb-8 ml-10">Reviews</h1>
          <a href="#reviews" className="text-indigo-500 text-lg font-medium text-sm underline">See all reviews</a>
        </div>

        <div className="testimonial-box-container flex flex-wrap justify-between">
          <div className="testimonial-box w-full sm:w-1/2 lg:w-1/3 p-4 bg-white rounded shadow-md mb-4">
            <div className="box-top flex items-center justify-between">
              <div className="profile flex items-center">
                <div className="profile-img mr-4">
                  <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='profile' className="w-12 h-12 rounded-full" />
                </div>
                <div className="name-user">
                  <strong>rehemah</strong>
                  <span className="block text-gray-500">@remmy</span>
                </div>
              </div>
              <div className="reviews">
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                </Rating>
              </div>
            </div>
            <div className="comments mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates sunt ad dolorum optio error adipisci dicta minima, libero dolor, aspernatur architecto perferendis id. Laudantium omnis dolor unde odio cum?</p>
            </div>
          </div>

          <div className="testimonial-box w-full sm:w-1/2 lg:w-1/3 p-4 bg-white rounded shadow-md mb-4">
            <div className="box-top flex items-center justify-between">
              <div className="profile flex items-center">
                <div className="profile-img mr-4">
                  <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='profile' className="w-12 h-12 rounded-full" />
                </div>
                <div className="name-user">
                  <strong>rehemah</strong>
                  <span className="block text-gray-500">@remmy</span>
                </div>
              </div>
              <div className="reviews">
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                </Rating>
              </div>
            </div>
            <div className="comments mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates sunt ad dolorum optio error adipisci dicta minima, libero dolor, aspernatur architecto perferendis id. Laudantium omnis dolor unde odio cum?</p>
            </div>
          </div>

          <div className="testimonial-box w-full sm:w-1/2 lg:w-1/3 p-4 bg-white rounded shadow-md mb-4">
            <div className="box-top flex items-center justify-between">
              <div className="profile flex items-center">
                <div className="profile-img mr-4">
                  <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='profile' className="w-12 h-12 rounded-full" />
                </div>
                <div className="name-user">
                  <strong>rehemah</strong>
                  <span className="block text-gray-500">@remmy</span>
                </div>
              </div>
              <div className="reviews">
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                </Rating>
              </div>
            </div>
            <div className="comments mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates sunt ad dolorum optio error adipisci dicta minima, libero dolor, aspernatur architecto perferendis id. Laudantium omnis dolor unde odio cum?</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Appointment;
