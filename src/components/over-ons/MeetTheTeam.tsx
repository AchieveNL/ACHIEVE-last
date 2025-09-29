/* eslint-disable no-console */
import { MongoService } from "@/lib/mongoService";
import { AboutUs, Locale, Team } from "@/types/dbdatas";
import MeetTheTeamClient from "./MeetTheTeamClient";

export async function fetchTeamData(): Promise<{
  aboutUsData: AboutUs | null;
  teamData: Team[];
}> {
  try {
    const aboutUsData = await MongoService.getAboutUs();
    const teamData = await MongoService.getTeam();
    return { aboutUsData, teamData };
  } catch (error) {
    console.error("Failed to load team data:", error);
    return { aboutUsData: {} as AboutUs, teamData: [] };
  }
}

const MeetTheTeam = async ({ locale }: { locale: Locale }) => {
  const { aboutUsData, teamData } = await fetchTeamData();
  if (!aboutUsData || teamData.length === 0) {
    return <div>No team data available.</div>;
  }
  return (
    <MeetTheTeamClient locale={locale} data={aboutUsData} teams={teamData} />
  );
};

export default MeetTheTeam;
