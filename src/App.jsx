import { useState } from "react";
import "./App.css";
import MainSearchBox from "./components/SearchBox";
import Address from "./components/Address";
import Button from "./components/Button";

const addresses = [
  {
    value: "office",
    label: "Head Office",
    type: "OFFICE",
    location: "123 Main St, Anytown, USA",
    tel: "(704) 555-1234",
  },
  {
    value: "home",
    label: "Home",
    type: "HOME",
    location: "456 Oak St, Smalltown, USA",
    tel: "(704) 555-5678",
  },
  {
    value: "warehouse",
    label: "Warehouse",
    type: "WORK",
    location: "789 Pine St, Bigcity, USA",
    tel: "(704) 555-9876",
  },
];

function App() {
  const [selectedAddress, setSelectedAddress] = useState("");
  return (
    <div className="App">
      <div className="container">
        
        <MainSearchBox />
        <br />
        {addresses.map((addr) => (
          <Address
            key={addr.value}
            value={addr.value}
            selected={selectedAddress}
            onChange={setSelectedAddress}
            label={addr.label}
            type={addr.type}
            location={addr.location}
            tel={addr.tel}
          />
        ))}
        <Button />
      </div>
    </div>
  );
}

export default App;
