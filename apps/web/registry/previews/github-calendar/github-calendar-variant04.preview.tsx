import { GithubCalendar } from "@workspace/ui/registry/radix-nova/github-calendar/github-calendar";

export default function GithubCalendarVariant04() {
  return (
    <GithubCalendar 
      username="torvalds" 
      startDate="2024-01-01" 
      endDate="2024-06-30" 
      startsOnSunday={true} 
      theme="sunset"
      className="w-fit"
    />
  );
}
