
import { db } from "./db.js";
import axios from "axios";

export const createJob = async (req, res) => {
  const { taskName, payload, priority } = req.body;
  await db.query(
    "INSERT INTO jobs (taskName, payload, priority, status) VALUES (?, ?, ?, 'pending')",
    [taskName, JSON.stringify(payload), priority]
  );
  res.json({ message: "Job created" });
};

export const getJobs = async (req, res) => {
  const [jobs] = await db.query("SELECT * FROM jobs ORDER BY createdAt DESC");
  res.json(jobs);
};

export const getJob = async (req, res) => {
  const [job] = await db.query("SELECT * FROM jobs WHERE id=?", [req.params.id]);
  res.json(job[0]);
};

export const runJob = async (req, res) => {
  const id = req.params.id;
  await db.query("UPDATE jobs SET status='running' WHERE id=?", [id]);

  setTimeout(async () => {
    await db.query("UPDATE jobs SET status='completed' WHERE id=?", [id]);
    const [job] = await db.query("SELECT * FROM jobs WHERE id=?", [id]);

    await axios.post("https://webhook.site/YOUR-ID", {
      jobId: job[0].id,
      taskName: job[0].taskName,
      priority: job[0].priority,
      payload: job[0].payload,
      completedAt: new Date()
    });
  }, 3000);

  res.json({ message: "Job running" });
};
