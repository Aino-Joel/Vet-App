import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const clinics = [
  {
    name: 'Uganda Veterinary Clinic',
    address: 'Plot 23, Kira Road, Kampala',
    phone: '+256 414 253 187',
    services: 'General Checkups, Vaccinations, Surgery, Emergency Care',
    position: { lat: 0.3365, lng: 32.5919 },
  },
  {
    name: 'Vetpal Animal Clinic & Pet Travels',
    address: 'Mawanda Road',
    phone: '0200925843',
    services: 'Small Animal Care, Animal Hospital, Laboratory Services',
    position: { lat: 0.3476, lng: 32.5888 },
  },
  {
    name: 'Uganda Veterinary Association small Animals Clinic',
    address: 'Buganda Rd, Kampala',
    phone: '0772 505568',
    services: 'General Checkups, Surgery, Vaccinations, Pet Grooming, Animal Pharmacy',
    position: { lat: 0.3174, lng: 32.5825 },
  },
  {
    name: 'Superior Animal Clinic',
    address: 'Salaama Rd, Kampala',
    phone: '0771 909946',
    services: 'Large Animal Care, Farm Visits, Reproductive Services',
    position: { lat: 0.2843, lng: 32.5822 },
  },
  {
    name: 'Small Animal Hospital Makerere University',
    address: 'Living Stone Rd, Kampala',
    phone: '039 3194471',
    services: 'General Checkups, Vaccinations, Emergency Care, Surgery',
    position: { lat: 0.3320, lng: 32.5763 },
  },
  {
    name: 'Rafiki Veterinary Clinic',
    address: 'Serubiri Rd, Kampala',
    phone: '0779 853055',
    services: 'General Checkups, Vaccinations, Surgery, Emergency Care',
    position: { lat: 0.3472, lng: 32.5735 },
  },
  {
    name: 'Amans Vet Surgery',
    address: 'Kisementi, Plot # 1 Bukoto St, Kampala',
    phone: '0700 852686',
    services: 'Small Animal Care, Dental Services, Laboratory Services',
    position: { lat: 0.3377, lng: 32.5936 },
  },
  {
    name: 'Veterinary Clinic Uganda',
    address: 'Plot 10, Acacia Avenue, Kololo, Kampala',
    phone: '0701 985139',
    services: 'General Checkups, Surgery, Vaccinations, Pet Grooming',
    position: { lat: 0.3316, lng: 32.5966 },
  },
  {
    name: 'Kiram Veterinary Surgery & Pet travels',
    address: 'Sir Jose Hotel, Ggaba Road, Kampala',
    phone: '0771 605442',
    services: 'Large Animal Care, Farm Visits, Reproductive Services',
    position: { lat: 0.2874, lng: 32.6175 },
  },
  {
    name: 'Dr. Kazibwe Henry Superior animal clinic',
    address: 'Bombo Rd, Matugga',
    phone: '0706 621564',
    services: 'General Checkups, Vaccinations, Emergency Care, Surgery',
    position: { lat: 0.4505, lng: 32.5403 },
  },
  {
    name: 'Kampala Veterinary Surgery',
    address: 'Plot 1249 / P.O Box 37111, Kampala',
    phone: '0774 424293',
    services: 'General Checkups, Emergency Care, Vaccinations',
    position: { lat: 0.3158, lng: 32.5863 },
  },
  {
    name: 'Makindye Veterinary Centre',
    address: 'Plot 45, Salaama Road, Kampala',
    phone: '+256 414 267 890',
    services: 'Small Animal Care, Surgery, Dental Services',
    position: { lat: 0.2843, lng: 32.5918 },
  },
  {
    name: 'Veterinary Clinic Uganda',
    address: '5GMQ+WGW, Kampala',
    phone: '0773 590373',
    services: 'General Checkups, Vaccinations, Laboratory Services',
    position: { lat: 0.3142, lng: 32.6098 },
  },
  {
    name: 'Twiga Veterinary Clinic Entebbe',
    address: '2 Busambaga Rd, Entebbe',
    phone: '0774 569180',
    services: 'Large Animal Care, Farm Visits, Reproductive Services',
    position: { lat: 0.0649, lng: 32.4697 },
  },
  {
    name: 'CHOICE VETS CARE',
    address: 'Arivu Ward, Ayivu Division, Baliova Cell, Arua',
    phone: '0774 332856',
    services: 'General Checkups, Surgery, Vaccinations',
    position: { lat: 3.0191, lng: 30.9163 },
  },
  {
    name: 'Vetlit Mobile Veterinary Services',
    address: 'Plot 23, High Street, Mbarara',
    phone: '0758 790589',
    services: 'General Checkups, Emergency Care, Vaccinations',
    position: { lat: -0.6072, lng: 30.6536 },
  },
  {
    name: 'Bam Animal Clinics',
    address: 'Mutale Ndazula Road, Iganga',
    phone: '0772 487712',
    services: 'Large Animal Care, Surgery, Vaccinations',
    position: { lat: 0.6139, lng: 33.4689 },
  },
];


const Vetclinic = () => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Veterinary Clinics in Uganda</h1>
 
      <div className="space-y-8">
        {clinics.map((clinic, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-xl font-semibold mb-2">{clinic.name}</h2>
              <p><strong>Address:</strong> {clinic.address}</p>
              <p><strong>Phone:</strong> {clinic.phone}</p>
              <p><strong>Services:</strong> {clinic.services}</p>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${clinic.position.lat},${clinic.position.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Get Directions
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vetclinic;
