import classes from './MarketplaceLink.module.sass'

type MarketplaceLinkProps = {
  marketplaceTitle: string;
  link: string;
};


export default function MarketplaceLink({
  marketplaceTitle,
  link,
}: MarketplaceLinkProps) {
  return <a className={classes.marketplace_link}href={link}>{marketplaceTitle}</a>;
}
