import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full px-4 md:px-8 xl:px-14 ${className}`}>
      {/* 2xl gives you that luxury wide feel without going absurd */}
      <div className="mx-auto w-full max-w-[1400px]">{children}</div>
    </div>
  );
}
