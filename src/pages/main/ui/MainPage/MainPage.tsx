import { useArrayithoutFavorites } from "../../../../features/user/hooks/useArrayWithoutFavorites";
import { useGetAllUsersQuery } from "../../../../widgets/UserList/api/usersApi";
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
