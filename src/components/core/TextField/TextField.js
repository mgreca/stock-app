import './TextField.css'; 

const TextField = ({
  label,
  maxLength,
  name,
  placeholderText,
  type = "text",
  value = "",
}) => {
  return (
    <div className="text-field">
      {label && (
        <label className="text-field__label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="text-field__input"
        id={name}
        maxLength={maxLength}
        name={name}
        placeholder={placeholderText}
        type={type}
        value={value}
      />
    </div>
  );
};

export default TextField;
