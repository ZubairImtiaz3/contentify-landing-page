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
        "In VS Code, go to the Extensions view (Ctrl+Shift+X), search for the extension, and click the Install button.",
    },
    {
      title: "Step 2: Sign in to your Account",
      description:
        "After the extension is installed, sign in to your account using the VS Code command palette (Ctrl+Shift+P) and the command 'MyAccount: SignIn'.",
    },
    {
      title: "Step 3: Open a Project",
      description:
        "Open a project in VS Code. You can now access the extension's features from the sidebar.",
    },
  ];

  return (
    <>
      <Guide title="Installation" steps={steps} />
    </>
  );
};

export default page;
