import { Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  image?: string;
  status?: 'completed' | 'incomplete';
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
