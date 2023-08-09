import axios from "axios";
import React, { useState } from "react";

const apiKey = "5b3ce3597851110001cf624838e4af90bbd94813ad0d19c0f1e9f262"; // Replace with your actual API key

function Geo() {
  const [address1, setAddress1] = useState("");
  const [coordinates1, setCoordinates1] = useState(null);
  const [address2, setAddress2] = useState("");
  const [coordinates2, setCoordinates2] = useState(null);
  const [directions, setDirections] = useState(null);

  const handleGeocode1 = () => {
    const apiUrl = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${address1}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const firstResult = response.data.features[0];
        if (
          firstResult &&
          firstResult.geometry &&
          firstResult.geometry.coordinates
        ) {
          const [longitude, latitude] = firstResult.geometry.coordinates;
          setCoordinates1({ latitude, longitude });
        } else {
          setCoordinates1(null);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setCoordinates1(null);
      });
  };

  const handleGeocode2 = () => {
    const apiUrl = `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${address2}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const firstResult = response.data.features[0];
        if (
          firstResult &&
          firstResult.geometry &&
          firstResult.geometry.coordinates
        ) {
          const [longitude, latitude] = firstResult.geometry.coordinates;
          setCoordinates2({ latitude, longitude });
        } else {
          setCoordinates2(null);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setCoordinates2(null);
      });
  };

  console.log(`${coordinates1.longitude}`);

  const calculateDirections = () => {
    if (coordinates1 && coordinates2) {
      const apiUrl = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${coordinates1.longitude},${coordinates1.latitude}&end=${coordinates2.longitude},${coordinates2.latitude}`;

      axios
        .get(apiUrl)
        .then((response) => {
          setDirections(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={address1}
        onChange={(e) => setAddress1(e.target.value)}
      />
      <button onClick={handleGeocode1}>Geocode 1</button>

      <input
        type="text"
        value={address2}
        onChange={(e) => setAddress2(e.target.value)}
      />
      <button onClick={handleGeocode2}>Geocode 2</button>

      {directions && (
        <div>
          <h2>Directions:</h2>
          <p>Distance: {directions.routes[0].summary.distance} meters</p>
          <p>Duration: {directions.routes[0].summary.duration} seconds</p>
          {/* You can display more information here */}
        </div>
      )}

      <button onClick={calculateDirections}>Calculate Directions</button>
    </div>
  );
}

export default Geo;
