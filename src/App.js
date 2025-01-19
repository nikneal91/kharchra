import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="flex items-center justify-center h-screen">
    <div class="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full transform transition-all duration-500 hover:scale-105">
    <h1 class="text-2xl font-bold text-center text-green-700 mb-4 animate-pulse">🎉 Best Waste Management App is Coming! 🎉</h1>
    <p class="text-gray-700 text-center mb-6">
      Stay tuned for an announcement that will change everything. Don't miss out on the big reveal!
    </p>
    <div class="text-center">
      <button class="bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-800 focus:ring focus:ring-purple-300">
        Notify Me
      </button>
    </div>
  </div>
  </div>
  );
}

export default App;
