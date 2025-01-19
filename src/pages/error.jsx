import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="w-48 h-48 mx-auto">
          <img
            src="https://via.placeholder.com/150?text=🚧"
            alt="Under Construction"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Page Under Construction
        </h1>
        <p className="mt-4 text-gray-600">
          We’re working hard to bring this page to life. Stay tuned!
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
