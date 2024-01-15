import express from "express"
import {getFeedPosts, getUserPosts, likePost} from "../controllers/postController"
import {verifyToken} from "../middlewares/authMiddleware"


const router = express.Router()

//Read
router.get("/", verifyToken, getFeedPosts)
router.get("/:userId/post", verifyToken, getUserPosts)

//Update
router.patch("/:id/like", verifyToken, likePost)


export default router;