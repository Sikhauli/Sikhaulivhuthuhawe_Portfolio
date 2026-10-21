import type { ReactNode } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, MapPin, Check } from "lucide-react";

export { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, MapPin, Check };

export function IconLink({ href, label, children, external = true }: {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      className="icon-link"
      href={href}
      aria-label={label}
      {...(external && href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
    </a>
  );
}