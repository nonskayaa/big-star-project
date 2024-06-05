import classes from "./InfoSection.module.sass";

import InfoBlock from "../InfoBlock/InfoBlock";

import { aboutUsInfoBlocks } from "../../../../constants/aboutUsInfoBlocks";

export default function InfoSection() {
  return (
    <div className={classes.info_section__container}>
      {aboutUsInfoBlocks.map((info) => {
        return <InfoBlock info={info} />;
      })}
    </div>
  );
}
