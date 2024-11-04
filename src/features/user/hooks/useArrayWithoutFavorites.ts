import { IUserCardType } from "../../../entities/user/model/types";
import { useAppSelector } from "../../../shared/store/store";

export const useArrayithoutFavorites = (arr: IUserCardType[] = []) => {
  const users = useAppSelector((state) => state.users.users);

  const uniqUsers = arr?.filter((user) => {
    return !users.some((favorite) => favorite.id === user.id);
  });

  return { uniqUsers };
};
