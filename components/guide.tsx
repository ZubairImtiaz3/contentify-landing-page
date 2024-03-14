import React from "react";
import Image from "next/image";
import ScrollHideButton from "@/components/scroll-hide-btn";

interface Step {
  title: string;
  description: string;
  imageSrc: string;
}

interface GuideProps {
  title: string;
  steps: Step[];
}

const Guide: React.FC<GuideProps> = ({ title, steps }) => {
  return (
    <section>
      <div className="text-center px-4 md:px-6 py-24 space-y-4 md:space-y-6">
        <div className="space-y-8 md:space-y-14">
          <h2 className="text-3xl font-bold tracking-tighter/none">
            {title} Guide
          </h2>
          <div className="space-y-16 text-gray-500 dark:text-gray-400 flex flex-col justify-center max-w-[700px] m-auto">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-bold">{step.title}</h3>
                {step.description.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <Image
                  alt={`Step ${index + 1}`}
                  className="rounded-lg object-cover"
                  height={400}
                  src={step.imageSrc}
                  layout="responsive"
                  objectFit="cover"
                  width={600}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <ScrollHideButton />
      </div>
    </section>
  );
};

export default Guide;
