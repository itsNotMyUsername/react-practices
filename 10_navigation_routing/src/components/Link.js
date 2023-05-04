import classnames from "classnames";
import useNavigation from "../hooks/useNavigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { currentPath, navigate } = useNavigation();

  const classes = classnames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    navigate(to);
  };

  return (
    <div>
      <a className={classes} onClick={handleClick} href={to}>
        {children}
      </a>
    </div>
  );
};

export default Link;
