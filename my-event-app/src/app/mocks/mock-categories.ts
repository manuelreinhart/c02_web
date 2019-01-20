import { Category } from '../types/category';

export const CATEGORIES: Category[] = [
  { id: 1, title: 'Metal', description: '', parentCategoryId: -1 },
  { id: 2, title: 'Rock', description: '', parentCategoryId: -1 },
  { id: 3, title: 'Wizard Rock', description: '', parentCategoryId: 2 },
  { id: 12, title: 'Chiptune', description: '', parentCategoryId: -1 },
  { id: 4, title: 'Death Metal', description: '', parentCategoryId: 1 },
  { id: 5, title: 'Grindcore', description: '', parentCategoryId: 1 },
  { id: 6, title: 'Punk', description: '', parentCategoryId: -1 },
  { id: 7, title: 'Post-Hardcore', description: '', parentCategoryId: 6 },
  { id: 8, title: 'Techno', description: '', parentCategoryId: -1 },
  { id: 9, title: 'Hardstyle', description: '', parentCategoryId: 8 },
  { id: 10, title: 'Frenchcore', description: '', parentCategoryId: 8 },
  { id: 11, title: 'Hardcore Techno', description: '', parentCategoryId: 8 }
];