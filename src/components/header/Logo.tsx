import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 140, height = 140 }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.png"
        alt="Achieve Logo"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </Link>
  );
}
