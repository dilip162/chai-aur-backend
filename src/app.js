import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

// routes import

import userRoutes from "./routes/user.routes.js";

// routes declerations
app.use("/api/v1/users", userRoutes);

//http://localhost:8000/api/v1/users/register

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
