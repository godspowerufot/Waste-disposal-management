import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiZ29kc3Bvd2VyMTIzIiwiYSI6ImNsbGMyc21tbzBkajczY2xobG56MGJwbGUifQ.xORi7KZ45D-vFdrtHDcvpw';

function MapDirection({ destinationLocation }) {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Check for WebGL support
    if (!mapboxgl.supported()) {
      console.error("WebGL not supported, or initialization failed");
      return;
    }

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [currentLocation?.longitude || 1, currentLocation?.latitude || 4.35],
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([destinationLocation.longitude, destinationLocation.latitude]).addTo(map);

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    const intervalId = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    }, 5000);

    return () => {
      map.remove();
      clearInterval(intervalId);
    };
  }, [currentLocation, destinationLocation]);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default MapDirection;
