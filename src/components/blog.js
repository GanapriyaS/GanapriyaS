import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { Component } from "react";
import Axios from "axios";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [],
      isloading: true,
      error: null,
    };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ganapriyakheersagar";

  componentDidMount() {
    Axios.get(this.mediumURL)

      .then((data) => {
        // console.log(data.data)
        const res = data.data.items;
        const posts = res.filter((item) => item.categories.length > 0);

        this.setState(
          (pre) => ({
            item: posts,
            isloading: false,
          }),
          () => {
            // console.log(this.state);
          }
        );
        // console.log(this.state.item);
      })
      .catch((e) => {
        this.setState({ error: JSON.stringify(e) });
        console.log(e);
      });
  }
  render() {
    let post;

    if (this.state.item) {
      post = this.state.item.map((post, index) => (
        <div className="trick__content" key={index}>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <img src={post.thumbnail} alt="" className="trick__img" />
            <h3 className="trick__title">{post.title}</h3>
            <span className="trick__subtitle">{post.pubDate}</span>
            {/* <span className="trick__price">{post.author}</span> */}
            <button className="button trick__button">
              <VisibilityIcon fontSize="small" />
            </button>
          </a>
        </div>
      ));
    }
    if (this.state.error) {
      let error = this.state.error.code
        ? this.state.error.code
        : this.state.error.name;
      let errorMsg = this.state.error.message;
      post = (
        <>
          <h2 className="red text-center">{error}</h2>
          <p className="text-center">{errorMsg}</p>
        </>
      );
    }
    return (
      <section className="section trick" id="blog">
        <h2 className="section__title">Blogs</h2>

        <div className="trick__container container grid">{post}</div>
      </section>
    );
  }
}

export default Blog;
