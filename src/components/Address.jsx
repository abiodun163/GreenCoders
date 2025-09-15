import { HiOutlinePencil } from "react-icons/hi2";
import { FiX } from "react-icons/fi";

export default function Address({
  value,
  size = 20,
  selected,
  onChange,
  label,
  type,
  location,
  tel,
}) {
  const id = `radio-${value}`;
  function handleToggleCheckBox(e) {
    // A state lifting function to pass the value to parent component
    onChange(e.target.value); 
  }

  return (
    <div className="address-container">
      <input
        id={id}
        className="radio-btn"
        type="radio"
        name="address"
        value={value}
        checked={selected === value}
        onChange={handleToggleCheckBox}
        style={{ display: "none" }} 
      />

      <span className="custom-radio"></span>
      <label className="address-label" htmlFor={id}>
        <div className="address-contents">
          <div className="address-name">
            <p>{label}</p>
            <span className="address-type">{type}</span>
          </div>
          <p className="address-location">{location}</p>
          <p className="address-tel">{tel}</p>
        </div>
        <div className="address-actions">
          <HiOutlinePencil className="cursor" size={size} />
          <FiX className="cursor" size={size + 4} />
        </div>
      </label>
    </div>
  );
}
