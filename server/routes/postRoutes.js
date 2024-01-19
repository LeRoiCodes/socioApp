import express from "express"
import { verifyToken } from "../middlewares/authMiddleware.js"
import {getFeedPosts, getUserPosts, likePost} from "../controllers/postController.js"
// import {verifyToken} from "../middlewares/authMiddleware.js"
// verifyToken


const router = express.Router()

//Read
router.get("/", verifyToken, getFeedPosts)
router.get("/:userId/post", verifyToken, getUserPosts)

//Update
router.patch("/:id/like", verifyToken, likePost)


export default router;