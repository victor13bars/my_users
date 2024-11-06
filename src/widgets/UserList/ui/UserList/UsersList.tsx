import styles from "./UsersList.module.css";
import { IUser, UserListPropsType } from "../../model/types";
import { IUserCardType } from "../../../../entities/user/model/types";
import { UserCard } from "../../../../entities/user";
import { Button } from "../../../../shared/ui/Button/Button";
import { useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../../entities/user/model/userSlice";
import { selectUser } from "../../../../entities/user/model/userSlice";

export const UserList: React.FC<UserListPropsType> = ({
  data,
  isFavorite,
  openModal,
}) => {
  const dispatch = useDispatch();

  const handleOpenModal = (user: IUser) => {
    dispatch(selectUser(user));
    openModal && openModal();
  };
  const addUser = (user: IUser) => {
    dispatch(addToFavorites(user));
  };
  const removeUser = (id: number) => {
    dispatch(removeFromFavorites(id));
  };
  return (
    <div className={styles.list}>
      {data?.length ? (
        data.map(({ id, username, name, email }: IUserCardType) => (
          <UserCard
            key={id}
            id={id}
            username={username}
            name={name}
            email={email}
            buttonSlot={
              <>
                {isFavorite ? (
                  <Button
                    btnColor="red"
                    labelColor="red"
                    type="outline"
                    onClick={() => removeUser(id)}
                  >
                    Remove from favorite
                  </Button>
                ) : (
                  <Button
                    onClick={() => addUser({ id, name, username, email })}
                  >
                    Add to favorite
                  </Button>
                )}
                {isFavorite && (
                  <Button
                    btnColor="red"
                    labelColor="red"
                    type="outline"
                    onClick={() =>
                      handleOpenModal({ id, name, username, email })
                    }
                  >
                    Edit
                  </Button>
                )}
              </>
            }
          />
        ))
      ) : (
        <div className={styles.empty}>Empty list</div>
      )}
    </div>
  );
};
