import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserCardType, IUserStateType, NewUserType } from "./types";

const initialState: IUserStateType = {
  users: [],
  foundFavorites: [],
  selectedUser: null,
  searchValue: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUserCardType[]>) => {
      state.users = action.payload;
    },
    getFavorites(state) {
      state.users = JSON.parse(localStorage.users);
    },
    addToFavorites(state, action: PayloadAction<IUserCardType>) {
      if (!state.users.some((user) => user.id === action.payload.id)) {
        state.users.push(action.payload);
        localStorage.users = JSON.stringify(state.users);
      }
    },
    searchFavorite(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      state.foundFavorites = state.users.filter((user) => {
        if (
          user.username.toLowerCase().includes(action.payload) ||
          user.name.toLowerCase().includes(action.payload)
        ) {
          return user;
        } else {
          return null;
        }
      });
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
      state.foundFavorites = state.foundFavorites.filter(
        (user) => user.id !== action.payload
      );
      localStorage.users = JSON.stringify(state.users);
    },
    selectUser(state, action: PayloadAction<IUserCardType | null>) {
      state.selectedUser = action.payload;
    },
    createUser(state, action: PayloadAction<NewUserType>) {
      state.users.push(action.payload);
      localStorage.users = JSON.stringify(state.users);
    },
    editUser(state, action: PayloadAction<NewUserType>) {
      state.users = state.users.map((user) => {
        if (user.id === state.selectedUser?.id) {
          return action.payload;
        }
        return user;
      });
      localStorage.users = JSON.stringify(state.users);
    },
  },
});

export const {
  setUsers,
  getFavorites,
  searchFavorite,
  addToFavorites,
  removeFromFavorites,
  selectUser,
  editUser,
  createUser,
} = usersSlice.actions;

export default usersSlice.reducer;
