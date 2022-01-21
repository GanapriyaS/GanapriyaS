import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);
const InstaFeeds = ({ ...props }) => {
  const [feeds, setFeedsData] = useState([]);
  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(
    "IGQVJYc21OR1ZAIUkRCRjhtaTZAST0ZAMOHBkZADdyZAVI4ZA250emxDZAWtwUmExNERYeWs1MG1vNHVYaDMtTWhhZAHQtVlQ0dzUwNkdodFpSOG04REw4a1FERXF4WERyZAzR5R2tFSnFiV1U0SFM2OENwUFlCdAZDZD"
  );
  tokenProp.current =
    "IGQVJYc21OR1ZAIUkRCRjhtaTZAST0ZAMOHBkZADdyZAVI4ZA250emxDZAWtwUmExNERYeWs1MG1vNHVYaDMtTWhhZAHQtVlQ0dzUwNkdodFpSOG04REw4a1FERXF4WERyZAzR5R2tFSnFiV1U0SFM2OENwUFlCdAZDZD";

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQVJWbUZA2dHpHN1h0NWcyZA3pwdzc4SUhrRGJoUnJ0TldfTktEblNXdWJyendjT3E5Ti15OW10OWNYX25rTmtzQUdtVjcwWmhmckliaHBWMUZAVMUZAWOUhLY19sZAFlOUkZANeG1ad2lGcUVpc2diZAGg4dQZDZD`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
            console.log("adsnfkldsaflkjsa");
          });
      } catch (err) {
        console.log("error", err);
      }
    }

    // manually call the fecth function
    fetchInstagramPost();

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [props.limit]);

  return (
    <section className="section new">
      <h2 className="section__title">My Interests</h2>
      <div className="new__container container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
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
          {feeds.map((feed) => (
            <SwiperSlide key={feed.id}>
              <div className="new__content">
                <img
                  className="new__post"
                  id={feed.id}
                  src={feed.media_url}
                  alt={feed.caption}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InstaFeeds;
