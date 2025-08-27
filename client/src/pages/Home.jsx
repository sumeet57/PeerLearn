import React, { useState, useEffect } from "react";

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-indigo-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.253v11.494m0 0a7.5 7.5 0 007.5-7.5H4.5a7.5 7.5 0 007.5 7.5z"
    />
  </svg>
);

const Home = () => {
  const [userName, setUserName] = useState("User");
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        // Replace '/api/user-dashboard' with your actual API endpoint.
        // The following is a simulation of a network request.
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // In a real app, you would do:
        // const response = await fetch('/api/user-dashboard');
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // const data = await response.json();

        const mockApiResponse = {
          userName: "Alex",
          classes: [
            { id: "cl-math-101", name: "Algebra II", subject: "Mathematics" },
            { id: "cl-sci-203", name: "AP Biology", subject: "Science" },
            {
              id: "cl-eng-301",
              name: "British Literature",
              subject: "English",
            },
            { id: "cl-hist-102", name: "World History", subject: "History" },
            {
              id: "cl-cs-404",
              name: "Intro to Python",
              subject: "Computer Science",
            },
            { id: "cl-art-100", name: "Art History", subject: "Arts" },
          ],
        };

        setUserName(mockApiResponse.userName);
        setClasses(mockApiResponse.classes);
        setError(null);
      } catch (err) {
        setError(
          "Sorry, we couldn't load your classes. Please try again later."
        );
        console.error("Failed to fetch classes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClassData();
  }, []);

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    if (currentHour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const renderClassContent = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 animate-pulse"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 h-16 w-16 rounded-lg"></div>
                <div className="flex-1 space-y-3">
                  <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                  <div className="bg-gray-200 h-3 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
          role="alert"
        >
          <strong className="font-bold">Oh no! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      );
    }

    if (classes.length === 0) {
      return (
        <div className="text-center py-10 px-6 bg-white rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold text-gray-800">
            No classes found
          </h3>
          <p className="text-gray-500 mt-2">
            Get started by creating your first class!
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <a
            key={classItem.id}
            href={`/class/${classItem.id}`}
            onClick={(e) => e.preventDefault()}
            className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <BookIcon />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-800 truncate group-hover:text-indigo-600 transition-colors">
                  {classItem.name}
                </h3>
                <p className="text-sm text-gray-500">{classItem.subject}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            {getGreeting()}, {userName}!
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Welcome back, let's get your day started.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-2xl shadow-md border border-gray-200 mb-10">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Classes</p>
              <p className="text-3xl font-bold text-gray-900">
                {loading ? "..." : classes.length}
              </p>
            </div>
          </div>
          <button className="w-full md:w-auto flex items-center justify-center bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform transform hover:scale-105">
            <PlusIcon />
            Create New Class
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Your Classes
          </h2>
          {renderClassContent()}
        </div>
      </div>
    </div>
  );
};

export default Home;
