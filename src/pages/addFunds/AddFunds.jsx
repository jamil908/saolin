import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const AddFunds = () => {
  const [formData, setFormData] = useState({
    method: "",
    senderAccount: "",
    transactionId: "",
    amount: "",
    screenshot: null,
  });

  const [currentBalance, setCurrentBalance] = useState(2000);
  const [lastRequested, setLastRequested] = useState(0);
  const [totalRequested, setTotalRequested] = useState(5000);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "screenshot") {
      setFormData({ ...formData, screenshot: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const amountValue = parseFloat(formData.amount);
    if (
      !formData.method ||
      !formData.senderAccount ||
      !formData.transactionId ||
      isNaN(amountValue) ||
      amountValue <= 0 ||
      !formData.screenshot
    ) {
      alert("Please fill in all fields correctly.");
      return;
    }

    // Simulate balance update
    setCurrentBalance((prev) => prev + amountValue);
    setLastRequested(amountValue);
    setTotalRequested((prev) => prev + amountValue);

    alert("✅ Fund request submitted!");

    // Reset form
    setFormData({
      method: "",
      senderAccount: "",
      transactionId: "",
      amount: "",
      screenshot: null,
    });

    e.target.reset();
  };

  return (
    <div className=" w-full lg:w-fit mx-auto mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-700 to-sky-500 text-white shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add Funds</h2>

      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-center">
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">Current Balance</p>
          <h3 className="text-lg font-bold">{currentBalance} ৳</h3>
        </div>
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">Last Request</p>
          <h3 className="text-lg font-bold">{lastRequested} ৳</h3>
        </div>
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">Total Requested</p>
          <h3 className="text-lg font-bold">{totalRequested} ৳</h3>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white/10 backdrop-blur rounded-lg p-6"
      >
        {/* Method */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Payment Method
          </label>
          <select
            name="method"
            value={formData.method}
            onChange={handleChange}
            className="w-full rounded-md px-3 py-2  hover:text-slate-900 border border-white/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
            required
          >
            <option className=" text-slate-950" value="">Select a method</option>
            <option className=" text-slate-950" value="bkash">bKash</option>
            <option className=" text-slate-950" value="nagad">Nagad</option>
            <option className=" text-slate-950" value="rocket">Rocket</option>
            <option className=" text-slate-950" value="bank">Bank Transfer</option>
          </select>
        </div>

        {/* Sender Account */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Sender Account
          </label>
          <input
            type="text"
            name="senderAccount"
            value={formData.senderAccount}
            onChange={handleChange}
            placeholder="e.g., 01XXXXXXXXX"
            className="w-full rounded-md px-3 py-2 text-white border border-white/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
        </div>

        {/* Transaction ID */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Transaction ID
          </label>
          <input
            type="text"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            placeholder="e.g., TX123456789"
            className="w-full rounded-md px-3 py-2 text-white border border-white/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">Amount (৳)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            min="1"
            className="w-full rounded-md px-3 py-2 text-white border border-white/30 bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
        </div>

        {/* Screenshot Upload */}
        <div>
          <label className="block text-sm font-medium mb-1 flex items-center gap-2">
            <FiUpload /> Upload Screenshot
          </label>
          <input
            type="file"
            name="screenshot"
            accept="image/*"
            onChange={handleChange}
            className="w-full rounded-md px-3 py-2 text-white file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 bg-white/10"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-blue-700 font-semibold py-2 rounded-md hover:bg-gray-100 transition"
        >
          Submit Fund Request
        </button>
      </form>
    </div>
  );
};

export default AddFunds;
