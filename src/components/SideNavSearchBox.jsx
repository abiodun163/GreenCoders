import { useState } from "react";

export default function SideNavSearchBox({
  placeholder = "Search",
  onSetValue,
  bgColor = "hsl(0, 0%, 95%)",
}) {
  const [value, setValue] = useState("");

  function handleOnChange(e) {
    setValue(e.target.value);
    // A state lifting function to pass the value to parent component
    onSetValue(e.target.value);
  }
  return (
    <div style={{ backgroundColor: bgColor }} className="search-box-container">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}


SideNavSearchBox.propTypes = {
  cancelBtnColor: PropTypes.string,
  placeholder: PropTypes.string,
  onSetValue: PropTypes.func,
  bgColor: PropTypes.string,
}