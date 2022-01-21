import * as React from "react";
import new1 from "../assets/img/new1-img.jpg";
import new2 from "../assets/img/new2-img.jpg";
import new3 from "../assets/img/new3-img.jpg";
import new4 from "../assets/img/new4-img.jpg";

import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

export default function Repo() {
  return (
    <section className="section new">
      <h2 className="section__title">Feel free to contribute repositories</h2>
      <div className="new__container container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesPerGroup: 1,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 3,
            },
          }}
          className="mySwiper "
          style={{ color: "white" }}
        >
          <SwiperSlide>
            <div className="new__content new_content_height">
              <img src={new1} alt="" className="new__img"></img>
              <h3 className="new__subtitle">
                Programs to implement Data Structures and Algorithms
              </h3>

              <a className="button new__button" href="/#">
                <CodeRoundedIcon fontSize="small" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="new__content new_content_height">
              <img src={new2} alt="" className="new__img" />
              <h3 className="new__subtitle">
                Computer Networks related programs and socket programming
              </h3>

              <a className="button new__button" href="/#">
                <CodeRoundedIcon fontSize="small" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="new__content new_content_height">
              <img src={new3} alt="" className="new__img" />
              <h3 className="new__subtitle">
                Website to learn basic web development fundamentals such as
                HTML, CSS, JavaScript, jQuery and XML with hands on live
                examples.
              </h3>

              <a className="button new__button" href="/#">
                <CodeRoundedIcon fontSize="small" />
              </a>

              <a className="button new__button1" href="/#">
                <VisibilityRoundedIcon fontSize="small" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="new__content new_content_height">
              <img src={new4} alt="" className="new__img" />
              <h3 className="new__subtitle">
                Programs related to System Programming and Operating System such
                as scheduling , page replacement algorithmns so on.
              </h3>

              <a className="button new__button" href="/#">
                <CodeRoundedIcon fontSize="small" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
