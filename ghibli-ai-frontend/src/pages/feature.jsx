import { Sparkles, Upload, ImageDown, Zap, Heart, Shield } from "lucide-react";

export default function Feature() {
  const features = [
    {
      icon: Upload,
      title: "Upload or Prompt",
      description:
        "Choose to upload an image or simply type your imagination into words. Our AI understands both visual and textual inputs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "AI Ghibli Generator",
      description:
        "Our advanced engine transforms your input into stunning art inspired by Studio Ghibli's magical aesthetic and storytelling.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: ImageDown,
      title: "Download & Share",
      description:
        "Save your masterpiece in high resolution or share it instantly with the world. Your art, your way.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Generate beautiful artwork in seconds, not minutes. Our optimized AI delivers results quickly without compromising quality.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Community Driven",
      description:
        "Join our growing community of artists and creators. Share, inspire, and discover amazing Ghibli-style artwork.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Your uploads and generated content are secure. We respect your privacy and never share your personal data.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Ghibli AI Generator?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of cutting-edge AI technology and the
            timeless charm of Studio Ghibli's artistic style.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon Background */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Create Your Masterpiece?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of creators who are already transforming their
              ideas into stunning Ghibli-style artwork.
            </p>
            <button className="bg-white text-amber-700 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Start Creating Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
