import { useState, useEffect } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
// import Layout from "./layout/Layout";
import { useLocation } from "react-router-dom";

const Landing = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div>
      (
      <>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
      </>
      )
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-white text-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
          The Future of Collaborative Learning is Here
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          A powerful, scalable platform for Admins, Teachers, and Students to
          connect, learn, and grow together.
        </p>
        <button className="mt-8 bg-indigo-600 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
          Get Started for Free
        </button>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      title: "Multi-Role Collaboration",
      description:
        "Admins, Teachers, and Students work together seamlessly within a unified classroom ecosystem.",
      icon: "👥",
    },
    {
      title: "Dynamic Class Structure",
      description:
        "Create or join classes with unique profiles and roles. Be an Admin in one class and a Student in another.",
      icon: "🏫",
    },
    {
      title: "Comprehensive Subject Management",
      description:
        "Manage assignments, quizzes, and notes effortlessly. Keep your learning materials organized.",
      icon: "📚",
    },
    {
      title: "Real-Time Interaction",
      description:
        "Engage in real-time discussions with WebSockets-powered chat, announcements, and feedback polls.",
      icon: "💬",
    },
    {
      title: "Scalable & Robust",
      description:
        "Built with the MERN stack, Redis, and message queues to handle growing user bases with ease.",
      icon: "🚀",
    },
    {
      title: "Engaging & Interactive",
      description:
        "Use emoji reactions for quick feedback and participate in polls to make your voice heard.",
      icon: "😊",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-12">
          Why Choose LearnSphere?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section Component
const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-12">
          Get Started in 3 Simple Steps
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="text-center">
            <div className="bg-indigo-100 text-indigo-600 rounded-full h-24 w-24 flex items-center justify-center mx-auto text-4xl font-bold">
              1
            </div>
            <h4 className="text-xl font-semibold mt-4">
              Create or Join a Class
            </h4>
            <p className="text-gray-600 mt-2">
              Sign up and either create a new class as an Admin or join an
              existing one.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 text-indigo-600 rounded-full h-24 w-24 flex items-center justify-center mx-auto text-4xl font-bold">
              2
            </div>
            <h4 className="text-xl font-semibold mt-4">Define Your Role</h4>
            <p className="text-gray-600 mt-2">
              Your role (Admin, Teacher, or Student) is set for each class
              you're a part of.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 text-indigo-600 rounded-full h-24 w-24 flex items-center justify-center mx-auto text-4xl font-bold">
              3
            </div>
            <h4 className="text-xl font-semibold mt-4">Start Collaborating</h4>
            <p className="text-gray-600 mt-2">
              Engage in discussions, manage assignments, and start learning
              together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "This platform has revolutionized how I manage my classes. The real-time features are a game-changer!",
      name: "John Doe",
      title: "High School Teacher",
    },
    {
      quote:
        "As a student, I love how easy it is to access notes, submit assignments, and chat with my classmates.",
      name: "Jane Smith",
      title: "University Student",
    },
    {
      quote:
        "The scalability of this platform is incredible. We've onboarded our entire school without a hitch.",
      name: "Admin Alex",
      title: "School Principal",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Landing;
