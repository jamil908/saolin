import React, { useEffect, useState } from 'react';
import jobTask from '../../../public/jobTask.json';

const MyJobList = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate fetching delay
    setTimeout(() => {
      setApplications(jobTask);
      setFilteredApps(jobTask);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = [...applications];

    if (search) {
      filtered = filtered.filter(
        (app) =>
          app.title.toLowerCase().includes(search.toLowerCase()) ||
          app.company.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter) {
      filtered = filtered.filter((app) => app.status === statusFilter);
    }

    setFilteredApps(filtered);
  }, [search, statusFilter, applications]);

  return (
    <div className="p-4 w-full bg-white sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          My Job Applications ({filteredApps.length})
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by title or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded-md text-sm w-full sm:w-64"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border px-3 py-2 rounded-md text-sm w-full sm:w-48"
          >
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="text-slate-900 bg-gray-100">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Applied Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center px-4 py-6 text-gray-500">
                  <span className="animate-pulse">Loading...</span>
                </td>
              </tr>
            ) : filteredApps.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center px-4 py-6 text-gray-400">
                  No job applications found.
                </td>
              </tr>
            ) : (
              filteredApps.map((app, index) => (
                <tr
                  key={app.id}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-gray-100 transition`}
                >
                  <td className="px-4 py-3 text-center">{index + 1}</td>
                  <td className="px-4 py-3">{app.title}</td>
                  <td className="px-4 py-3">{app.company}</td>
                  <td className="px-4 py-3">{app.location}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        app.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : app.status === 'Interview Scheduled'
                          ? 'bg-blue-100 text-blue-800'
                          : app.status === 'Rejected'
                          ? 'bg-red-100 text-red-800'
                          : app.status === 'Shortlisted'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{app.appliedDate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobList;
