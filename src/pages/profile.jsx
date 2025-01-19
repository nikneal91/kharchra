import React from 'react';
import { FaTruck, FaHistory, FaExclamationTriangle, FaTrash, FaCommentDots, FaLightbulb, FaUserCircle } from "react-icons/fa";


const Profile = () => {
    const userActions = [
        {
          name: "Garbage Pickup History",
          icon: <FaHistory className="text-blue-500 text-2xl" />,
          link: "/pickup-history",
        },
        {
          name: "Request Special Pickup",
          icon: <FaTruck className="text-green-500 text-2xl" />,
          link: "/special-pickup",
        },
        {
          name: "Report Missing Pickup",
          icon: <FaExclamationTriangle className="text-red-500 text-2xl" />,
          link: "/missing-pickup",
        },
        {
          name: "Report Bin Overflow",
          icon: <FaTrash className="text-orange-500 text-2xl" />,
          link: "/bin-overflow",
        },
        {
          name: "Raise a Concern",
          icon: <FaCommentDots className="text-purple-500 text-2xl" />,
          link: "/raise-concern",
        },
        {
          name: "Suggestion",
          icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
          link: "/suggestion",
        },
      ];
    
      return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
          {/* User Profile Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
            <div className="flex flex-col items-center">
              <div className="text-green-500"><FaUserCircle  className="text-6xl" /></div>
              <h1 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h1>
              <p className="text-gray-500">johndoe@example.com</p>
            </div>
          </div>
    
          {/* User Actions Section */}
          <div className="mt-8 bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">What would you like to do?</h2>
            <div className="grid grid-cols-2 gap-4">
          {userActions.map((action, index) => (
            <a
              key={index}
              href={action.link}
              className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition"
            >
              {action.icon}
              <span className="text-gray-700 font-medium">{action.name}</span>
            </a>
          ))}
        </div>
          </div>
        </div>
        );
};

export default Profile;