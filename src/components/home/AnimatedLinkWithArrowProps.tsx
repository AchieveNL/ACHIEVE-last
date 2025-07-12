import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import "./button.css";

interface AnimatedLinkWithArrowProps {
  href: string;
  text: string;
  textClassName: string;
}

export default function AnimatedLinkWithArrow({
  textClassName,
  href,
  text,
}: AnimatedLinkWithArrowProps) {
  return (
    <Link
      href={href}
      className={`ServicesLink z-30 max-w-fit inline-flex gap-3 items-center text-[15px] font-[500]`}
    >
      <div
        className={`bg-achieve-navy h-[45px] w-[45px] rounded-full flex justify-center items-center`}
      >
        <FaAngleRight
          className={`i`}
          fontSize={24}
          fontWeight={"bold"}
          color={"white"}
        />
      </div>
      <p className={textClassName}>{text}</p>
    </Link>
  );
}
