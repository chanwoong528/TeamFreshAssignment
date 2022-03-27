import React from "react";
import Board from "../components/Board/Board";
import Business from "../components/Business/Business";
import Contact from "../components/Contact/Contact";
import Description from "../components/Description/Description";
import MainSlider from "../components/Slider/MainSlider";

const boardData = [
  {
    title: "공지사항",
    sub: "Notice",
    boards: [
      { title: "[공고] 신주발행 공고(제3자 배정방식)", created: "2022-03-23" },
      { title: "[공고] 신주발행 공고(제3자 배정방식)", created: "2022-03-15" },
      {
        title: "[공고] 합병에 따른 채권자이의 및 주권제출공고",
        created: "2022-02-28",
      },
    ],
  },
  {
    title: "보도자료",
    sub: "TimF News",
    boards: [],
  },
];
export default function MainPage() {
  return (
    <div>
      <MainSlider />
      <Description />
      <Business />
      <div>
        {boardData.map((board) => (
          <Board title={board.title} sub={board.sub} boards={board.boards} />
        ))}
      </div>
      <Contact />
    </div>
  );
}
