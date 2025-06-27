import { redirect } from "next/navigation";

export default async function Start({Add commentMore actions
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const startParam = searchParams.start || "landing";
  redirect(`https://t.me/tele_story_bot?start=${startParam}`);
}
