import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { FaUserCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,FaClock,FaCheckCircle,FaTasks } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';

const TrackingPage = () => {
  const [location, setLocation] = useState(null);
  const [user, setUser] = useState({
    name: 'John Doe',
    status: 'Active',
    jobType: 'Pickup Bin',
  });

  useEffect(() => {
    // Function to get user's current location
    const geoSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation([latitude, longitude]);
    };

    const geoError = (error) => {
      console.log('Error getting location:', error);
    };

    // Request user's geolocation
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(geoSuccess, geoError, {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000,
      });
    }

    // Set default user details (can be replaced with an API call)
    setUser({
      name: 'John Doe',
      status: 'Active',
      jobType: 'Pickup Bin',
      email: 'johndoe@example.com',
      phone: '+1234567890',
      lastSeen: '2025-01-19 12:00 PM',
      currentTask: 'Collecting waste from Sector 5'
    });
  }, []);

  const UserCard = ({ title, value, icon }) => (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full">
      <div className="flex items-center space-x-3">
        <div className="text-green-500">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{value}</p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div className="w-full h-[400px]">
        {location ? (
          <MapContainer center={location} zoom={14} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={location}>
              <Popup>
                <b>{user.name}</b><br />
                {user.status}<br />
                {user.jobType}
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <p>Loading location...</p>
        )}
      </div>

      {/* User Info Card */}
       {/* User Info Cards */}
       <div className="grid sm:grid-cols-3 md:grid-cols-4  gap-1 w-full">
        <UserCard title="Name" value={user.name} icon={<FaUserCircle className="text-4xl" />} />
        <UserCard title="Email" value={user.email} icon={<FaEnvelope className="text-4xl" />} />
        <UserCard title="Phone" value={user.phone} icon={<FaPhoneAlt className="text-4xl" />} />
        <UserCard title="Location" value={`Lat: ${user.latitude}, Lon: ${user.longitude}`} icon={<FaMapMarkerAlt className="text-4xl" />} />
        <UserCard title="Status" value={user.status} icon={<FaCheckCircle className="text-4xl" />} />
        <UserCard title="Job Type" value={user.jobType} icon={<FaCheckCircle className="text-4xl" />} />
        <UserCard title="Last Seen" value={user.lastSeen} icon={<FaClock className="text-4xl" />} />
        <UserCard title="Current Task" value={user.currentTask} icon={<FaTasks className="text-4xl" />} />
      </div>
    </div>
  );
};

export default TrackingPage;
