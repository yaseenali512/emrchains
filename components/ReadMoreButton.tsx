import Link from "next/link";

const ReadMoreButton = ({
  linkHref,
  className,
}: {
  linkHref: string;
  className: string;
}) => {
  return (
    <Link
      href={linkHref}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 "
    >
      Read More
    </Link>
  );
};

export default ReadMoreButton;
