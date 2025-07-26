import { redirect, RedirectType } from "next/navigation";

const NotFound = async () => {
  redirect("/", RedirectType.replace);
};

export default NotFound;
