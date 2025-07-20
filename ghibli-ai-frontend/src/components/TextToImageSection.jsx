import React, { useState } from "react";

const TextToImageSection = () => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("anime");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!prompt) {
      setError("Please enter a prompt.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/api/v1/generate-from-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, style }),
      });

      if (!response.ok) throw new Error("Failed to generate image");

      const blob = await response.blob();
      setGeneratedImage(URL.createObjectURL(blob));
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto px-4 py-12">
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error} <button onClick={() => setError(null)}>x</button>
        </div>
      )}

      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-amber-100 p-6">
        <h2 className="text-xl font-semibold mb-4 text-amber-800">Text To Ghibli Art</h2>

        <textarea
          className="w-full p-3 border rounded mb-4"
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your magical Ghibli scene..."
        />

        <select
          className="w-full p-2 border rounded mb-4"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <option value="anime">Anime</option>
          <option value="cinematic">Cinematic</option>
          <option value="3d-model">3D Model</option>
          <option value="fantasy-art">Fantasy Art</option>
        </select>

        <button
          className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition w-full"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        <div className="w-full h-80 mt-6">
          {loading ? (
            <div className="flex items-center justify-center h-full">Loading...</div>
          ) : (
            generatedImage && (
              <img
                src={generatedImage}
                alt="Generated Ghibli Art"
                className="w-full h-full object-cover rounded-lg shadow"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TextToImageSection;
