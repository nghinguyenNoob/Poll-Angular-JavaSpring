export interface TodoDetail {
    todoId: string;
    todoName: string;
    description: string;
    status: string;
    deadline: Date;
    importance: string;
    created: Date;
    modified: Date;
    todoDetailUser?: UserDetailTodo;
    todoDetailCategory?: CategoryDetailTodo;
  }

  export interface UserDetailTodo {
    userId: string;
    userName: string;
    fullName: string;
  }

  export interface CategoryDetailTodo {
    todoCategoryId: string;
    todoCategoryName: string;
  }
