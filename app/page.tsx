import type { Metadata } from "next";
import { HomeContainer } from "@/containers/HomeContainer";

export const metadata: Metadata = {
  title: "YouTube",
  description: "Watch trending videos and discover new content",
};

export default function HomePage() {
  return <HomeContainer />;
}
