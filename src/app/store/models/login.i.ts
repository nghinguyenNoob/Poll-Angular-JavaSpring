export interface User {
  id: number;
  fullName: string;
  userName: string;
}
export interface Login {
  accessToken: string;
  user: User;
  typeToken: string;
}
