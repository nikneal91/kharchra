import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate("/kharchra/login"); // Navigate to the About page
    };

    return (<>
        <div class="flex items-center justify-center h-screen bg-green-500">
    <div class="bg-green-200 shadow-2xl rounded-lg p-8 max-w-md w-full transform transition-all duration-500 hover:scale-105">
    <h1 class="text-2xl font-bold text-center text-black-700 mb-4 animate-pulse">🎉 Vedrant Green 🎉</h1>
    <p class="text-gray-700 text-center mb-6">
      Together we act, to create impact
    </p>
    <p class="text-gray-900 text-center mb-6">
      Effortless Garbage Collection for cleaner communities and a greener furture8    </p>
    <div class="text-center">
      <button  onClick={handleNavigate}
      class="bg-green-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-800 focus:ring focus:ring-green-300">
        Get Started
      </button>
    </div>
  </div>
  </div>
  </>
    );
};

export default Home;