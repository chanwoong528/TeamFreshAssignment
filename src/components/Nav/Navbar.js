import React, { useState } from "react";
import Daumaddr from "../DaumAPI/DaumAddr";
import "../../styles/components/Navbar.scss";
const mainMenu = [
  {
    title: "회사소개",
    sub: ["회사소개", "협력사 소개", "고객사 소개", "오시는길"],
  },
  { title: "사업소개", sub: ["새벽배송", "화물주선", "풀필먼트", "그로서리"] },
  { title: "공지사항", sub: ["공지사항", "인재채용", "서비스소개"] },
  { title: "보도자료", sub: [] },
];

export default function Navbar() {
  const [modal, setModal] = useState(false);
  return (
    <nav className="nav">
      <dir>
        <img
          style={{ width: "110px" }}
          src="https://www.teamfresh.co.kr/resources/assets/img/logo.png"
          alt=""
        />
      </dir>
      <div>
        <ul className="nav__ul">
          <li className="nav__li" onClick={() => setModal(!modal)}>
            주소검색
          </li>
          {mainMenu.map((item) => (
            <li className="nav__li">{item.title}</li>
          ))}
        </ul>
      </div>
      {modal && <Daumaddr />}
    </nav>
  );
}
