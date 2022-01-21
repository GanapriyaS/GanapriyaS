import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

const Feed = (props) => {
  const { id, caption, media_type, media_url } = props.feed;
  let post;

  switch (media_type) {
    case "VIDEO":
      post = (
        <video
          className="new__img"
          src={media_url}
          type="video/mp4"
          controls
          playsinline
        ></video>
      );
      break;
    case "CAROUSEL_ALBUM":
      post = <img className="new__img" id={id} src={media_url} alt={caption} />;
      break;
    default:
      post = <img className="new__img" id={id} src={media_url} alt={caption} />;
  }

  return (
    <React.StrictMode>
      <SwiperSlide>
        <div className="new__content">
          <div className="new__tag">New</div>
          {post}
          <h3 className="new__title">Haunted House</h3>
          <span className="new__subtitle">Accessory</span>

          <div className="new__prices">
            <span className="new__price">$14.99</span>
            <span className="new__discount">$29.99</span>
          </div>
        </div>
      </SwiperSlide>
    </React.StrictMode>
  );
};

export default Feed;
