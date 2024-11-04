import {InputType} from "../../types/InputType"
import styles from "./Input.module.css"

export const Input: React.FC<InputType> = ({placeholder, value, onChange}) => {
  return (
    <>
      <input className={styles.input} placeholder={placeholder} onChange={onChange} value={value}/>
    </>
  )
}