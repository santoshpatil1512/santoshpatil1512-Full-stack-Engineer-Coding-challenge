const express = require('express');
const santaController = require('../controllers/santaController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

// Handle multiple files
router.post('/assign', upload.fields([
    { name: 'file', maxCount: 1 }, // Employees CSV
    { name: 'previousAssignmentsPath', maxCount: 1 }, // Previous Assignments CSV
  ]), santaController.assignSecretSanta);

module.exports = router;