import React, { useState, useRef, useEffect } from "react";

import "../../styles/components/MainSlider.scss";

const imgs = [
  "https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/background1.png",
  "https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/background3.png",
  "https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/background2.png",
];
const adText = [
  { title: "대한민국 NO.1", sub: "Cold Chain Platform" },
  { title: "TIMF", sub: "Connect Freshness" },
  { title: "COMMERCE TREND", sub: "신선식품 물류를 선도하는 시스템 구축" },
];
export default function MainSlider() {
  const imgref = useRef();
  const [curimg, setCurimg] = useState(0);
  const [imgHeight, setImgHeight] = useState();
  useEffect(() => {
    setImgHeight(imgref.current.height);
    window.addEventListener("resize", () => {
      setImgHeight(imgref.current.height);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setImgHeight(imgref.current.height);
      });
    };
  }, [imgHeight]);
  const onClickPrev = () => {
    setCurimg((cur) => {
      if (cur === 0) {
        return setCurimg(imgs.length - 1);
      } else {
        return setCurimg(cur - 1);
      }
    });
  };
  const onClickNext = () => {
    setCurimg((cur) => {
      if (cur === imgs.length - 1) {
        return setCurimg(0);
      } else {
        return setCurimg(cur + 1);
      }
    });
  };
  return (
    <div className="slider__con" style={{ height: imgHeight }}>
      <button className="slider__btn prev__btn" onClick={onClickPrev}>
        {"<"}
      </button>
      <button className="slider__btn next__btn" onClick={onClickNext}>
        {">"}
      </button>

      {imgs.map((img, index) => (
        <img
          className={`slider__img`}
          ref={imgref}
          src={img}
          onLoad={() => {
            setImgHeight(imgref.current.height);
          }}
          style={{
            opacity: curimg === index ? 1 : 0,
            position: "absolute",
          }}
        />
      ))}
      {adText.map((item, index) => (
        <div
          className="slider__text"
          style={{ opacity: curimg === index ? 1 : 0 }}
        >
          <h2>{item.title}</h2>
          <h1>{item.sub}</h1>
        </div>
      ))}

      <div className="slider__indicator__con">
        {imgs.map((img, index) => (
          <div
            className="slider__indicator"
            style={{ borderColor: curimg === index ? "white" : "lightgrey" }}
          ></div>
        ))}
      </div>
    </div>
  );
}
