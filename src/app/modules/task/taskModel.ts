/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Schema } from 'mongoose';

import { ITask } from './taskInterface';
import { ValidationTaskSchema } from '../zodValidationSchemas';

const TaskSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ['completed', 'incomplete'],
      default: 'incomplete',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const TaskModel = mongoose.model<ITask>('Task', TaskSchema);
export const validateTask = (data: Record<string, any>) =>
  ValidationTaskSchema.safeParse(data);
