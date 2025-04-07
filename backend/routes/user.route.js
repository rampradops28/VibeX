import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getprofile , followUnFollowUser , getSuggestedUsers , updateUser} from "../controllers/user.controller.js";
    
const router = express.Router();

router.get("/profile/:username" , protectRoute , getprofile)

router.post('/follow/:id' , protectRoute , followUnFollowUser);

router.get('/suggested' , protectRoute , getSuggestedUsers);

router.post('/update' , protectRoute , updateUser);

export default router;