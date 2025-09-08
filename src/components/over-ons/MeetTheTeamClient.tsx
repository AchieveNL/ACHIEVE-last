import { FaEnvelope } from "react-icons/fa";
import { AboutUs, Locale, Team } from "@/types/dbdatas";
import AnimatedText from "../ui/AnimatedText";
import Image from "next/image";
import HighlightedText from "../ui/HighlightedText";

export default async function MeetTheTeam({
  locale,
  data,
  teams,
}: {
  locale: Locale;
  data: AboutUs;
  teams: Team[];
}) {
  if (!teams) {
    return <div>loading</div>;
  }
  return (
    <section
      className={`bg-achieve-background py-[70px]`}
      style={{
        backgroundImage: `url('https://www.achieve.nl/en-US/images/background/bg17.png')`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`container mx-auto px-4 bg-achieve-background`}>
        <div
          className={`flex justify-center items-center flex-col mb-3 sm:mb-4 lg:mb-5 gap-1`}
        >
          {locale === "en" ? (
            <h1 className="text-4xl lg:text-4xl  font-bold leading-tight text-achieve-navy">
              Meet the{" "}
              <HighlightedText className="text-achieve-purple ">
                <AnimatedText
                  animationType="gradient"
                  className="text-achieve-purple font-bold"
                >
                  team
                </AnimatedText>
              </HighlightedText>
            </h1>
          ) : (
            <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-achieve-navy">
              Ontmoet het{" "}
              <HighlightedText className="text-achieve-purple ">
                <AnimatedText
                  animationType="gradient"
                  className="text-achieve-purple font-bold"
                >
                  team
                </AnimatedText>
              </HighlightedText>
            </h1>
          )}
        </div>
        <p className={`text-center mb-[1rem] mt-3`}>
          {data.teamDescription[locale]}
        </p>

        <div
          className={`mt-10 flex flex-wrap gap-[76px] items-center justify-center`}
        >
          {teams.map((person: Team) => {
            return (
              <div key={person._id} className={`mb-[10px]`}>
                <div
                  className={`p-10 pt-[1rem] bg-white relative overflow-hidden shadow-serviceCardShadow rounded-[10px]`}
                >
                  <Image
                    className={`max-w-[235px]`}
                    alt={person.name}
                    src={person.image}
                    width={235}
                    height={235}
                  />
                </div>
                <div
                  className={`bg-white ml-5 flex flex-col justify-center items-center p-[30px] rounded-[10px] shadow-serviceCardShadow  mt-[-60px] relative`}
                >
                  <div className={`flex flex-col items-center`}>
                    <h4 className={`font-bold mb-[3px]`}>{person.name}</h4>
                    <span className={`uppercase text-[13px]`}>
                      {person.profession[locale]}
                    </span>
                  </div>
                  <div className={`mt-4 `}>
                    <a
                      href={`mailto: ${person.email}`}
                      className={`group hover:bg-achieve-purple cursor-pointer inline-flex bg-[rgba(137,110,255,.1)] w-[32px] h-[32px] leading-[32px] text-center rounded-[50px] duration-500  justify-center items-center`}
                    >
                      <FaEnvelope
                        className={`text-[14px] group-hover:text-white text-achieve-purple`}
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
