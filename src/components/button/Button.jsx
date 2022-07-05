import PropTypes from 'prop-types';
import './button.scss';

const Button = (props) => {
  const {
    axn,
    label,
    size,
    submit,
  } = props;

  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`btn-size-${size}`}
      onClick={
        axn ? () => axn() : null
      }
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  axn: PropTypes.func,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  submit: PropTypes.string,
};

Button.defaultProps = {
  axn: null,
  size: 'normal',
  submit: 'false',
};

export default Button;
