import React, { useState } from 'react';

const AddFunds = () => {
  const [formData, setFormData] = useState({
    method: '',
    senderAccount: '',
    transactionId: '',
    amount: '',
    screenshot: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'screenshot') {
      setFormData({ ...formData, screenshot: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('✅ Fund request submitted!');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Add Funds</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Method Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="method"
              value={formData.method}
              onChange={handleChange}
              placeholder="e.g., Bkash, Nagad, Bank"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Sender Account */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sender Account <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="senderAccount"
              value={formData.senderAccount}
              onChange={handleChange}
              placeholder="e.g., 01XXXXXXXXX"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Transaction ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transaction ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (৳) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Screenshot Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Screenshot <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="screenshot"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
              required
            />
          </div>





















          {/* Submit */}
          <div className="text-center pt-4">
           

  <div className="relative group">
    <button type='submit'
      className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
    >
      <span
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>
      <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
        <div class="relative z-10 flex items-center space-x-3">
          <span
            className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
            > Submit Fund Request</span>
        </div>
      </span>
    </button>
  </div>
            
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddFunds;
