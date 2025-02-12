import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [previousAssignmentsFile, setPreviousAssignmentsFile] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePreviousAssignmentsChange = (e) => {
    setPreviousAssignmentsFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    const formData = new FormData();
    formData.append('file', file);
    formData.append('previousAssignmentsPath', previousAssignmentsFile);

    try {
      const response = await axios.post('http://localhost:5000/api/assign', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen align-content: center bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🎅 Secret Santa Assigner 🎁</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Employees CSV:</label>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Previous Assignments CSV:</label>
            <input
              type="file"
              name="previousAssignmentsPath"
              onChange={handlePreviousAssignmentsChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
          >
            {isLoading ? "Assigning Secret Santa..." : "Assign Secret Santa"}
          </button>
        </form>

        {assignments.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 Gifts:</h2>
            <ul className="space-y-4">
              {assignments.map((assignment, index) => (
                <li key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    <span className="font-semibold">{assignment.Employee_Name}</span> (
                    <span className="text-blue-600">{assignment.Employee_EmailID}</span>) →{" "}
                    <span className="font-semibold">{assignment.Secret_Child_Name}</span> (
                    <span className="text-blue-600">{assignment.Secret_Child_EmailID}</span>)
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;