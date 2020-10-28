import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import Card from '../card/Card';

const Layout = () => {
  const [location, setLocation] = useState({ location: '' });

  useEffect(() => {
    const getCurrentGeoLocation = async () => {
      await navigator.geolocation.getCurrentPosition(
        successfulLocationLookup,
        unsuccessfulLocationLookup
      );
    };
    getCurrentGeoLocation();
  }, []);

  const successfulLocationLookup = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

    Geocode.setApiKey(API_KEY);
    Geocode.fromLatLng(latitude, longitude).then(
      (response) => {
        const address = response.results[0].formatted_address;
        const city = address.split(',')[1];
        setLocation(city);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const unsuccessfulLocationLookup = () => {
    alert('Cannot detect the current geolocation');
  };

  return (
    <div style={{ margin: '100px 100px' }}>
      <Card location={location}></Card>
    </div>
  );
};

export default Layout;
