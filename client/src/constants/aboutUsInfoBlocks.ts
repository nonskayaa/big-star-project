import formula_img from "../assets/images/about_us_images/1.png";
import info_video_2 from "../assets/video/posters_video/video640x640_2.mp4";
import healthy_img from "../assets/images/about_us_images/3.png";
import info_video_1 from "../assets/video/posters_video/video640x640_1.mp4";

import { AboutUsInfoBlockType } from "../types/AboutUsInfoBlockType";

export const aboutUsInfoBlocks: AboutUsInfoBlockType[] = [
  {
    title:
      "МЫ РЕШИЛИ СОЗДАТЬ ИДЕАЛЬНЫЙ ПЕРЕКУС ДЛЯ ВСЕХ, ИСПОЛЬЗУЯ ПРОСТУЮ ФОРМУЛУ",
    image: formula_img,
  },
  {
    title: "Вкусно",
    text: "Каждый батончик мы делаем с душой, поэтому они получаются такие вкусные. А Фрукты и ягоды – бережно обработанные по специальной технологии сублимации, сохраняют гораздо больше витаминов и насыщенности , чем при любом другом виде сушки.",
    video: info_video_2,
  },
  {
    title: "Полезно",
    text: "Цельные злаки – основной ингредиент всех наших продуктов, ценный источник медленных углеводов и клетчатки, зарядит вас энергией для новых свершений и надолго подарит ощущение сытости.",
    image: healthy_img,
  },
  {
    title: "Натурально",
    text: "Качественные ингредиенты и натуральный состав без ГМО, красителей и усилителей вкуса ждёт вас в каждой вариации готового завтрака, от классической каши до злакового батончика.",
    video: info_video_1,
  },
];
