import { Exercise } from "./exercise.interface";

export interface Topic{
  name:string;
  title: string;
  description:string;
  exercises?: Exercise[];
  card?:any;
  icon:string;
  path: string;
}
