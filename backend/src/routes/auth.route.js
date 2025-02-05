import e from "express";
import { checkAuth, login, logout, signup } from "../controllers/auth.controller.js";
import { middleware } from "../middleware/middleware.js";

const router = e.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

router.post("/checkauth",middleware,checkAuth)

export default router;