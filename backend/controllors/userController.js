import { getAll } from "../repositories/userController.js";

export const getAllUsers = async (req, res) => {
    try {
        const userRole = req.userRole;
        if (userRole !== 'admin') {
            return res.status(403).json({ message: "Access denied" });
        }
        const users = await getAll();

        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}