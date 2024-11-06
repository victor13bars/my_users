import { Ref } from "react";

export type FormInputType = {
  username: string;
  name: string;
  email: string;
};
export interface IModalUniversalProps {
  children: React.ReactNode;
  className?: string;
}
export interface IModalProps {
  ref:React.MutableRefObject<HTMLDivElement | null>
  children: React.ReactNode;
  className: string;
  isOpen: boolean;
  onClose: () => void;
}
