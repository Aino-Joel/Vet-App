

// DoctorSelection.jsx
import React, { useState } from 'react';


const doctorsData = [
  { id: 1, name: 'Dr. Jauhara Kiti', specialty: 'General Veterinary', image: 'doctor3.jpeg', rating: 4.5, nextAvailable: 'June 10, 2024',location: 'Wakiso' },
  { id: 2, name: 'Dr. Joshua Magero', specialty: 'Castration and Delivery', image: 'doctor2.jpeg', rating: 4.7, nextAvailable: 'June 12, 2024',location: 'Kampala' },
  { id: 3, name: 'Dr. Kijjo Cosmas', specialty: 'Nutrition', image: 'doctor1.png', rating: 4.6, nextAvailable: 'June 11, 2024',location: 'Wakiso' },
  { id: 4, name: 'Dr. Nabukenya Rehemah', specialty: 'Artificial Insemination', image: 'doctor3.jpeg', rating: 4.8, nextAvailable: 'June 15, 2024',location: 'Kampala' },
  { id: 5, name: 'Dr. Sarah Davis', specialty: 'veterinary Surgery', image: 'doctor3.jpeg', rating: 4.9, nextAvailable: 'June 13, 2024',location: 'Wakiso' },
  { id: 6, name: 'Dr. Aino Joel', specialty: 'Poultry Vet', image: 'doctor2.jpeg', rating: 4.3, nextAvailable: 'June 14, 2024',location: 'Wakiso'},
  { id: 7, name: 'Dr. Olivia Clark', specialty: 'General Veterinary', image: 'doctor3.jpeg', rating: 4.2, nextAvailable: 'June 16, 2024',location: 'Wakiso' },
  // Add more doctors as needed
];

const DoctorSelection = ({ onSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllDoctors, setShowAllDoctors] = useState(false);

  const filteredDoctors = doctorsData.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.location.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  const handleSelectDoctor = (doctor) => {
    onSelect(doctor);
  };

  const toggleShowDoctors = () => {
    setShowAllDoctors(prevState => !prevState);
  };

  return (
    <div className="doctor-selection-container">
      <h1>Choose Your Doctor</h1>
      <div className="search-bar">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search by name or specialty"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="doctor-list">
        {filteredDoctors.slice(0, showAllDoctors ? filteredDoctors.length : 3).map(doctor => (
          <div key={doctor.id} className="doctor-card" onClick={() => handleSelectDoctor(doctor)}>
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="doctor-info">
              <h2>{doctor.name}</h2>
              <p>{doctor.specialty}</p>
              <div className="doctor-rating">
                <span className="star">&#9733;</span> {doctor.rating}
              </div>
              <p className="next-available">Next available: {doctor.nextAvailable}</p>
              <p className="next-available">Location: {doctor.location}</p>

</div>
          </div>
        ))}
      </div>
      {filteredDoctors.length > 3 && (
        <div className="show-more-less">
          {showAllDoctors ? (
            <button onClick={toggleShowDoctors}>Show Less</button>
          ) : (
            <button onClick={toggleShowDoctors}>Show More</button>
          )}
        </div>
      )} 
    </div>
  );
};

export default DoctorSelection;
