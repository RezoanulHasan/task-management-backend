import { Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  image?: string; // Optional
  status?: 'completed' | 'incomplete';
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
