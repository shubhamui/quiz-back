import express from "express";
import { Attendance } from "../Attendace.mjs";

const router = express.Router()
const attendance = new Attendance()

router.post(`/api/attendance/mark`, attendance.mark)
router.get(`/api/attendance/read`, attendance.read)


export default router