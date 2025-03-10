import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Thanks = () => (
  <div className="my-16 flex flex-col items-center justify-center gap-5">
    <p className="text-lg font-medium">
      <span role="img" aria-label="thanks" className="mr-2 text-xl">
        🤘
      </span>
      Thanks for getting in touch!
    </p>
    <Link
      href="/"
      className="flex items-center justify-center gap-2 rounded-full border-none bg-zinc-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
    >
      <FaArrowRight className="size-4" />
      Go Back
    </Link>
  </div>
);

export default Thanks;
