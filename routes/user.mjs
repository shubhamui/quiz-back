import express from "express";
import { User } from "../User.mjs";

const router = express.Router()
const user = new User()

router.post(`/api/user/add`, user.add)
router.get(`/api/user/read`, user.read)
router.put(`/api/user/update`, user.update)
router.post(`/api/user/login`, user.login)
router.post(`/api/user/resetPassword`, user.resetPassword)
router.get(`/api/user/getCertificates/:id`, user.getCertificates)

export {user}

export default router