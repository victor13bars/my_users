import { useEffect } from "react";

export const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    const handleClick = (event: Event) => {
      if (!ref?.current || ref?.current?.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handler, ref]);
};
