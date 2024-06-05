import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { barsInfo } from "../../constants/barsInfo";
import { BarInfo } from "../../types/BarInfo";

import classNames from "classnames";

import classes from "./BarInfoPage.module.sass";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductMarketplaceInfo from "./components/ProductMarketplaceInfo/ProductMarketplaceInfo";

export default function BarInfoPage() {
  const { flavor } = useParams();

  const [barInfo, setBarInfo] = useState<BarInfo>();

  useEffect(() => {
    if (flavor) setBarInfo(barsInfo.get(flavor));
  }, [flavor]);

  return (
    <>
      {barInfo ? (
        <div
          className={classNames(
            classes.product_page__container,
            classes[barInfo.flavor]
          )}
        >
          <div className={classes.product__container}>
            <ProductInfo info={barInfo} />

            <div className={classes.product__img_wrapper}>
              <img src={barInfo?.image} alt="product" />
            </div>
          </div>
          <ProductMarketplaceInfo marketplaceLinks={barInfo.marketplaceLinks} />
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
