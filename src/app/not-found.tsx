import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const NotFound = () => (
  <div className="flex grow flex-col items-center justify-center text-center">
    <h1 className="text-5xl leading-none font-semibold tracking-tight text-neutral-900 dark:text-white">
      404
    </h1>
    <p className="mt-3 text-lg text-neutral-500 dark:text-neutral-400">
      Page not found.
    </p>
    <Link
      href="/"
      className="text-md mt-6 flex items-center gap-2 text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white"
    >
      Go back <FaArrowRight className="size-3.5" />
    </Link>
  </div>
);

export default NotFound;
