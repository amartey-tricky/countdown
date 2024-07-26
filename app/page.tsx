import Image from "next/image";
import Countdown from "@/components/countdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Countdown />
    </main>
  );
}
