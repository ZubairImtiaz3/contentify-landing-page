import Hero from "@/components/hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <footer className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-5">
        <Link className="text-primary hover:text-primary/90" href="/user-guide">
          User Guide
        </Link>
        <Link
          className="text-primary hover:text-primary/90"
          href="install-guide"
        >
          Installation Guide
        </Link>
      </footer>
    </>
  );
}
