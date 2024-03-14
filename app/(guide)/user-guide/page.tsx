import Guide from "@/components/guide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Guide",
};

const page = () => {
  const steps = [
    {
      title: "Step 1: Ensure You're on LinkedIn",
      description:
        "Make sure that you have opened the LinkedIn Feed or LinkedIn Search Posts Page.",
      imageSrc: "/GuideStep1.png",
    },
    {
      title: "Step 2: Required Keywords",
      description:
        "Specify the required keywords that must be present in a post to consider it valid. You can specify single or multiple required tags, or leave the field blank.",
      imageSrc: "/GuideStep2.png",
    },
    {
      title: "Step 3: Additional Keywords",
      description:
        "You can specify multiple additional keywords. If no required keywords are entered, then a post will be considered valid if at least two additional keyword matches are found. Alternatively, you can use a combination of required keyword and additional keywords to customize your search. ",
      imageSrc: "/GuideStep3.png",
    },
    {
      title: "Step 4: Search and Review",
      description:
        "Begin the Search. You can pause the search anytime and check the found posts in a new tab, shown in a table format and review them. You can also download the results as a CSV file.",
      imageSrc: "/GuideStep4.png",
    },
    {
      title: "Step 5: Preview",
      description: "An example of found posts below.",
      imageSrc: "/GuideStep5.png",
    },
  ];

  return (
    <>
      <Guide title="User" steps={steps} />
    </>
  );
};

export default page;
