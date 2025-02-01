import { google } from "googleapis";
import { format } from "date-fns";
import { Readable } from "stream"; // Import Readable to convert Buffer to a stream

export async function POST(req) {
  try {
    const formData = await req.formData(); // Parse form data
    const fname = formData.get("fname");
    const lname = formData.get("lname");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const resume = formData.get("resume"); // Resume file (Blob)

    if (!resume) {
      throw new Error("Resume file is required");
    }

    // Convert Blob to Buffer
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Convert buffer to a readable stream
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null); // End the stream

    // Format date (e.g., 1Jan)
    const dateStr = format(new Date(), "dMMM");
    const fileName = `${fname}${lname}${dateStr}.pdf`;

    // Google Authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const drive = google.drive({ version: "v3", auth });

    // Upload file to Google Drive
    const fileMetadata = {
      name: fileName,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID], // Ensure this is set in your env
    };

    const media = {
      mimeType: resume.type,
      body: stream, // Pass the readable stream instead of buffer
    };

    const fileResponse = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: "id", // Get only the file ID
    });

    const fileId = fileResponse.data.id;

    // 🔹 Grant Public Access to the File
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    // Generate a public shareable link
    const fileUrl = `https://drive.google.com/uc?id=${fileId}`;

    // Append data to Google Sheet
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = "Resumes!A:E";
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[fname, lname, mobile, email, fileUrl]],
      },
    });

    return new Response(
      JSON.stringify({ success: true, fileId, fileUrl }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
