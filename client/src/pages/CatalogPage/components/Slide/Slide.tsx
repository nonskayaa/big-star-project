import { ProductSlideInfoType } from "../../../../types/ProductSlideInfoType";
import AboutBarBtn from "../AboutBarBtn/AboutBarBtn";
import classes from "./Slide.module.sass";

import classNames from "classnames";

import { motion } from "framer-motion";

import BananaBackground from "./FruitsBackgrounds/BananaBackground/BananaBackground";
import StrawberryBackground from "./FruitsBackgrounds/StrawberryBackground/StrawberryBackground";
import CranberryBackground from "./FruitsBackgrounds/CranberryBackground/CranberryBackground";
import SaltCaramelBackground from "./FruitsBackgrounds/SaltCaramelBackground/SaltCaramelBackground";

import setAnimation from "../../../../helpers/setAnimation";

type SlideProps = {
  productInfo: ProductSlideInfoType;
  isSlideActive: boolean;
};

type BackgroundComponent = {
  (props: { isActive: boolean }): JSX.Element;
};

const backgrounds: Record<string, BackgroundComponent> = {
  banana: BananaBackground,
  cranberry: CranberryBackground,
  strawberry: StrawberryBackground,
  "salt-caramel": SaltCaramelBackground,
};

export default function Slide({ productInfo, isSlideActive }: SlideProps) {
  function setBackground() {
    const Component = backgrounds[productInfo.title];

    if (Component) return <Component isActive={isSlideActive} />;

    return <></>;
  }

  const titleVars = {
    open: {
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 14,
        delay: 0.2,
      },
    },
    closed: {
      scale: 0,
      y: "20vh",
      transition: {
        type: "spring",
        damping: 14,
        delay: 0.2,
      },
    },
  };

  const imgVars = {
    open: {
      rotate: -6,
      transition: {
        type: "spring",
      },
    },
    closed: {
      rotate: 5,
    },
  };

  return (
    <div
      className={classNames(
        classes.slide_container,
        classes[productInfo.title]
      )}
    >
      <div className={classes.slide__content_container}>
        <h1 className={classes.flavor_title}>{productInfo.title}</h1>
        <motion.img
          src={productInfo.image}
          alt="bar"
          className={classes.bar_image}
          variants={imgVars}
          animate={setAnimation(isSlideActive)}
        />

        <AboutBarBtn link={`info\\${[productInfo.title]}`} />
        {/* <p className={classes.flavor_text}>{productInfo.text}</p> */}
      </div>
      {setBackground()}
    </div>
  );
}
