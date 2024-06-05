import { makeAutoObservable } from "mobx";

import { Promotion } from "../types/Promotion";

import { toJS } from "mobx";

class PromotionStore {
  promotions: Promotion[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setPromotions(newPromotions: Promotion[]) {
    this.promotions = newPromotions;
  }

  get promotionsList() {
    return this.promotions;
  }
}

export default new PromotionStore();
