export type ButtonType = {
  children: React.ReactNode;
  onClick: (e?: React.MouseEvent) => void;
  btnColor?: string;
  labelColor?: string;
  disabled?: boolean;
  type?: string;
  style?: string;
};
