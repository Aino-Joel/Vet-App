import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { BiLeftArrow } from 'react-icons/bi';

const reviews = [
  {
    id: 1,
    name: "Mugabi Joseph",
    rating: 5,
    time: "A day ago",
    comment: "Magna id sint irure in cillum esse nisi dolor laboris ullamco...",
  },
  {
    id: 2,
    name: "Jane Doe",
    rating: 4,
    time: "2 days ago",
    comment: "Magna id sint irure in cillum esse nisi dolor laboris ullamco...",
  },
];

const dates = ["17 Mon", "18 Tue", "19 Wed", "20 Thu", "21 Fri"];
const times = ["8:00", "10:30", "13:00", "14:30", "15:00", "16:30"];

const DoctorProfile = () => (
  <div className="min-h-screen bg-gray-100 p-4">
    <div className="max-w-lg mx-auto">
      <div className="flex items-center mb-4">
        <BiLeftArrow className="text-2xl cursor-pointer" />
        <h1 className="text-2xl font-bold ml-2">Doctor's profile</h1>
      </div>
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full"></div>
            <div className="ml-4">
              <h2 className="font-bold text-lg">Dr. Cosmas Kijjo</h2>
              <p className="text-gray-600">Castration and Deliverance</p>
            </div>
          </div>
          <div>
            <p className="text-gray-600">RATING</p>
            <div className="flex items-center">
              <FaStar className="text-yellow-500" />
              <span className="ml-1">4.5</span>
            </div>
          </div>
          <div>
            <p className="text-gray-600">PATIENTS</p>
            <span className="font-bold">1000+</span>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">About</h3>
          <p className="text-gray-600">
            Cillum laboris sunt nostrud cillum minim amet magna. Non duis voluptate elit amet mollit...
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold flex justify-between items-center">
            Reviews <span className="text-blue-500 text-sm cursor-pointer">See all</span>
          </h3>
          {reviews.map(review => (
            <div key={review.id} className="bg-gray-100 p-2 rounded-lg mb-2">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">{review.name}</span>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-sm" />
                  ))}
                </div>
              </div>
              <div className="text-gray-600 text-sm mb-1">{review.time}</div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Veterinary Clinic</h3>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            <span>Rahma Veterinary Services, Bakuuli Street, Matugga</span>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Choose date</h3>
          <div className="flex space-x-2">
            {dates.map(date => (
              <div key={date} className="bg-blue-100 text-blue-600 p-2 rounded-lg cursor-pointer">{date}</div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Choose time</h3>
          <div className="flex space-x-2">
            {times.map(time => (
              <div key={time} className="bg-gray-100 text-gray-600 p-2 rounded-lg cursor-pointer">{time}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen">
      <DoctorProfile />
    </div>
  );
};

export default DoctorProfile;
