/* eslint-disable no-undef */
import { RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import { TaskModel } from './taskModel';
import { paginationHelpers } from '../../../helper/paginationHelpers';

export const createTask: RequestHandler = catchAsync(
  async (req, res): Promise<void> => {
    const { title, description, image, status } = req.body;

    const newTask = new TaskModel({ title, description, image, status });

    await newTask.save();
    res.status(201).json({
      statusCode: 201,
      success: true,
      message: 'Successfully created a new task',
      task: newTask,
    });
  },
);

export const getAllTasks: RequestHandler = catchAsync(
  async (req, res): Promise<void> => {
    const { page, limit, sortBy, sortOrder, searchTerm } = req.query;

    // Calculate pagination options using the helper function
    const paginationOptions = paginationHelpers.calculatePagination({
      page: page ? parseInt(page as string) : undefined,
      limit: limit ? parseInt(limit as string) : undefined,
      sortBy: sortBy ? (sortBy as string) : undefined,
      sortOrder: sortOrder ? (sortOrder as string) : undefined,
    });

    // search by filter
    const searchFilter = searchTerm
      ? { title: { $regex: searchTerm, $options: 'i' } }
      : {};

    // Fetch tasks with search, sorting, and pagination
    const tasks = await TaskModel.find(searchFilter)
      .skip((paginationOptions.page - 1) * paginationOptions.limit)
      .limit(paginationOptions.limit);

    const totalTasksCount = await TaskModel.countDocuments(searchFilter);

    if (tasks.length > 0) {
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Successfully retrieved tasks with pagination',
        meta: {
          page: paginationOptions.page,
          limit: paginationOptions.limit,
          total: totalTasksCount,
        },
        tasks,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'No tasks information found',
      });
    }
  },
);

export const getTaskById: RequestHandler = catchAsync(
  async (req, res): Promise<void> => {
    const { id } = req.params;
    const task = await TaskModel.findById(id);

    if (task) {
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Successfully retrieved the task',
        task,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Task not found',
      });
    }
  },
);

export const updateTaskById: RequestHandler = catchAsync(
  async (req, res): Promise<void> => {
    const { id } = req.params;
    const { title, description, image, status } = req.body;

    const updatedTask = await TaskModel.findByIdAndUpdate(
      id,
      { title, description, image, status },
      { new: true, runValidators: true },
    );

    if (updatedTask) {
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Successfully updated the task',
        task: updatedTask,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Task not found',
      });
    }
  },
);

export const deleteTaskById: RequestHandler = catchAsync(
  async (req, res): Promise<void> => {
    const { id } = req.params;

    const deletedTask = await TaskModel.findByIdAndDelete(id);

    if (deletedTask) {
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Successfully deleted the task',
        task: deletedTask,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Task not found',
      });
    }
  },
);
