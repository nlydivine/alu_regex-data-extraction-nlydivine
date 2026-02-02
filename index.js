const fs = require("fs");

// Read input text from file
const rawText = fs.readFileSync("input.txt", "utf8");

// Remove obvious unsafe/malicious patterns
const cleanText = rawText.replace(
  /<script.*?>.*?<\/script>|DROP\s+TABLE|SELECT\s+\*|OR\s+1=1/gi,
  ""
);

// Regex patterns for data extraction
const patterns = {
  emails: /\b[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}\b/g,
  urls: /\bhttps?:\/\/[^\s]+\b/g,
  phones: /\b(\(\d{3}\)\s?\d{3}[-.\s]\d{4}|\d{3}[-.\s]\d{3}[-.\s]\d{4})\b/g,
  creditCards: /\b(?:\d{4}[-\s]?){3}\d{4}\b/g,
  time: /\b([01]?\d|2[0-3]):[0-5]\d\b|\b(1[0-2]|[1-9]):[0-5]\d\s?(AM|PM)\b/gi
};

// Mask credit card numbers
function maskCards(cards) {
  return cards.map(card => card.replace(/\d(?=\d{4})/g, "*"));
}

// Extract matches
const extractedData = {
  emails: cleanText.match(patterns.emails) || [],
  urls: cleanText.match(patterns.urls) || [],
  phones: cleanText.match(patterns.phones) || [],
  creditCards: maskCards(cleanText.match(patterns.creditCards) || []),
  time: cleanText.match(patterns.time) || []
};

//  Print output to terminal
console.log("Extracted Data:");
console.log(JSON.stringify(extractedData, null, 2));

// Save output to JSON file
fs.writeFileSync("output.json", JSON.stringify(extractedData, null, 2));

console.log("Extraction completed successfully.");

