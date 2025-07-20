import { useState, useEffect } from "react";

const decorations = [
  {
    className:
      "absolute top-10 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse",
    style: {},
  },
  {
    className:
      "absolute bottom-20 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce",
    style: {},
  },
  {
    className:
      "absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-40 animate-ping",
    style: {},
  },
];

export default function Gallery() {
  const [loadingImages, setLoadingImages] = useState(Array(8).fill(true));
  const [errorImages, setErrorImages] = useState(Array(8).fill(false));

  const images = [
    "/Img/pic1.png",
    "/Img/pic2.png",
    "/Img/pic3.png",
    "/Img/pic4.png",
    "/Img/pic5.png",
    "/Img/pic6.jpg",
    "/Img/pic7.jpg",
    "/Img/pic8.jpg",
  ];

  // Animate images on mount
  useEffect(() => {
    const cards = document.querySelectorAll(".gallery-card");
    cards.forEach((card, i) => {
      card.style.opacity = 0;
      card.style.transform = "scale(0.95) translateY(30px)";
      setTimeout(() => {
        card.style.transition = "all 0.7s cubic-bezier(.4,2,.3,1)";
        card.style.opacity = 1;
        card.style.transform = "scale(1) translateY(0)";
      }, 100 + i * 120);
    });
  }, []);

  const handleImageLoad = (idx) => {
    setLoadingImages((prev) => {
      const updated = [...prev];
      updated[idx] = false;
      return updated;
    });
  };

  const handleImageError = (idx) => {
    setErrorImages((prev) => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      {/* Magical Background Decorations */}
      {decorations.map((d, i) => (
        <div key={i} className={d.className} style={d.style}></div>
      ))}

      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col justify-center items-center">
        <h2 className="text-5xl font-extrabold text-center text-amber-700 mb-14 drop-shadow-lg tracking-tight">
          Ghibli-Inspired Art Showcase
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="gallery-card relative overflow-hidden rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md border border-amber-100"
              tabIndex={0}
              aria-label={`Ghibli artwork ${idx + 1}`}
              style={{ opacity: 0 }}
            >
              {/* Loading or Error State */}
              {loadingImages[idx] && !errorImages[idx] && (
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-amber-100 to-orange-100 animate-pulse">
                  <span className="text-amber-600 text-2xl font-bold">
                    Loading...
                  </span>
                </div>
              )}
              {errorImages[idx] && (
                <div className="flex items-center justify-center h-64 bg-gray-100">
                  <span className="text-red-500 font-semibold">
                    Image not found
                  </span>
                </div>
              )}
              {/* Image */}
              {!errorImages[idx] && (
                <img
                  src={src}
                  alt={`Ghibli artwork ${idx + 1}`}
                  className={`w-full h-64 object-cover transition-transform duration-500 ${
                    loadingImages[idx] ? "hidden" : ""
                  }`}
                  onLoad={() => handleImageLoad(idx)}
                  onError={() => handleImageError(idx)}
                  loading="lazy"
                />
              )}
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-3 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-amber-300 drop-shadow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-lg text-white">
                    Ghibli Art #{idx + 1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
