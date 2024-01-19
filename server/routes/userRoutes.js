import express from "express"
// import {verifyToken} from "../middlewares/authMiddleware"
import { addRemoveFriend, getUser, getUserFriends } from "../controllers/userController.js"
import { verifyToken } from "../middlewares/authMiddleware.js"

const router = express.Router()

//read routes
router.get("/id", verifyToken, getUser)
router.get("/:id/friends", verifyToken, getUserFriends)

//Update routes
router.patch("/:id/:friendId", verifyToken, addRemoveFriend)


export default router;