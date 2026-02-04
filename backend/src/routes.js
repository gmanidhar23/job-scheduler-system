const express = require("express");
const {
  createJob,
  getJobs,
  getJob,
  runJob
} = require("./controller");

const router = express.Router();

router.post("/jobs", createJob);
router.get("/jobs", getJobs);
router.get("/jobs/:id", getJob);
router.post("/run-job/:id", runJob);

module.exports = router;
