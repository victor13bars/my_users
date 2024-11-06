import { ModalUser } from "../../../../../shared/ui/Modal/ModalUser";
import { FormUser } from "../../../form-user";
import { ICreateUserModal } from "../../model/types";

export const CreateUserModal = ({
  modalRef,
  isModalOpen,
  handleCloseModal,
  selectedUser,
}: ICreateUserModal) => {
  return (
    <ModalUser
      ref={modalRef}
      className=""
      isOpen={isModalOpen}
      onClose={handleCloseModal}
    >
      <ModalUser.Header>
        {selectedUser ? "Edit user modal" : "Add user modal"}
      </ModalUser.Header>
      <ModalUser.Body>
        <FormUser onClose={handleCloseModal} selectedUser={selectedUser} />
      </ModalUser.Body>
      <ModalUser.Footer>Created by me</ModalUser.Footer>
    </ModalUser>
  );
};
