
import { Button } from "../../../../../shared/ui/Button/Button";
import { SearchFavorite } from "../SearchFavorite/SearchFavorite";
import styles from "./ManageUser.module.css";
import { IManageUser } from "../../model/types";


export const ManageUser = ({openModal}:IManageUser) => {
 
  return (
    <div className={styles.wrapper}>
      <SearchFavorite />
      <Button onClick={openModal}>Add user</Button>
    </div>
  );
};
