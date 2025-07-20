import { Link } from "react-router-dom";
import Feature from "./feature";
import Gallery from "./Gallery";
import Faq from "./Faq";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-40 animate-ping"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-amber-800 mb-6">
              Turn Your Ideas into{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Ghibli-Style
              </span>{" "}
              Art
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Upload a photo or enter a prompt and let AI generate beautiful
              anime-style art inspired by Studio Ghibli's enchanting world.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Link
              to="/generate"
              className="group relative bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-6 h-6"
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
                Try It Now
              </span>
            </Link>
            <Link
              to="/gallery"
              className="group border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-xl text-xl font-bold hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-6 h-6"
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
                View Gallery
              </span>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Artworks Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
                50+
              </div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
                24/7
              </div>
              <div className="text-gray-600">AI Available</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Feature Section */}
      <Feature />
      {/* {gallery} */}
      <Gallery />
      <Faq/>
    </>

  );
}
