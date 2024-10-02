const express = require("express");
const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
const { google } = require("googleapis");
const QRCode = require("qrcode");
const ShortUniqueId = require("short-unique-id");

const uid = new ShortUniqueId({ length: 10 });
const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = "1aBwpHOoJfQUgIscWE2zRk0qRCNwcVjtOCS-f6NTloJA";

const getUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:B",
    });

    const rows = response.data.values;

    if (rows && rows.length) {
      const originalUrlEntry = rows.find((row) => row[1] === shortUrl);

      if (originalUrlEntry) {
        return res.redirect(decodeURIComponent(originalUrlEntry[0]));
      } else {
        return res.status(404).json({ message: "🔍 Short URL not found!" });
      }
    }
    return res.status(404).json({ message: "❌ No data found!" });
  } catch (error) {
    console.error("Error retrieving data:", error);
    return res.status(500).json({ message: "⚠️ Error fetching data." });
  }
};

const storeUrl = async (req, res) => {
  const { url } = req.body;

  if (!url || !urlPattern.test(url)) {
    return res.status(400).json({ message: "🛑 Invalid URL! Please check and try again." });
  }

  const shortUrl = uid.rnd();
  const encodedUrl = encodeURIComponent(url);
  const protocol = req.protocol
  const host = req.get('host')
  const domain = `${protocol}://${host}`

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:B",
      valueInputOption: "RAW",
      resource: {
        values: [[encodedUrl, shortUrl]],
      },
    });

    return res.status(200).json({
      originalUrl: url,
      shortUrl: `${domain}/${shortUrl}`,
      message: "✨ Your short URL is ready! Share it with the world! 🚀",
    });
  } catch (error) {
    console.error("Error storing URL:", error);
    return res.status(500).json({ message: "⚠️ Something went wrong while storing your URL." });
  }
};

const getQRCode = async (req, res) => {
  const { url } = req.params;

  if (!url) {
    return res.status(400).json({ message: "🛑 URL is required to generate a QR code!" });
  }


  if (!urlPattern.test(url)) {
    return res.status(400).json({ message: "🛑 Invalid URL! Please check and try again." });
  }

  try {
    const qrCodeUrl = await QRCode.toDataURL(url); 
    return res.status(200).json({
      message: "Here is your QR code!",
      qrCode: qrCodeUrl,
    });
  } catch (error) {
    console.error("Error generating QR code:", error);
    return res.status(500).json({ message: "⚠️ Error generating QR code." });
  }
};


module.exports = { storeUrl, getUrl, getQRCode };