/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Locale } from "@/types/dbdatas";
export default async function Banner({
  title,
  locale,
}: {
  title: string;
  locale?: Locale;
}) {
  return (
    <div className={`relative h-[210px]`}>
      <div className={`container1 px-[15px] mx-auto`}>
        <div className={`pt-[120px]`}>
          <div className="container">
            <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
