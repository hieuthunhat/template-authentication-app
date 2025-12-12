import jwt from "jsonwebtoken";
import accounts from "../consts/sampleData";

/**
 * Login action
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const login = (req, res) => {
    const { username, password } = req.body;
    const user = accounts.find(
        (acc) => acc.username === username && acc.password === password
    );

    if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, "YOUR_SECRET_KEY");
    return res
        .cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json({
            message: "Logged in successfully 😊 👌",
            user: { id: user.id, role: user.role, username: user.username }
        });
};

/**
 * Logout action
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const logout = (req, res) => {
    return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out 😏 🍀" });
};

/**
 * Protected route action
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const protectedRoute = (req, res) => {
    return res.json({ user: { id: req.userId, role: req.userRole } });
};