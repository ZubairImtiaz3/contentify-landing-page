import { Icons } from "@/components/ui/icons";
import { getDownloadCount } from "@/actions/download";
import { unstable_noStore as noStore } from "next/cache";
import NumberTicker from "@/components/number-ticker";

export const Header = async () => {
  noStore();
  const { downloadCount } = await getDownloadCount();

  return (
    <section className="bg-primary py-3 fixed top-2 left-1/2 transform -translate-x-1/2 w-[19rem] rounded-full">
      <div className="flex items-center justify-center space-x-4 max-w-[85%] mx-auto">
        <a
          className="text-gray-700"
          href="https://twitter.com/ZubairImtiaz1"
          target="_blank"
        >
          <Icons.twitter className="h-[1.2rem] w-[1.2rem]" />
        </a>
        <a
          className="text-gray-700"
          target="_blank"
          href="https://www.linkedin.com/in/zubair9395/"
        >
          <Icons.linkedin className="h-[1.55rem] w-[1.55rem]" />
        </a>
        <a
          className="text-gray-700"
          target="_blank"
          href="https://github.com/ZubairImtiaz3"
        >
          <Icons.gitHub className="h-6 w-6" />
        </a>

        <p className="text-primary-foreground pt-1">
          <NumberTicker value={downloadCount} />+ Downloads
        </p>
      </div>
    </section>
  );
};
