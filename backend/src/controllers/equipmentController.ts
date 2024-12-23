import { Request, Response } from 'express';
import pool from '../database';

export const getAllEquipment = async (req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM equipment');
  res.json(rows);
};

export const createEquipment = async (req: Request, res: Response) => {
  const { name, category, stockLevel, reorderPoint } = req.body;
  await pool.query('INSERT INTO equipment (name, category, stockLevel, reorderPoint) VALUES (?, ?, ?, ?)', [name, category, stockLevel, reorderPoint]);
  res.status(201).send('Equipment created');
};

export const updateEquipment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, category, stockLevel, reorderPoint } = req.body;
  await pool.query('UPDATE equipment SET name = ?, category = ?, stockLevel = ?, reorderPoint = ? WHERE id = ?', [name, category, stockLevel, reorderPoint, id]);
  res.send('Equipment updated');
};

export const deleteEquipment = async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query('DELETE FROM equipment WHERE id = ?', [id]);
  res.send('Equipment deleted');
};
