import { useCallback } from "react";

export const useMessage = () => {
  return useCallback((text, style = "success") => {
    if (window.M && text) {
      window.M.toast({
        html: `<h6>${text}</h6>`,
        classes: `${style === "error" ? "red black-text" : "green black-text"}`
      });
    }
  }, []);
};
