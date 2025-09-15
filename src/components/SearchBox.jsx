import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import PropTypes from "prop-types";

export default function MainSearchBox({
  cancelBtnColor,
  placeholder = "Search",
  bgColor = "hsl(0, 0%, 95%)",
  onSetValue,
  color = "hsl(0, 0%, 70%)",
  size = 20,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  function handleDropdown(e) {
    if (open && !e.currentTarget?.contains(e.relatedTarget)) {
      setOpen(false);
    }
  }

  function handleOnChange(e) {
    setValue(e.target.value);
    // A state lifting function to pass the value to parent component

    onSetValue(e.target.value);

    setOpen(true);
  }
  return (
    <div style={{backgroundColor: bgColor}} className="search-box-container" onBlurCapture={handleDropdown}>
      <span type="submit">
        <FiSearch size={size} color={color} />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />

      <ul className={`dropdown ${value && open ? "show" : ""}`}>
        <li>
          <p className="dropdown-img"></p>
          <div className="dropdown-item">
            <div className="dropdown-title">
              Apple iphone 14 Pro 1TB Gold (MQ2V3DR)
            </div>
            <div className="dropdown-price">$1,199.00</div>
            <MdCancel
              className="dropdown-cancel"
              size={size}
              color={cancelBtnColor}
            />
          </div>
        </li>
        <li>
          <p className="dropdown-img"></p>
          <div className="dropdown-item">
            <div className="dropdown-title">
              Apple iphone 14 Pro 1TB Gold (MQ2V3DR)
            </div>
            <div className="dropdown-price">$1,199.00</div>
            <MdCancel
              className="dropdown-cancel"
              size={size}
              color={cancelBtnColor}
            />
          </div>
        </li>
        <li>
          <p className="dropdown-img"></p>
          <div className="dropdown-item">
            <div className="dropdown-title">
              Apple iphone 14 Pro 1TB Gold (MQ2V3DR)
            </div>
            <div className="dropdown-price">$1,199.00</div>
            <MdCancel
              className="dropdown-cancel"
              size={size}
              color={cancelBtnColor}
            />
          </div>
        </li>
        <li>
          <p className="dropdown-img"></p>
          <div className="dropdown-item">
            <div className="dropdown-title">
              Apple iphone 14 Pro 1TB Gold (MQ2V3DR)
            </div>
            <div className="dropdown-price">$1,199.00</div>
            <MdCancel
              className="dropdown-cancel"
              size={size}
              color={cancelBtnColor}
            />
          </div>
        </li>
        <li>
          <p className="dropdown-img"></p>
          <div className="dropdown-item">
            <div className="dropdown-title">
              Apple iphone 14 Pro 1TB Gold (MQ2V3DR)
            </div>
            <div className="dropdown-price">$1,199.00</div>
            <MdCancel
              className="dropdown-cancel"
              size={size}
              color={cancelBtnColor}
            />
          </div>
        </li>
        <li>
          <p className="dropdown-img"></p>
          <div className="dropdown-item">
            <div className="dropdown-title">
              Apple iphone 14 Pro 1TB Gold (MQ2V3DR)
            </div>
            <div className="dropdown-price">$1,199.00</div>
            <MdCancel
              className="dropdown-cancel"
              size={size}
              color={cancelBtnColor}
            />
          </div>
        </li>
        <li>
          <p className="dropdown-img"></p>
          <div className="dropdown-item">
            <div className="dropdown-title">
              Apple iphone 14 Pro 1TB Gold (MQ2V3DR)
            </div>
            <div className="dropdown-price">$1,199.00</div>
            <MdCancel
              className="dropdown-cancel"
              size={size}
              color={cancelBtnColor}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}


MainSearchBox.propTypes = {
  cancelBtnColor: PropTypes.string,
  placeholder: PropTypes.string,
  onSetValue: PropTypes.func,
  bgColor: PropTypes.string,
  size: PropTypes.number,
}

