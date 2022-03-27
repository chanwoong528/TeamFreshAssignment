import React from "react";
import "../../styles/components/Description.scss";

const desc = [
  {
    title: "대한민국 No.1 Cold-Chain Platform",
    des: "팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를 제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를 위한 설비/역량을 보유하고 있습니다.",
  },
];
export default function Description() {
  return (
    <div className="desc__con">
      {desc.map((item) => (
        <>
          <h1 style={{ marginBottom: "20px" }}>{item.title}</h1>
          <h3>{item.des}</h3>
        </>
      ))}
    </div>
  );
}
