import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost", // MySQL host
  user: "root", // Your MySQL username
  password: "", // Your MySQL password (if any)
  database: "elle_db", // Your database name
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, username, password } = req.body;

  // Ensure both fields are filled out
  if (!fullName || !username || !password) {
    return res.status(400).json({ error: "Please fill out all fields" });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);

    // Check if the username is already taken
    const [existingUser] = await connection.query(
      "SELECT * FROM elle_signup WHERE username = ?",
      [username]
    );

    if ((existingUser as any[]).length > 0) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    // Insert the new user into the elle_signup table
    await connection.query(
      "INSERT INTO elle_signup (fullname, username, password) VALUES (?, ?, ?)",
      [fullName, username, password] // Store the fullName, username, and password
    );

    connection.end();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database connection error" });
  }
}
