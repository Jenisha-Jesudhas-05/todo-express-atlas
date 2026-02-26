import { Request, Response } from "express";
import * as todoService from "../services/todo.service";

export const create = async (req: Request, res: Response) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.status(201).json(todo);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAll = async (_req: Request, res: Response) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json(todos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const todo = await todoService.getTodoById(id);

    if (!todo) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(todo);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const todo = await todoService.updateTodo(id, req.body);

    if (!todo) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(todo);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const todo = await todoService.deleteTodo(id);

    if (!todo) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};