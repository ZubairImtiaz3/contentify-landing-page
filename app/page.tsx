import Hero from "@/components/hero";
import InstallGuide from "@/components/install-guide";
import UserGuide from "@/components/user-guide";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <InstallGuide />
        <UserGuide />
      </main>
    </>
  );
}
