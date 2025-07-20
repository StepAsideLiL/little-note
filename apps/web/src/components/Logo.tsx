import { cn } from "@workspace/design-system/lib/utils";
import Image from "next/image";

export default function Logo({
  size = 400,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("border-1 border-white bg-white", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/little-project-logo.webp"
        alt="Little Note Logo"
        width={400}
        height={400}
      />
    </div>
  );
}
