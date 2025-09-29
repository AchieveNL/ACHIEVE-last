import { Locale } from "@/types/dbdatas";
import HighlightedText from "../ui/HighlightedText";
export default async function Banner({
  title,
  className,
}: {
  title: string;
  locale?: Locale;
  className?: string;
}) {
  return (
    <div className={`relative h-[210px] ${className}`}>
      <div className={`container1 px-[15px] mx-auto`}>
        <div className={`pt-[120px]`}>
          <div className="container">
            <HighlightedText className="text-achieve-purple ">
              <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
                {title}
              </h1>
            </HighlightedText>
          </div>
        </div>
      </div>
    </div>
  );
}
