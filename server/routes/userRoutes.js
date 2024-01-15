import express from "express"
import {getUser, getUserFriends, addRemoveFriend} from "../controllers/userController"
import {verifyToken} from "../middlewares/authMiddleware"


const router = express.Router()

//read routes
router.get("/id", verifyToken , getUser)
router.get("/:id/friends", verifyToken, getUserFriends)

//Update routes
router.patch("/:id/:friendId" ,verifyToken, addRemoveFriend)


export default router;