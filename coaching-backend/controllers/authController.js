import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  // Example hardcoded admin (later replace with DB check)
  const adminUsername = "coachingadmin";
  const adminPassword = "admin123";

  if (username === adminUsername && password === adminPassword) {
    // generate JWT
    const token = jwt.sign(
      { username: adminUsername },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
