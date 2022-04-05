export interface Todo{
  todoId : number;
  title  : string;
  status?: string;
  deadLine : string;
  description? : string;
  importance? :string;
  created? : Date;
  modified? : Date;
  userId? : number;
  todoCategoryId? : number;
  todoCategoryName? : string;
}
