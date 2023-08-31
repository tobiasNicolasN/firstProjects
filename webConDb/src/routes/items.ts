import express, { Request, Response } from "express";
import Item from "../models/Item";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const newItemData = req.body;
    const newItem = await Item.create(newItemData);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar los datos" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error al encontrar los datos" });
  }
});

export default router;
