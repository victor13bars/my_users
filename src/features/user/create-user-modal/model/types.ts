import { IUserCardType } from "../../../../entities/user/model/types";

export interface ICreateUserModal {
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  isModalOpen: boolean;
  handleCloseModal: () => void;
  selectedUser: IUserCardType | null;
}
