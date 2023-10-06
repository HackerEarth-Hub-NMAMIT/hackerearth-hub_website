import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./OurTeam.css";
import data from "../../utils/member.json";
import data1 from "../../utils/member1.json";
import data2 from "../../utils/member2.json";
import { sliderSettings } from "../../utils/common";
import EventCard from "../../components/EventCard/MemberCard";
const OurTeam = () => {
  return (
    <section className="r-wrapper jai">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Our</span>
          <span className="primaryText">Team</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <EventCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data1.map((card, i) => (
            <SwiperSlide key={i}>
              <EventCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data2.map((card, i) => (
            <SwiperSlide key={i}>
              <EventCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default OurTeam


const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};