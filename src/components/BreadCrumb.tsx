import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();

  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  return (
    <nav className="flex items-center text-sm text-gray-500">
      <ul className="flex items-center">
        {/* Home Link */}
        <li>
          <Link to="/" className="text-heading">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          // Generate the path up to this segment
          const pathToSegment = `/${pathSegments
            .slice(0, index + 1)
            .join("/")}`;
          const isLastSegment = index === pathSegments.length - 1;

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {isLastSegment ? (
                <span className="text-brandblue capitalize">
                  {segment.replace(/-/g, " ")}{" "}
                  {/* Replace dashes in slug with spaces */}
                </span>
              ) : (
                <Link to={pathToSegment} className="text-heading  capitalize">
                  {segment.replace(/-/g, " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumb;
