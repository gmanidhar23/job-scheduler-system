
import express from "express";
import { createJob, getJobs, getJob, runJob } from "./controller.js";

const router = express.Router();
router.post("/jobs", createJob);
router.get("/jobs", getJobs);
router.get("/jobs/:id", getJob);
router.post("/run-job/:id", runJob);

export default router;
