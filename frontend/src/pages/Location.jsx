import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
import axios from 'axios';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCop907MWCUKmF0NpNL61i4GubOrQT3u10';
const GEOLOCATION_API_URL = 'https://ipapi.co/json/';

const Location = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState('');
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    // Fetch user location based on IP address
    const fetchUserLocation = async () => {
      try {
        const response = await axios.get(GEOLOCATION_API_URL);
        const { latitude, longitude } = response.data;
        setUserLocation({ lat: latitude, lng: longitude });
      } catch (error) {
        console.error('Error fetching user location:', error);
      }
    };

    fetchUserLocation();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const place = event.target.elements.place.value;
    const userPlace = event.target.elements.userPlace.value;

    if (place && userPlace) {
      try {
        const userResponse = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(userPlace)}&key=${GOOGLE_MAPS_API_KEY}`
        );
        const userLocation = userResponse.data.results[0].geometry.location;
        setUserLocation(userLocation);

        const destinationResponse = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(place)}&key=${GOOGLE_MAPS_API_KEY}`
        );
        const destinationLocation = destinationResponse.data.results[0].geometry.location;
        setDestination(destinationLocation);

        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
          {
            origin: userLocation,
            destination: destinationLocation,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === 'OK') {
              setDirections(result);
              setDistance(result.routes[0].legs[0].distance.text);
            } else {
              console.error('Error fetching directions:', status);
            }
          }
        );
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    }
  };

  return (
    <div>
      <h1>Google Maps Distance and Route</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="userPlace" placeholder="Enter your location" required />
        <input type="text" name="place" placeholder="Enter destination" required />
        <button type="submit">Search</button>
      </form>
      <div>
        {distance && <p>Distance to your destination: {distance}</p>}
      </div>
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={userLocation || { lat: 0, lng: 0 }}
          zoom={userLocation ? 10 : 2}
          onLoad={(map) => setMap(map)}
        >
          {userLocation && <Marker position={userLocation} />}
          {destination && <Marker position={destination} />}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Location;