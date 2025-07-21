import React, { useState } from "react";
import TextToImageSection from "../components/TextToImageSection";
import ImageToImageForm from "../components/ImageToImageForm";

const Generate = () => {
  const [activeTab, setActiveTab] = useState("text"); // 'text' or 'image'

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Create Your Ghibli Masterpiece
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto mb-8">
            Transform your ideas into magical artwork inspired by Studio
            Ghibli's enchanting world
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-amber-100">
              <button
                onClick={() => setActiveTab("text")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "text"
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
                    : "text-amber-700 hover:text-amber-800 hover:bg-amber-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Text to Image
                </span>
              </button>
              <button
                onClick={() => setActiveTab("image")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "image"
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
                    : "text-amber-700 hover:text-amber-800 hover:bg-amber-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Image to Image
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative">
          {/* Background Decorations */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>

          {/* Tab Content */}
          <div className="relative z-10">
            {activeTab === "text" ? (
              <TextToImageSection />
            ) : (
              <ImageToImageForm />
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-amber-100">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              Lightning Fast
            </h3>
            <p className="text-amber-700">
              Generate beautiful artwork in seconds with our optimized AI
            </p>
          </div>

          <div className="text-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-amber-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              Ghibli Style
            </h3>
            <p className="text-amber-700">
              Authentic Studio Ghibli aesthetic and magical atmosphere
            </p>
          </div>

          <div className="text-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-amber-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              High Quality
            </h3>
            <p className="text-amber-700">
              Download your creations in high resolution for printing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generate;
