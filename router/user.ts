import { login, regUser } from "../router_handle/user";

import express from "express";

const router = express.Router();
router.post("/reguser", regUser);
router.get("/login", login);
export default router;
