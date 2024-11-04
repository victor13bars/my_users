import { IUserCardType } from "../../model/types";
import styles from "./UserCard.module.css";

export const UserCard = ({
  id,
  username,
  name,
  email,
  buttonSlot,
}: IUserCardType) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.username}>{username}</div>
      <p className={styles.name}>
        Name: <span>{name}</span>
      </p>
      <p className={styles.email}>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      {buttonSlot && <div className={styles.buttonSlot}>{buttonSlot}</div>}
    </div>
  );
};
