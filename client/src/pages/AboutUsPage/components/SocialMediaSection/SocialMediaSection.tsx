import OkIcon from "../../../../components/icons/OkIcon";
import VkIcon from "../../../../components/icons/VkIcon";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import classes from "./SocialMediaSection.module.sass";

export default function SocialMediaSection() {
  return (
    <div className={classes.social_media_section__container}>

      <h2 className={classes.social_media_section__title}>
        Мы в социальных сетях
      </h2>

      <p className={classes.social_media_section__subtitle}>
        ЗАБУДЬТЕ О КОМПРОМИССАХ И ОГРАНИЧЕНИЯХ, СТРЕМИТЕСЬ К БОЛЬШЕМУ И
        ДОБИВАЙТЕСЬ СВОИХ ЦЕЛЕЙ ВМЕСТЕ С BIG STAR
      </p>

      <div className={classes.social_media_section__icons}>
        <VkIcon />
        <OkIcon />
      </div>

      <PhotoSlider />
    </div>
  );
}
