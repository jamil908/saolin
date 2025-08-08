import React from "react";
import { ShieldCheck, User, Lock, Share2, UserCheck, RefreshCw } from "lucide-react";
import Lottie from "lottie-react"; // ✅ Import Lottie
import privacyAnimation from "../assets/privacy.json"; // ✅ Move JSON to src/assets for import

const policyItems = [
  {
    icon: User,
    title: "Information We Collect",
    description:
      "We collect details such as your name, email, and payment information when necessary to provide our services. We may also gather usage data to improve your experience."
  },
  {
    icon: ShieldCheck,
    title: "How We Use Your Information",
    description:
      "Your data is used to provide, maintain, and improve our services, process transactions, and communicate with you about updates or support."
  },
  {
    icon: Lock,
    title: "Data Protection",
    description:
      "We implement strong security measures, including encryption and secure servers, to protect your personal information from unauthorized access."
  },
  {
    icon: Share2,
    title: "Sharing of Information",
    description:
      "We do not sell, rent, or share your personal data with third parties except as required by law or with trusted partners under strict confidentiality."
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    description:
      "You have the right to access, update, or delete your personal information at any time by contacting our support team."
  },
  {
    icon: RefreshCw,
    title: "Changes to This Policy",
    description:
      "We may update this Privacy Policy occasionally. Changes will be posted here, and major updates will be communicated directly."
  }
];

const PrivacyPolicySection = () => {
  return (
    <section className="bg-gradient-to-b w-full from-blue-50 to-white py-16 px-4 sm:px-8">

      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center grid grid-cols-1  md:grid-cols-2 justify-between items-center">
         <div>
             <h2 className="text-4xl font-extrabold text-gray-800 ">Privacy Policy</h2>
          <p className="text-gray-600">
            Your privacy matters to us. Here’s how we collect, use, and protect your
            information when you use our services.
          </p>
         </div>
           <div className="flex justify-center mb-6">
            <Lottie animationData={privacyAnimation} loop style={{ width: 150, height: 150 }} />
          </div>
        </div>

        {/* Policy Items Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {policyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-xs mt-12 text-center">
          Last updated: August 8, 2025
        </p>
      </div>
          {/* ✅ Lottie Animation */}
         
    </section>
  );
};

export default PrivacyPolicySection;
