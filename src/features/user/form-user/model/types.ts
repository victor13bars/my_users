import { IUserCardType } from "../../../../entities/user/model/types";

export interface MyForm {
    name: string;
    username: string;
    email: string;
  }
  
  export interface MyFormProps {
    selectedUser: IUserCardType | null;
    onClose: () => void;
  }