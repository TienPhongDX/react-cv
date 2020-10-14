import React from "react";

function Post() {
  return (
    <article className="news-item box">
      <div className="news-item__image-wrap overlay overlay--45">
        <div className="news-item__date">
          15<span>Jun</span>
        </div>
        <a className="news-item__link" href="single-post.html"> </a>
        <img
          className="cover lazyload"
          src="https://source.unsplash.com/1600x900/?react"
          alt=""
        />
      </div>
      <div className="news-item__caption">
        <h2 className="title title--h4">
          Cách tôi làm cho ứng dụng React của mình nhanh hơn 4 lần
        </h2>
        <p>
          Gần 60% người dùng rời đi nếu trang không tải trong vòng 3 giây. 80%
          người dùng không quay lại.
        </p>
      </div>
    </article>
  );
}

export default Post;
