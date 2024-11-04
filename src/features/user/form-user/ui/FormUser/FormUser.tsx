import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./FormUser.module.css";
import { useDispatch } from "react-redux";

import {
  createUser,
  editUser,
} from "../../../../../entities/user/model/userSlice";
import { Button } from "../../../../../shared/ui/Button/Button";
import { MyForm, MyFormProps } from "../../model/types";

export const FormUser = ({ onClose, selectedUser }: MyFormProps) => {
  const defaultValues = selectedUser ? selectedUser : {};
  const { register, handleSubmit } = useForm<MyForm>({
    defaultValues: defaultValues,
  });
  const dispatch = useDispatch();
  const submit: SubmitHandler<MyForm> = ({ name, username, email }) => {
    if (selectedUser) {
      dispatch(editUser({ id: selectedUser.id, name, username, email }));
    } else {
      dispatch(createUser({ id: Date.now(), name, username, email }));
    }
    onClose();
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <div className={styles.inputGroup}>
          <input
            placeholder="name"
            type="text"
            {...register("name", { required: true })}
          />
          <input
            placeholder="username"
            type="text"
            {...register("username", { required: true })}
          />
          <input
            placeholder="email"
            type="text"
            {...register("email", { required: true })}
          />
        </div>
        <Button type="submit" onClick={handleSubmit(submit)}>
          Submit
        </Button>
      </form>
    </>
  );
};
