export interface IUserCardType {
  id: number;
  username: string;
  name: string;
  email: string;
  buttonSlot?: React.ReactNode;
}

export type NewUserType = {
  id: number;
  username: string;
  name: string;
  email: string;
};

export interface IUserStateType {
  users: IUserCardType[];
  foundFavorites: IUserCardType[];
  selectedUser: IUserCardType | null;
   searchValue: string;
}
