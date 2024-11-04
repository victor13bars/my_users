import { useEffect } from "react";
import {
  closeModal,
  getFavorites,
} from "../../../entities/user/model/userSlice";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { UserList } from "../../../widgets/UserList/ui/UserList/UsersList";
import styles from "./Favorites.module.css";
import { ManageUser } from "../../../features/user/manage-user";
import { ModalUser } from "../../../features/user/modal-user";
import { FormUser } from "../../../features/user/form-user";

export const Favorites = () => {
  const selectedUser = useAppSelector((state) => state.users.selectedUser);
  const isModalOpen = useAppSelector((state) => state.users.isModal);
  const foundUsers = useAppSelector((state) => state.users.foundFavorites);
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    if (!localStorage.users) {
      localStorage.users = JSON.stringify([]);
    }
    dispatch(getFavorites());
  }, [dispatch]);
  return (
    <div className={styles.page}>
      <ModalUser className="" isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalUser.Header>
          {selectedUser ? "Edit user modal" : "Add user modal"}
        </ModalUser.Header>
        <ModalUser.Body>
          <FormUser onClose={handleCloseModal} selectedUser={selectedUser} />
        </ModalUser.Body>
        <ModalUser.Footer>Created by me</ModalUser.Footer>
      </ModalUser>
      <ManageUser />
      <UserList
        data={foundUsers.length > 0 ? foundUsers : users}
        isFavorite={true}
      />
    </div>
  );
};
