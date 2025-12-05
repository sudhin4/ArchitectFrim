// useGSAP.js
import { useLayoutEffect } from "react";
import gsap from "gsap";

export function useGSAP(callback, { dependencies = [], scope }) {
  useLayoutEffect(() => {
    if (!scope?.current) return;

    const ctx = gsap.context(() => {
      callback();
    }, scope);

    return () => ctx.revert();
  }, dependencies);
}
