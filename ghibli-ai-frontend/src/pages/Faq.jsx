import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  Shield,
  Zap,
  Users,
} from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the Ghibli AI Generator work?",
      answer:
        "Our AI uses advanced machine learning models trained on Studio Ghibli's artistic style. You can either upload an image for transformation or enter a text prompt describing what you want to create. The AI then generates artwork that captures the magical, whimsical essence of Ghibli films while maintaining your original vision.",
    },
    {
      question: "What types of images can I upload?",
      answer:
        "You can upload any image file (JPG, PNG, WebP) up to 10MB. Photos, digital art, sketches, or any visual reference work great. The AI will transform your image while preserving the core elements and adding the distinctive Ghibli aesthetic.",
    },
    {
      question: "How long does it take to generate artwork?",
      answer:
        "Most generations complete within 30-60 seconds. The exact time depends on the complexity of your request and current server load. We've optimized our AI to deliver high-quality results quickly without compromising on the magical Ghibli style.",
    },
    {
      question: "Can I use the generated artwork commercially?",
      answer:
        "Yes! You own the rights to all artwork you generate with our service. You're free to use it for personal projects, commercial purposes, or even sell prints. Just remember that while you own your generated art, the underlying AI technology and Ghibli style inspiration remain protected.",
    },
    {
      question: "What makes this different from other AI art generators?",
      answer:
        "Our AI is specifically trained and fine-tuned to capture Studio Ghibli's unique artistic style - the soft watercolor-like textures, dreamy atmospheres, and whimsical character designs. While other generators create generic anime art, ours specializes in that magical Ghibli aesthetic that fans love.",
    },
    {
      question: "Is my data and uploaded images secure?",
      answer:
        "Absolutely! We take privacy seriously. Your uploaded images are processed securely and automatically deleted after generation. We never store or share your personal data or generated artwork without your explicit permission. Your creations remain private and secure.",
    },
    {
      question: "Can I download my artwork in high resolution?",
      answer:
        "Yes! All generated artwork can be downloaded in high resolution (up to 2048x2048 pixels). We offer multiple format options including PNG and JPG, ensuring you get the quality you need for printing or digital use.",
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer:
        "We want you to love your artwork! If you're not satisfied with the result, you can regenerate with the same prompt or try different variations. Our AI learns from feedback, so each generation can be slightly different. Plus, you can always adjust your prompt to get closer to your vision.",
    },
    {
      question: "Do you offer different Ghibli art styles?",
      answer:
        "Yes! Our AI can generate artwork inspired by different Ghibli films and styles - from the dreamy landscapes of 'Spirited Away' to the whimsical characters of 'My Neighbor Totoro' and the epic scenes of 'Princess Mononoke'. You can specify which style you prefer in your prompt.",
    },
    {
      question: "How can I get the best results?",
      answer:
        "For best results, be specific in your prompts! Mention details like 'forest scene', 'flying castle', 'magical creatures', or reference specific Ghibli films. For image uploads, choose clear, well-lit photos. The more detail you provide, the better the AI can capture your vision in that magical Ghibli style.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Everything you need to know about creating magical Ghibli-style
            artwork with AI
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-amber-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our support team is here to help you create the perfect
              Ghibli-style artwork.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-amber-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-amber-700 transition-colors duration-300">
                Try It Now
              </button>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Lightning Fast
            </h4>
            <p className="text-gray-600">
              Generate artwork in seconds, not minutes
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Privacy First
            </h4>
            <p className="text-gray-600">
              Your data and artwork are always secure
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Community
            </h4>
            <p className="text-gray-600">
              Join thousands of creators worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
