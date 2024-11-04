import { useDispatch } from "react-redux";
import { Button } from "../../../../../shared/ui/Button/Button";
import { SearchFavorite } from "../SearchFavorite/SearchFavorite";
import styles from "./ManageUser.module.css";
import { openModal } from "../../../../../entities/user/model/userSlice";


export const ManageUser = () => {
  const dispatch = useDispatch();
  const onHandleClick = () => {
    dispatch(openModal());
  };
  return (
    <div className={styles.wrapper}>
      <SearchFavorite />
      <Button onClick={onHandleClick}>Add user</Button>
    </div>
  );
};
