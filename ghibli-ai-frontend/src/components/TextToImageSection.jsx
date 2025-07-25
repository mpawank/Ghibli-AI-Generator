import React, { useState } from "react";

const styleOptions = [
  {
    value: "anime",
    label: "Studio Ghibli",
    description: "Classic Ghibli magic",
    promptAddon: "in the style of Studio Ghibli",
  },
  {
    value: "anime",
    label: "Spirited Away",
    description: "Mystical bathhouse vibes",
    promptAddon: "spirited away bathhouse spirits, mystical anime setting",
  },
  {
    value: "anime",
    label: "My Neighbor Totoro",
    description: "Whimsical forest magic",
    promptAddon: "totoro forest with magical creatures, ghibli style",
  },
  {
    value: "fantasy-art",
    label: "Princess Mononoke",
    description: "Epic nature scenes",
    promptAddon: "mononoke epic forest battle, nature gods, ghibli-style",
  },
  {
    value: "cinematic",
    label: "Howl's Castle",
    description: "Flying castle aesthetic",
    promptAddon: "howl's moving castle steampunk sky city, ghibli-inspired",
  },
  {
    value: "anime",
    label: "Kiki's Delivery",
    description: "Charming European style",
    promptAddon: "kiki flying on broomstick above a cozy town, ghibli feel",
  },
];

const TextToImageSection = () => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState(styleOptions[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt to generate your artwork.");
      return;
    }

    setLoading(true);
    setError(null);
    setGeneratedImage(null);
    setDownloadUrl(null);

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/generate-from-text",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: `${prompt}, ${style.promptAddon}, magical atmosphere, detailed artwork`,
            style: style.value,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate image. Please try again.");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setGeneratedImage(imageUrl);
      setDownloadUrl(imageUrl);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `ghibli-art-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-amber-100 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-amber-800 mb-2">
            Text to Ghibli Art
          </h2>
          <p className="text-amber-700">
            Describe your magical scene and watch it come to life
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6 flex items-center justify-between">
            <span>{error}</span>
            <button
              onClick={() => setError(null)}
              className="text-red-500 hover:text-red-700"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        <div className="space-y-6">
          {/* Prompt Input */}
          <div>
            <label className="block text-sm font-semibold text-amber-800 mb-2">
              Describe Your Scene
            </label>
            <textarea
              className="w-full p-4 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 resize-none"
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="A magical forest with glowing spirits, a young girl in a red dress, Studio Ghibli style..."
              disabled={loading}
            />
            <p className="text-sm text-amber-600 mt-2">
              Press Enter to generate (Shift+Enter for new line)
            </p>
          </div>

          {/* Style Selection */}
          <div>
            <label className="block text-sm font-semibold text-amber-800 mb-2">
              Choose Your Style
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {styleOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => setStyle(option)}
                  className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${
                    style.label === option.label
                      ? "border-amber-500 bg-amber-50 text-amber-800"
                      : "border-amber-200 hover:border-amber-300 bg-white"
                  }`}
                  disabled={loading}
                >
                  <div className="font-semibold text-sm">{option.label}</div>
                  <div className="text-xs text-amber-600">
                    {option.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            }`}
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Your Masterpiece...
              </>
            ) : (
              <>
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Generate Artwork
              </>
            )}
          </button>
        </div>

        {/* Generated Image */}
        {generatedImage && (
          <div className="mt-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={generatedImage}
                alt="Generated Ghibli Art"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-amber-800">
                      Your Ghibli Masterpiece
                    </h3>
                    <p className="text-sm text-amber-600">
                      Ready to download and share!
                    </p>
                  </div>
                  <button
                    onClick={handleDownload}
                    className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextToImageSection;
