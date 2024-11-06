import { useEffect, useRef, useState } from "react";
import {
  getFavorites,
  selectUser,
} from "../../../entities/user/model/userSlice";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { UserList } from "../../../widgets/UserList/ui/UserList/UsersList";
import styles from "./Favorites.module.css";
import { ManageUser } from "../../../features/user/manage-user";
import { CreateUserModal } from "../../../features/user/create-user-modal";

export const Favorites = () => {
  const [isModalOpen, setIsModalOPen] = useState(false);
  const selectedUser = useAppSelector((state) => state.users.selectedUser);
  const foundUsers = useAppSelector((state) => state.users.foundFavorites);
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    setIsModalOPen(false);
    dispatch(selectUser(null));
  };

  const handleOpenModal = () => {
    setIsModalOPen(true);
  };
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!localStorage.users) {
      localStorage.users = JSON.stringify([]);
    }
    dispatch(getFavorites());
  }, [dispatch]);
  return (
    <div className={styles.page}>
     <CreateUserModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} modalRef={modalRef} selectedUser={selectedUser}/>
      <ManageUser openModal={handleOpenModal} />
      <UserList
        openModal={handleOpenModal}
        data={foundUsers.length > 0 ? foundUsers : users}
        isFavorite={true}
      />
    </div>
  );
};
