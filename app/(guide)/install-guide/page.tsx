import Guide from "@/components/guide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation Guide",
};

const page = () => {
  const steps = [
    {
      title: "Step 1: Download the Extension",
      description:
        "Click Download Extension button. Once downloaded, Extract the files from the archive.",
      imageSrc: "/InstallStep1.png",
    },
    {
      title: "Step 2: Open Browser Settings",
      description:
        "Open a new tab in your Chrome and enter the following URL: chrome://extensions \nPress Enter to navigate to the Extensions settings page.",
      imageSrc: "/InstallStep2.png",
    },
    {
      title: "Step 3: Enable Developer Mode",
      description:
        "On the Extensions settings page, look for the Developer mode toggle switch. \nEnable this option.",
      imageSrc: "/InstallStep3.png",
    },
    {
      title: "Step 4: Install the Extension",
      description:
        'Drag and drop the extracted folder (e.g "contentify") directly into the Extensions settings page.',
      imageSrc: "/InstallStep4.png",
    },
    {
      title: "Step 5: Install the Extension",
      description:
        'Drag and drop the extracted folder (e.g "contentify") directly into the Extensions settings page.',
      imageSrc: "/InstallStep5.png",
    },
  ];

  return (
    <>
      <Guide title="Installation" steps={steps} />
    </>
  );
};

export default page;
