import classes from "./PromotionsPage.module.sass";

import PromoCardSlider from "./components/PromoCardSlider/PromoCardSlider";
import NewsletterSection from "./components/NewsletterSection/NewsletterSection";


export default function PromotionsPage() {
  return (
    <div className={classes.promotions_page__container}>
      <div className={classes.promotions_section__container}>
        <h1 className={classes.promotions__title}>А где купить выгодно ?</h1>
        <div className={classes.promotions__container}>
          <PromoCardSlider/>
        </div>
      </div>
      <div className={classes.newsletter_section__container}>
        <NewsletterSection />
      </div>
    </div>
  );
}
