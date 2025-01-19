import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import { FaTrashAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { useState,useEffect } from "react";

// Import GeoJSON data
import geoJsonData from "../data/geojsondata";

// Fix default Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom React Marker Icon
const createCustomIcon = (iconElement) => {
  return L.divIcon({
    html: iconElement,
    className: "custom-div-icon",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};

const ReactIconMap = () => {
    const [greenCount, setGreenCount] = useState(0);
    const [redCount, setRedCount] = useState(0);

    useEffect(() => {
        // Count the initial number of green and red statuses from the GeoJSON data
        let green = 0;
        let red = 0;
        
        geoJsonData.features.forEach((feature) => {
          if (feature.properties.status === 'green') {
            green += 1;
          } else if (feature.properties.status === 'red') {
            red += 1;
          }
        });
        setGreenCount(green);
        setRedCount(red);
      }, []);

    return (
    <div className="relative h-screen z-0">
    <div className="flex space-x-4">
        {/* Green Dustbin Card */}
        <div className="w-1/2 bg-green-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-green-700">Unfilled Dustbins</h3>
          <div className="text-3xl font-bold text-green-600">{greenCount}</div>
        </div>

        {/* Red Dustbin Card */}
        <div className="w-1/2 bg-red-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-red-700">Filled Dustbins</h3>
          <div className="text-3xl font-bold text-red-600">{redCount}</div>
        </div>
      </div>
        <MapContainer
            center={[26.8467, 80.9462]} // Centered on Lucknow, UP
            zoom={7}
            style={{ height: "calc(100vh - 164px)", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {geoJsonData.features.map((feature, index) => {
                return (
                    <Marker
                        key={index}
                        position={[
                            feature.geometry.coordinates[1],
                            feature.geometry.coordinates[0],
                        ]}
                        icon={createCustomIcon(
                            ReactDOMServer.renderToString(
                                <FaTrashAlt
                                    className={
                                        feature.properties.status === "green"
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }
                                />
                            )
                        )}
                    >
                        <Popup>
                            <b>{feature.properties.description}</b>
                            {feature.properties.status && (
                                <div>Status: {feature.properties.status}</div>
                            )}
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    </div>
);
};

export default ReactIconMap;
