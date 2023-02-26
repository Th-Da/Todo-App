export interface Todo {
  id: number;
  date: string;
  _date: Date;
  title: string;
  text: string;
  priority?: boolean;
}
