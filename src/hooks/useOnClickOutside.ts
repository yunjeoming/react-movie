import React, { useEffect } from "react";

const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      if (!ref.current || ref.current.contains(target)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
  return;
};

export default useOnClickOutside;
