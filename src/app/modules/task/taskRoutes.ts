import express from 'express';
import {
  createTask,
  deleteTaskById,
  getAllTasks,
  getTaskById,
  updateTaskById,
} from './taskController';
import { ValidationTaskSchema } from '../zodValidationSchemas';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', validateRequest(ValidationTaskSchema), createTask);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);
export const TaskRoutes = router;
