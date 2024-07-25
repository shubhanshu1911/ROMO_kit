const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();

const CURA_PATH = "D:/UltiMaker Cura 5.7.2/UltiMaker-Cura.exe"; // Modify this path to where Cura is installed

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

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





















// "D:/UltiMaker Cura 5.7.2/UltiMaker-Cura.exe"