import React from "react";
import "../../styles/components/Business.scss";
const data = [
  {
    title: "새백배송",
    body: "팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다. 배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다.",
    img: "https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card1.png",
  },
  {
    title: "화물주선",
    body: "화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다. 팀프레시의 데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.",
    img: "https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card2.png",
  },
  {
    title: "풀필먼트",
    body: `풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운 기업을 위한 서비스입니다.
각 화주사별 요구사항을 매뉴얼화해 관리합니다.`,
    img: "https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card3.jpg",
  },
  {
    title: "그로서리",
    body: `급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다. 기존 물류망을 활용해 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.`,
    img: "https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card4.jpg",
  },
];
export default function Business() {
  return (
    <main className="bs__main">
      <div className="bs__header">
        <h1>TIMF BUSINESS</h1>
      </div>
      <div className="card__con">
        {data.map((item) => (
          <div className="card">
            <img className="card__img" src={item.img} alt={item.title} />
            <div className="card__body">
              <h3>{item.title}</h3>
              <span style={{ whiteSpace: "pre-wrap" }}>{item.body}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
