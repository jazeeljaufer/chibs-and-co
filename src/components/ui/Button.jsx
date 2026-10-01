import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Button({ children, href, variant = 'primary', className = '', icon = false }) {
  const baseStyle = "inline-flex items-center justify-center font-body font-bold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cherry/30";
  const variants = {
    primary: "bg-cherry text-white hover:bg-cherry/90 shadow-warm hover:shadow-lg hover:-translate-y-0.5 px-6 py-3",
    secondary: "bg-woodLight/30 text-ink hover:bg-woodLight/50 px-6 py-3",
    outline: "border-2 border-cherry text-cherry hover:bg-cherry/5 px-6 py-3",
    small: "bg-cherry text-white hover:bg-cherry/90 text-sm px-4 py-2"
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Component className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <ExternalLink className="ml-2 w-4 h-4" />}
    </Component>
  );
}