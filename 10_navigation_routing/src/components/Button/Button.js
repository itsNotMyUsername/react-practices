import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({
  outline,
  rounded,
  primary,
  secondary,
  success,
  warning,
  danger,
  children,
}) => {
  const finalClassName = classNames("px-3 py-1.5 border", {
    "bg-blue-500 border-blue-600 text-white": primary,
    "bg-gray-900 border-gray-900 text-white": secondary,
    "bg-green-500 border-green-500 text-white": success,
    "bg-yellow-400 border-yellow-500 text-white": warning,
    "bg-red-500 border-red-600 text-white": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-500": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-500": outline && warning,
    "text-red-500": outline && danger,
  });

  return <button className={finalClassName}>{children}</button>;
};

Button.propTypes = {
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  dandger: PropTypes.bool,
  validateVariant: ({ primary, secondary, success, warning, dandger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!dandger);
    if (count > 1) {
      return new Error("failed");
    }
  },
};

export default Button;
