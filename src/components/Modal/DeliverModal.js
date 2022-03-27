import React, { useState } from "react";

export default function DeliverModal({ zip, addr }) {
  const [zipcode, setZipcode] = useState(zip);
  const [addre, setAddre] = useState(addr);
  const [extra, setExtra] = useState("");
  const onSubmitAddr = async (e) => {
    e.preventDefault();
    try {
      console.log(addr);
      const res = await fetch(
        "https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ addrBasic: addre }),
        }
      );
      const data = await res.json();
      if (data.result.delyverYn === 1) {
        //deliver ok
        alert(data.result.delyverResult);
      } else {
        alert(data.result.delyverResult);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      DeliverModal
      <form onSubmit={onSubmitAddr}>
        <div>
          <input
            type="text"
            value={zipcode}
            onChange={(e) => {
              setZipcode(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={addre}
            onChange={(e) => {
              setAddre(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={extra}
            onChange={(e) => {
              setExtra(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
