import { Router } from "express";
import * as todoController from "../controllers/todo.controller";

const router = Router();

router.post("/", todoController.create);
router.get("/", todoController.getAll);
router.get("/:id", todoController.getById);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.remove);

export default router;