String Sorter API & Validator
A technical assessment project featuring a server-side API that processes strings into sorted character arrays and a frontend testing interface.

🚀 The Challenge
The goal was to build a functional webhook that meets the following criteria:

Method: Must be a POST endpoint.

Input: Receives JSON data with a "data" field containing a single string.

Logic: Converts the string into an array of individual characters.

Processing: Sorts the character array alphabetically.

Output: Returns the sorted characters as a JSON object with the key "word".

🛠️ Tech Stack
Backend: Node.js (Vercel Serverless Functions)

Frontend: HTML5 / JavaScript (Fetch API)

Deployment: Vercel

🌟 Bonus Features
Live Tester: Developed a public-facing frontend that allows users to input their email and API URL to trigger the validation suite.

Real-time Results: Displays the direct response from the validation endpoint for immediate feedback.

How It Works (Data Flow)
Frontend sends a request to the validation server.

The Validation Server sends a POST request to my Vercel API.

My API transforms "example" into ["a", "e", "e", "l", "m", "p", "x"].

The result is sent back to the validation server, which returns a success link.
