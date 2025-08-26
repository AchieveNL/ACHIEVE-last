import { ConsultationButton } from "../header";

export default function StrategySection() {
  return (
    <section
      className="py-[5rem]"
      style={{
        backgroundImage: `url("/backgrounds/pattern.svg")`,
        backgroundSize: "125px 125px",
      }}
    >
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center 1200:flex-col gap-y-4">
          <h2 className="800:text-center leading-[1.2] text-[35px] !font-[800] 800:!text-[30px] 600:!text-[25px] max-w-[35ch]">
            Benieuwd naar wat wij voor jouw onderneming kunnen betekenen?
          </h2>

          <ConsultationButton className="px-8 md:px-12 py-4 md:py-6" />
        </div>
      </div>
    </section>
  );
}
