import React from 'react';

const farms = [
  {
    name: "Kawanda Agricultural Research Institute",
    description: "Kawanda Agricultural Research Institute (KARI) is a leading agricultural research center in Uganda, focusing on crop breeding, soil testing, and farmer training programs. It aims to develop improved crop varieties, enhance soil health, and educate farmers on modern agricultural practices.",
    services: [
      {
        name: "Crop breeding",
        imageUrl: "https://source.unsplash.com/6itWvCTbQps/1600x900",
        description: "Researching and developing improved crop varieties."
      },
      {
        name: "Soil testing",
        imageUrl: "https://source.unsplash.com/E8jrkjDeI2E/1600x900",
        description: "Conducting soil tests to optimize agricultural productivity."
      },
      {
        name: "Farmer training programs",
        imageUrl: "https://source.unsplash.com/KNwZ3Blw1jk/1600x900",
        description: "Educating farmers on modern agricultural practices."
      },
    ],
    hours: "Monday to Friday, 9am - 5pm",
  },
  {
    name: "NARO Nakyesasa",
    description: "The National Agricultural Research Organization (NARO) Nakyesasa is dedicated to livestock research, animal health services, and demonstrating effective agricultural techniques through its various demonstration plots. It serves as a hub for advancing livestock productivity and improving animal welfare.",
    services: [
      {
        name: "Livestock research",
        imageUrl: "https://source.unsplash.com/yjZBxJotRSU/1600x900",
        description: "Advancing research in livestock productivity."
      },
      {
        name: "Animal health services",
        imageUrl: "https://source.unsplash.com/TybgzhkPg2E/1600x900",
        description: "Providing veterinary care and health services."
      },
      {
        name: "Demonstration plots",
        imageUrl: "https://source.unsplash.com/S3_JCe4Pl9g/1600x900",
        description: "Displaying effective agricultural techniques."
      },
    ],
    hours: "Monday to Saturday, 8am - 4pm",
  },
  {
    name: "Mbarara Zonal Agricultural Research and Development Institute",
    description: "Mbarara Zonal Agricultural Research and Development Institute focuses on dairy farming, pasture management, and operates farmer field schools. It aims to promote sustainable dairy production, improve pasture quality, and provide practical training to local farmers.",
    services: [
      {
        name: "Dairy farming",
        imageUrl: "https://source.unsplash.com/N6f1IsnxG2g/1600x900",
        description: "Promoting sustainable dairy production."
      },
      {
        name: "Pasture management",
        imageUrl: "https://source.unsplash.com/pzswHfSXzLk/1600x900",
        description: "Managing and improving pasture quality."
      },
      {
        name: "Farmer field schools",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBx1AoggwXndrDxWMvFyHwL_qSqhf-g9lCKQ&s",
        description: "Training farmers in modern agricultural practices."
      },
    ],
    hours: "Monday to Friday, 10am - 6pm",
  },
  {
    name: "KCCA Farm, Kyanja",
    description: "The KCCA Farm in Kyanja serves as a demonstration farm showcasing urban agriculture techniques and promoting sustainable food production within the city. It focuses on community engagement, organic farming practices, and educational programs.",
    services: [
      {
        name: "Urban agriculture",
        imageUrl: "https://source.unsplash.com/F5B5iFZpD4M/1600x900",
        description: "Promoting agriculture in urban settings."
      },
      {
        name: "Community engagement",
        imageUrl: "https://source.unsplash.com/gTz0Zk8DCfM/1600x900",
        description: "Involving local community in farming activities."
      },
      {
        name: "Organic farming",
        imageUrl: "https://source.unsplash.com/xG6Dj0D1Q3g/1600x900",
        description: "Practicing organic farming techniques."
      },
    ],
    hours: "Monday to Friday, 9am - 4pm",
  },
  // Add more farms as needed
];

const FarmVisit = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
       <h1 className="text-4xl font-bold text-center mb-8">Farm Visits to Demonstration Farms</h1>
      
      <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Demonstration Farms in Uganda</h2>
        <p className="text-lg mb-4">
        Farm visits are carried out on different demonstration farms around Uganda in different areas. Demonstration farms were created to serve different purposes and a few of them include:- Demonstration farms serve as practical training grounds for farmers, showcasing best practices, innovative techniques, and new technologies in agriculture.Practical activities such as planting, irrigation and many others. 
          
          Demonstration farms play a crucial role in agricultural research and development in Uganda. They serve as centers for testing and showcasing innovative agricultural practices, educating farmers, and advancing crop and livestock productivity. Each demonstration farm focuses on specific areas such as crop breeding, soil health, livestock research, and sustainable farming techniques.
        </p>
      </div>

     
      {farms.map((farm, index) => (
        <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">{farm.name}</h2>
          <p className="text-lg mb-4">{farm.description}</p>
          
          <h2 className="text-2xl font-semibold mb-4">Activities at the Farm</h2>
          <div className="grid grid-cols-3 gap-8">
            {farm.services.map((service, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img className="mb-2 rounded-lg shadow-lg" src={service.imageUrl} alt={service.name} />
                <h3 className="text-xl font-medium mb-2">{service.name}</h3>
                <p className="text-lg text-center">{service.description}</p>
              </div>
            ))}
          </div>
          
          <h3 className="text-xl font-medium mt-4 mb-2">Visiting Hours:</h3>
          <p className="text-lg">{farm.hours}</p>
        </div>
      ))}
    </div>
  );
};

export default FarmVisit;
