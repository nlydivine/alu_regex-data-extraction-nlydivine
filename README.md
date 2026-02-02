# Regex Data Extraction and Secure Validation (JavaScript)

This project is a JavaScript program that extracts structured information from raw text using regular expressions. The input text simulates data returned from an external API and includes realistic variations and some unsafe content.

## What the program does
- Reads raw text from `input.txt`
- Uses regular expressions to extract:
  - Email addresses
  - URLs
  - Phone numbers
  - Credit card numbers
  - Time values (12-hour and 24-hour formats)
- Removes obvious malicious or unsafe input
- Masks sensitive data such as credit card numbers
- Prints the extracted data in the terminal
- Saves the results in both JSON and text formats

## Project files
- `index.js` – main JavaScript file with regex extraction and validation logic
- `input.txt` – sample raw text with realistic data and variations
- `output.json` – structured output in JSON format
- `output.txt` – human-readable version of the extracted results
- `README.md` – project documentation

## How to run the program
Make sure Node.js is available, then run
