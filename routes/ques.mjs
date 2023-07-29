import express from "express";
import { Question } from "../Question.mjs";

const router = express.Router()
const ques = new Question()

router.post(`/api/ques/add`, ques.add)
router.get(`/api/ques/read`, ques.read)

export default router