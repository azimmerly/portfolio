import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const NotFound = () => (
  <div className="my-24 flex flex-col items-center justify-center gap-5 text-zinc-800">
    <p className="text-lg font-medium">Looks like you took a wrong turn...</p>
    <Link
      href="/"
      replace
      className="flex items-center justify-center gap-2 rounded-full border-none bg-zinc-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
    >
      <FaArrowRight className="h-4 w-4" />
      Go Back
    </Link>
  </div>
);

export default NotFound;
