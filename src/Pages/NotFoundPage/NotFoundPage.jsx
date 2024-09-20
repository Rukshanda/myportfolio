 
const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-[100dvh]">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
              Something&apos;s missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can&apos;t find that page. You&apos;ll find lots to
              explore on the home page.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 border border-zinc-800  bg-black px-6 h-12 rounded-xl text-white hover:bg-transparent hover:text-zinc-400 transition-all duration-300 ease-in-out"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

 
export default NotFoundPage;
