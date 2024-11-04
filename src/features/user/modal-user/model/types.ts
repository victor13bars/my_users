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
  children: React.ReactNode;
  className: string;
  isOpen: boolean;
  onClose: () => void;
}
