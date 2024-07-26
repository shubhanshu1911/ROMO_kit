const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();

const CURA_PATH = "D:/UltiMaker Cura 5.7.2/UltiMaker-Cura.exe"; // Modify this path to where Cura is installed

app.use(express.json()); // Middleware to parse JSON bodies

// GET route to launch Cura with a single file
app.get('/launch-cura', (req, res) => {
    const filePath = req.query.filePath; // Get the file path from query parameters

    // Check if Cura executable exists
    fs.access(CURA_PATH, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Cura not found at path: ${CURA_PATH}`);
            res.status(404).send('Cura not available');
        } else {
            // Check if the file exists
            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    console.error(`File not found at path: ${filePath}`);
                    res.status(404).send('File not available');
                } else {
                    // Launch Cura with the file
                    exec(`"${CURA_PATH}" "${filePath}"`, (error, stdout, stderr) => {
                        if (error) {
                            console.error(`Error: ${error.message}`);
                            res.status(500).send(`Error: ${error.message}`);
                            return;
                        }
                        if (stderr) {
                            console.error(`Stderr: ${stderr}`);
                            res.status(500).send(`Stderr: ${stderr}`);
                            return;
                        }
                        console.log(`Stdout: ${stdout}`);
                        res.send('Cura launched with file');
                    });
                }
            });
        }
    });
});

// POST route to launch Cura with multiple files
app.post('/launch-cura', (req, res) => {
    const filePaths = req.body.filePaths; // Get the file paths from the request body

    if (!filePaths || !filePaths.length) {
        return res.status(400).send('No file paths provided');
    }

    // Check if Cura executable exists
    fs.access(CURA_PATH, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Cura not found at path: ${CURA_PATH}`);
            return res.status(404).send('Cura not available');
        }

        // Check if all files exist
        const missingFiles = [];
        const checkFileExists = (filePath, callback) => {
            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    missingFiles.push(filePath);
                }
                callback();
            });
        };

        let checkedFiles = 0;
        filePaths.forEach(filePath => {
            checkFileExists(filePath, () => {
                checkedFiles++;
                if (checkedFiles === filePaths.length) {
                    if (missingFiles.length) {
                        console.error(`Files not found at paths: ${missingFiles.join(', ')}`);
                        return res.status(404).send(`Files not available: ${missingFiles.join(', ')}`);
                    }

                    // Launch Cura with the files
                    const curaCommand = `"${CURA_PATH}" ${filePaths.map(filePath => `"${filePath}"`).join(' ')}`;
                    exec(curaCommand, (error, stdout, stderr) => {
                        if (error) {
                            console.error(`Error: ${error.message}`);
                            return res.status(500).send(`Error: ${error.message}`);
                        }
                        if (stderr) {
                            console.error(`Stderr: ${stderr}`);
                            return res.status(500).send(`Stderr: ${stderr}`);
                        }
                        console.log(`Stdout: ${stdout}`);
                        res.send('Cura launched with files');
                    });
                }
            });
        });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
