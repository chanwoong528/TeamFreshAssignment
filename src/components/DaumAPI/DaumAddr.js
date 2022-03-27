import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import "../../styles/components/modal.scss";
import DeliverModal from "../Modal/DeliverModal";
const Daumaddr = () => {
  const [modal, setModal] = useState(false);
  const [zip, setZip] = useState("");
  const [addr, setAddr] = useState("");
  const handleComplete = (data) => {
    let fullAddress = data.address;

    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    //fullAddress -> 전체 주소반환
    console.log(fullAddress);
    setAddr(fullAddress);
    setZip(data.zonecode);

    setModal(true);
  };
  return (
    <div className="modal">
      <DaumPostcode onComplete={handleComplete} className="post-code" />
      {modal && <DeliverModal zip={zip} addr={addr} />}
    </div>
  );
};

export default Daumaddr;
