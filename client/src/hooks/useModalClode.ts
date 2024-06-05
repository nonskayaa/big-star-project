import { RefObject, useEffect } from "react";

function useModalClose(ref: RefObject<HTMLElement> , handler: () => void) {
  useEffect(() => {
    const reference = ref.current;

    const listener = (event: Event) => {
      if (reference === event.target) handler();
    };

    reference?.addEventListener("click", listener);

    return () => reference?.removeEventListener("click", listener);
  }, [ref, handler]);
}

export default useModalClose;