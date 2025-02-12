const { parseCSV } = require('../utils/csvParser'); // Import the parseCSV function
const santaModel = require('../models/santaModel');

exports.assignSecretSanta = async (req, res) => {
  try {
    console.log(req.files); // Debugging: Log the uploaded files

    if (!req.files || !req.files.file || !req.files.previousAssignmentsPath) {
      return res.status(400).json({ message: 'Both files are required' });
    }

    const employees = await parseCSV(req.files.file[0].path); // Use the imported parseCSV function
    const previousAssignments = await parseCSV(req.files.previousAssignmentsPath[0].path); // Use the imported parseCSV function

    const assignments = santaModel.assignSecretSanta(employees, previousAssignments);

    res.status(200).json({ assignments });
  } catch (error) {
    console.error('Error in assignSecretSanta:', error); // Debugging: Log the error
    res.status(500).json({ message: error.message });
  }
};