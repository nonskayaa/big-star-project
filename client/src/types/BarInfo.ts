import { NutritionFacts } from "./NutritionFacts";
import { MarketplaceLinksList } from "./MarketplaceLinksList";

export type BarInfo = {
  flavor: string;
  name: string;
  image: string;
  ingredients: string;
  nutritionFacts: NutritionFacts;
  marketplaceLinks: MarketplaceLinksList;
};
