import { checkRole } from "../helpers/checkRole.js";
import * as userRepository from "../repositories/userController.js";

/**
 * Get all users (admin only)
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */   
export const getAllUsers = async (req, res) => {
    try {
        const userRole = req.userRole;
        if (!checkRole(userRole, 'admin')) {
            return res.status(403).json({ message: "Access denied" });
        }
        const users = await userRepository.getAll();

        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}