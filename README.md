# Regex Data Extraction Assignment

This is my assignment for extracting structured data from messy text using JavaScript and regular expressions.

## What the program does
- Reads text from `input.txt`, which simulates messy real-world data.
- Extracts:
  - Emails
  - URLs
  - Phone numbers
  - Credit card numbers (masked for security)
  - Time (12-hour and 24-hour formats)
- Ignores malicious input like scripts or SQL injections.
- Saves the cleaned and structured results in `output.json`.

## How to run
1. Make sure `index.js` and `input.txt` are in the same folder.
2. Run the program using Node.js
