"use client";
import React from "react";
import { Button } from "./ui/button";
import { incrementCount } from "@/actions/download";

const DownloadBtns = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.href = process.env.NEXT_PUBLIC_DOWNLOAD_URL || "";

    console.log(process.env.NEXT_PUBLIC_DOWNLOAD_URL);

    await incrementCount();
  };

  return (
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

      <form className="grow" onSubmit={handleSubmit}>
        <Button type="submit" className="w-full" size="lg">
          Download Extension
        </Button>
      </form>
    </div>
  );
};

export default DownloadBtns;
