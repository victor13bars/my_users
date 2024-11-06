import { useGetAllUsersQuery } from "../../../../entities/user/api/usersApi";
import { useArrayithoutFavorites } from "../../../../entities/user/utils/hooks/useArrayWithoutFavorites";

import { UserList } from "../../../../widgets/UserList/ui/UserList/UsersList";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  const { data, isLoading } = useGetAllUsersQuery(null);
  const {uniqUsers} = useArrayithoutFavorites(data)
  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }
  return (
    <main>
      <UserList data={uniqUsers} isFavorite={false} />
    </main>
  );
};
