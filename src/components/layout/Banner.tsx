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
    <div
      className={`relative h-[210px]`}
      style={{
        backgroundImage: `url('https://res.cloudinary.com/tretrak/image/upload/v1651464605/achieve/pic2_eyr13d.png')`,
        backgroundPosition: "0 100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`container1 px-[15px] mx-auto`}>
        <div className={`pt-[120px]`}>
          <div className={`absolute left-[100px] bottom-[50px]`}>
            <img
              src={`https://res.cloudinary.com/tretrak/image/upload/v1651464604/achieve/pic3_dcdbdc.png`}
            />
          </div>

          <div className={`absolute right-0 top-[120px]`}>
            <img
              src={`https://res.cloudinary.com/tretrak/image/upload/v1651464604/achieve/pic4_x8fin9.png`}
            />
          </div>

          <div className="container">
            <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className={`Shape1 absolute z-0  opacity-50 left-[5%] top-[15%]`}>
        <img
          src={
            "https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape21_l90uqd.png"
          }
        />
      </div>
      <div className={`Shape2 absolute z-0 opacity-50 left-[10%] bottom-[10%]`}>
        <img
          src={"https://hepro-react.envytheme.com/images/shape/shape22.svg"}
        />
      </div>
      <div className={`Shape3 absolute z-0 opacity-50 left-[25%] top-[40%]`}>
        <img
          src={
            "https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape23_ygdtix.png"
          }
        />
      </div>
      <div className={`Shape4 absolute z-0 opacity-50 left-[30%] top-[15%]`}>
        <img
          src={
            "https://res.cloudinary.com/tretrak/image/upload/v1651464334/achieve/shape25_k6db7h.png"
          }
        />
      </div>
    </div>
  );
}
