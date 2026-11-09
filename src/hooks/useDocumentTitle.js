import { useEffect } from "react";

export function useDocumentTitle(title) {
  useEffect(() => {
    const prev = document.title;
    document.title = title ? `${title} | Your Software` : "Your Software";
    return () => {
      document.title = prev;
    };
  }, [title]);
}
