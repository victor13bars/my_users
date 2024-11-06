import { IUserCardType } from "../../../entities/user/model/types";

export type UserListPropsType = {
  data?: IUserCardType[];
  isFavorite: boolean;
  openModal?: () => void;
};

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  addres?: IAddres;
  phone?: string;
  website?: string;
  company?: ICompany;
}

export interface IAddres {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
