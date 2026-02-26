import express from "express";
import todoRoutes from "./routes/todo.routes";

const app = express();

app.use(express.json());

// ✅ Root route (so Render doesn't show "Cannot GET /")
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Todo Express Atlas API is running",
    endpoints: {
      getAll: "GET /api/todos",
      getById: "GET /api/todos/:id",
      create: "POST /api/todos",
      update: "PUT /api/todos/:id",
      delete: "DELETE /api/todos/:id"
    }
  });
});

// Your existing routes
app.use("/api/todos", todoRoutes);

export default app;