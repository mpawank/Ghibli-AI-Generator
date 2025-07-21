import React, { useState, useRef } from "react";

export default function ImageToImageForm() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("ghibli");
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [error, setError] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const styleOptions = [
    {
      value: "ghibli",
      label: "Studio Ghibli",
      description: "Classic Ghibli magic",
    },
    {
      value: "spirited-away",
      label: "Spirited Away",
      description: "Mystical bathhouse vibes",
    },
    {
      value: "totoro",
      label: "My Neighbor Totoro",
      description: "Whimsical forest magic",
    },
    {
      value: "mononoke",
      label: "Princess Mononoke",
      description: "Epic nature scenes",
    },
    {
      value: "castle",
      label: "Howl's Castle",
      description: "Flying castle aesthetic",
    },
    {
      value: "kiki",
      label: "Kiki's Delivery",
      description: "Charming European style",
    },
  ];

  const handleImageChange = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setError(null);
    } else {
      setError("Please select a valid image file.");
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) handleImageChange(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleImageChange(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !prompt.trim()) {
      setError("Please provide both an image and a prompt.");
      return;
    }

    setLoading(true);
    setError(null);
    setResultImage(null);
    setDownloadUrl(null);

    const formData = new FormData();
    formData.append("image", image);
    formData.append(
      "prompt",
      `${prompt}, Studio Ghibli style, ${style} aesthetic, magical atmosphere, detailed artwork`
    );
    formData.append("style", style);

    try {
      const response = await fetch("http://localhost:8080/api/v1/generate", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Generation failed. Please try again.");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setResultImage(imageUrl);
      setDownloadUrl(imageUrl);
    } catch (error) {
      console.error(error);
      setError("Error generating image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `ghibli-transformed-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-amber-100 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-amber-800 mb-2">
            Image to Ghibli Art
          </h2>
          <p className="text-amber-700">
            Transform your photos into magical Ghibli-style artwork
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

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-amber-800 mb-2">
              Upload Your Image
            </label>
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                isDragOver
                  ? "border-amber-500 bg-amber-50"
                  : "border-amber-200 hover:border-amber-300"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {preview ? (
                <div className="space-y-4">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-48 h-48 object-cover rounded-lg mx-auto shadow-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImage(null);
                      setPreview("");
                      setResultImage(null);
                      setDownloadUrl(null);
                    }}
                    className="text-amber-600 hover:text-amber-800 text-sm font-medium"
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <svg
                    className="w-16 h-16 text-amber-400 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <div>
                    <p className="text-lg font-semibold text-amber-800">
                      Drop your image here
                    </p>
                    <p className="text-amber-600">or click to browse</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200"
                  >
                    Choose File
                  </button>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
            </div>
          </div>

          {/* Prompt Input */}
          <div>
            <label className="block text-sm font-semibold text-amber-800 mb-2">
              Describe Your Transformation
            </label>
            <textarea
              className="w-full p-4 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 resize-none"
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Transform this into a magical Ghibli scene with spirits and enchanted forest..."
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
                  key={option.value}
                  type="button"
                  onClick={() => setStyle(option.value)}
                  className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${
                    style === option.value
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
            type="submit"
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
              loading || !image || !prompt.trim()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            }`}
            disabled={loading || !image || !prompt.trim()}
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
                Transforming Your Image...
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Transform Image
              </>
            )}
          </button>
        </form>

        {/* Generated Image */}
        {resultImage && (
          <div className="mt-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={resultImage}
                alt="Transformed Ghibli Art"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-amber-800">
                      Your Transformed Masterpiece
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
}
