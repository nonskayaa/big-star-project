import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
};

export default function Portal({ children }: PortalProps) {
  const container = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
}
