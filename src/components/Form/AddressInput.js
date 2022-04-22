import { useState } from "react";
import axios from "axios";
import Autocomplete from "react-autocomplete";

function AddressInput({ label, address, setAddress }) {
  let [addresses, setAddresses] = useState([]);

  // Get All Address in drop down List from API
  const getAllAddress = async (e) => {
    setAddress({ ...address, label: e.target.value });
    let res = await fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${e.target.value}&type=housenumber&autocomplete=1`,
      {
        method: "GET",
      }
    );
    res = await res.json();
    var addressToSet = []; // //debugger;
    for (var i = 0; i < res?.features?.length; i++) {
      addressToSet.push({
        id: i,
        label: res?.features[i].properties.label,
        label2: `${
          res?.features[i].properties.label +
          "," +
          res?.features[i].properties.context
        }`,
        city: res?.features[i].properties.city,
        PostalCode: res?.features[i].properties.postcode,
        lat: res?.features[i].geometry.coordinates[1],
        lng: res?.features[i].geometry.coordinates[0],
      });
    }
    if (addressToSet.length === res?.features.length) {
      setAddresses(addressToSet);
    }
  };

  // Set Address in  setAddressValue State
  const handleAddressSelect = async (item) => {
    if (item) {
      for (var i = 0; i < addresses.length; i++) {
        if (addresses[i].label2 === item) {
          var postal_code = addresses[i].PostalCode;
          var lat = addresses[i].lat;
          var lng = addresses[i].lng;
          const city = addresses[i].city;
          setAddress({
            ...address,
            label: addresses[i].label,
            label2: addresses[i].label2,
            postal_code,
            lat,
            lng,
            city,
          });
        }
      }
    } else {
      setAddress({
        ...address,
        address: "",
        zip_code: "",
        lat: "",
        long: "",
        city: "",
      });
    }
  };

  return (
    <>
      <label
        className="form-control-label"
        htmlFor={`input-address-${label.split(" ").join("")}`}
      >
        {label}
      </label>

      {/* Semi automated field for address */}
      <Autocomplete
        getItemValue={(item) => item.label2}
        items={addresses}
        value={address?.label}
        onChange={getAllAddress}
        onSelect={handleAddressSelect}
        // Custom styling
        wrapperStyle={{ display: "block" }}
        renderInput={(props) => {
          return (
            <input
              className="form-control form-control-alternative"
              id={`input-address-${label.split(" ").join("")}`}
              placeholder={label}
              {...props}
            />
          );
        }}
        renderMenu={function (items, value, style) {
          return (
            <div
              style={{
                ...style,
                ...this.menuStyle,
                zIndex: 1,
                marginTop: "5px",
              }}
              children={items}
            />
          );
        }}
        renderItem={(item, isHighlighted) => (
          <div
            style={{
              background: isHighlighted ? "lightgray" : "white",
              padding: "10px",
            }}
          >
            {item.label}
          </div>
        )}
      />
    </>
  );
}

export default AddressInput;
