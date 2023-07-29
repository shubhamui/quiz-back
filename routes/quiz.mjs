import express from "express";
import { Quiz } from "../Quiz.mjs";

const router = express.Router()
const quiz = new Quiz()

router.post(`/api/quiz/add`, quiz.add)
router.get(`/api/quiz/read`, quiz.read)
router.get(`/api/quiz/getQuestions/:id`, quiz.getQuestions)
router.post(`/api/quiz/evaluate`, quiz.evaluate)

export default router