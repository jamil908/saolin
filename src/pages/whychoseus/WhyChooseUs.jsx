import React from 'react';
import { FaShippingFast, FaShieldAlt, FaHeadset, FaStar } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 w-full pt-16 pb-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose SA Online Zone?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <FaShippingFast size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              We deliver your medicine quickly and safely at your doorstep.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <FaShieldAlt size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Payment</h3>
            <p className="text-gray-600 text-sm">
              100% secure and verified online payment system.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <FaHeadset size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Our team is always here to assist you anytime, anywhere.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <FaStar size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Top Rated</h3>
            <p className="text-gray-600 text-sm">
              Trusted by thousands of satisfied customers nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
