import classes from './ProductMarketplaceInfo.module.sass'
import { MarketplaceLinksList} from "../../../../types/MarketplaceLinksList";

import LinkSlider from './LinkSlider/LinkSlider';

export default function ProductMarketplaceInfo({
  marketplaceLinks,
}: {
  marketplaceLinks: MarketplaceLinksList;
}) {
  return (
    <div className={classes.product__marketplace_info_container}>
      <h2 className={classes.product__marketplace_info_title}>А где купить?</h2>
      <LinkSlider linksList={marketplaceLinks} />
    </div>
  );
}
