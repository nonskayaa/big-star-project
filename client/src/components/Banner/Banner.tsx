import classes from "./Banner.module.sass";

import poster_1 from "../../assets/images/posters/poster_1.png";
import poster_2 from "../../assets/images/posters/poster_2.png";
import poster_3 from "../../assets/images/posters/poster_3.png";
import poster_4 from "../../assets/images/posters/poster_4.png";
import poster_5 from "../../assets/images/posters/poster_5.png";
import poster_6 from "../../assets/images/posters/poster_6.png";

import banner_video_1 from "../../assets/video/posters_video/video480x640_1.mp4";
import banner_video_2 from "../../assets/video/posters_video/video480x640_2.mp4";

import video_4 from "../../assets/video/posters_video/video_4.mp4";

export default function Banner() {
  return (
    <div className={classes.banner__container}>
      <img src={poster_1} alt="" />
      <video src={banner_video_1} autoPlay={true} loop muted></video>
      <img src={poster_4} alt="" />
      <img src={poster_5} alt="" />
      <img src={poster_2} alt="" />
      <img src={poster_3} alt="" />
      <video src={banner_video_2} autoPlay={true} loop muted></video>
      <img src={poster_6} alt="" />
    </div>
  );
}
