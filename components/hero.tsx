import { Button } from "@/components/ui/button";
import { incrementCount } from "@/actions/download";

const Hero = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center h-[100vh]">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex gap-1 justify-center items-baseline">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none title [background:var(--gradient)] !bg-clip-text text-transparent !bg-cover !bg-center transition-all leading-none uppercase">
                Contentify
              </h1>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
              A Chrome extension that effortlessly automates Linkedin scrolling
              and scrapes posts/content based on your keywords. Save time, stay
              informed, and make the most out of your networking experience.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="flex gap-2 flex-wrap sm:flex-nowrap justify-center items-center">
              <a
                className="grow"
                target="_blank"
                rel="noopener"
                href="https://github.com/ZubairImtiaz3/Contentify"
              >
                <Button className="w-full" size="lg">
                  Get from GitHub
                </Button>
              </a>

              <form className="grow" action={incrementCount}>
                <Button className="w-full" size="lg">
                  Download Extension
                </Button>
              </form>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &ldquo;Get from GitHub&rdquo; Or By clicking &ldquo;Download
              Extension&rdquo;, you will directly download the extension file.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
