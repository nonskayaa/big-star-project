import { AboutUsInfoBlockType } from "../../../../types/AboutUsInfoBlockType";
import classes from "./InfoBlock.module.sass";

export default function InfoBlock({ info }: { info: AboutUsInfoBlockType }) {
  return (
    <div className={classes.info_block__container}>
      {info.image && (
        <img
          src={info.image}
          alt="person"
          className={classes.info_block__content}
        />
      )}

      {info.video && (
        <video
          src={info.video}
          autoPlay={true}
          loop
          muted
          className={classes.info_block__content}
        ></video>
      )}
      <div className={classes.info_block__text_container}>
        <h4 className={classes.info_block__title}>{info.title}</h4>
        {info.text && <p className={classes.info_block__text}>{info.text}</p>}
      </div>
    </div>
  );
}
