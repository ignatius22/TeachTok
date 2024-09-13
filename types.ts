// types.ts (for shared types)
interface User {
  name: string;
  avatar: string;
}
export interface Option {
  id: number; // Ensure id is correctly typed
  answer: string;
}

export interface MCQ {
  id: number;
  question: string;
  options: Option[];
  playlist: string; // Ensure this property is defined here
  image: string;
  user: User;
  description: string;
  
}
