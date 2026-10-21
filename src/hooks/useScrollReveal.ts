import { useEffect } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useScrollReveal(): void {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const revealAll = (): void => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => element.classList.add("is-visible"));
    };

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const seen = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    const observe = (root: ParentNode): void => {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        if (seen.has(element)) return;
        seen.add(element);
        observer.observe(element);
      });
    };

    observe(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches("[data-reveal]") && !seen.has(node)) {
              seen.add(node);
              observer.observe(node);
            }
            observe(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [reducedMotion]);
}