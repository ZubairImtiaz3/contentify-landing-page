const UserGuide = () => {
  return (
    <section className="">
      <div className="text-center px-4 md:px-6 py-12 space-y-4 md:py-24 md:space-y-6">
        <div className="space-y-8 md:space-y-14">
          <h2 className="text-3xl font-bold tracking-tighter/none">
            User Guide
          </h2>
          <div className="space-y-4 text-gray-500 dark:text-gray-400 flex flex-col justify-center max-w-[700px] m-auto">
            <div className="space-y-2">
              <h3 className="font-bold">Step 1: Download the Extension</h3>
              <p>
                In VS Code, go to the Extensions view (Ctrl+Shift+X), search for
                the extension, and click the Install button.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Step 2: Sign in to your Account</h3>
              <p>
                After the extension is installed, sign in to your account using
                the VS Code command palette (Ctrl+Shift+P) and the command
                &quot;MyAccount: SignIn&quot;.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Step 3: Open a Project</h3>
              <p>
                Open a project in VS Code. You can now access the
                extension&apos;s features from the sidebar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGuide;
