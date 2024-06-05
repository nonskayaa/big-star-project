import banana from "../assets/images/bars/banana_bar.png";
import strawberry from "../assets/images/bars/strawberry_bar.png";
import cranberry from "../assets/images/bars/cranberry_bar.png";
import salt_caramel from "../assets/images/bars/salt_caramel_bar.png";

import { BarInfo } from "../types/BarInfo";

export const barsInfo = new Map<string, BarInfo>([
  [
    "banana",
    {
      flavor: "banana",
      name: "Банан и Шоколад",
      image: banana,
      ingredients:
        "смесь злаковая (рис воздушный зернышки и шарики ( мука рисовая, мука пшеничная, сахар, соль), хлопья овсяные, хлопья ячменные, хлопья пшеничные, хлопья кукурузные дробленые (крупа кукурузная, сахар, соль)), сироп глюкозно-фруктозный, глазурь молочная кондитерская ( сахар, заменитель масла какао нелауринового типа, молоко сухое цельное, какао-порошок, масло какао, сухая молочная сыворотка, эмульгаторы (лецитин соевый, Е476), ароматизатор),банан сушеный резаный, арахис дробленый, масло растительное, патока, белый шоколад(сахар, какао- масло, цельное сухое молоко, эмульгатор- подсолнечный лецитин, ароматизатор),  эмульгатор лецитин соевый, соль, краситель бета каротин, ароматизаторы. Может содержать следы орехов.",
      nutritionFacts: {
        proteins: 4.5,  
        fats: 13,
        carbohydrates: 66,
        kcal: 400,
      },

      marketplaceLinks: {
        wildberries:
          "https://www.ozon.ru/product/batonchiki-zlakovye-myusli-bigstar-s-bananom-i-shokoladom-40-g-h-8-sht-1042667231/?_bctx=CAMQo7_2Lw&asb=Cj1JQ15n0o02%252BjLqswBViVjEDbhmgJCr9dfZc0v0yzu92z%252FoOJY5WMyX%252BiPsPIVR&asb2=HksMFfTpulcXQGpRj_Dl4piJRpBr_aQYx4jwoHcgog1t9mJ5i4vD3tWT8FzjltrCESthuPoA7McdvQubT6gJXAVONYP5bDn9s0Xk-9vXqYkLWBJPbB97u6cznr1YrUc1P08hTEXdlaSzbgi-rmr6qSs_sF7uWxmWYsuGyji1CO2nFw2oPq_8BxMwuDJbWx5F&avtc=1&avte=2&avts=1712575542",
        ozon: "https://www.ozon.ru/product/batonchiki-zlakovye-myusli-bigstar-s-bananom-i-shokoladom-40-g-h-8-sht-1042667231/?_bctx=CAMQo7_2Lw&asb=Cj1JQ15n0o02%252BjLqswBViVjEDbhmgJCr9dfZc0v0yzu92z%252FoOJY5WMyX%252BiPsPIVR&asb2=HksMFfTpulcXQGpRj_Dl4piJRpBr_aQYx4jwoHcgog1t9mJ5i4vD3tWT8FzjltrCESthuPoA7McdvQubT6gJXAVONYP5bDn9s0Xk-9vXqYkLWBJPbB97u6cznr1YrUc1P08hTEXdlaSzbgi-rmr6qSs_sF7uWxmWYsuGyji1CO2nFw2oPq_8BxMwuDJbWx5F&avtc=1&avte=2&avts=1712575542",
        yandexmarket:
          "https://www.ozon.ru/product/batonchiki-zlakovye-myusli-bigstar-s-bananom-i-shokoladom-40-g-h-8-sht-1042667231/?_bctx=CAMQo7_2Lw&asb=Cj1JQ15n0o02%252BjLqswBViVjEDbhmgJCr9dfZc0v0yzu92z%252FoOJY5WMyX%252BiPsPIVR&asb2=HksMFfTpulcXQGpRj_Dl4piJRpBr_aQYx4jwoHcgog1t9mJ5i4vD3tWT8FzjltrCESthuPoA7McdvQubT6gJXAVONYP5bDn9s0Xk-9vXqYkLWBJPbB97u6cznr1YrUc1P08hTEXdlaSzbgi-rmr6qSs_sF7uWxmWYsuGyji1CO2nFw2oPq_8BxMwuDJbWx5F&avtc=1&avte=2&avts=1712575542",
        lenta:
          "https://www.ozon.ru/product/batonchiki-zlakovye-myusli-bigstar-s-bananom-i-shokoladom-40-g-h-8-sht-1042667231/?_bctx=CAMQo7_2Lw&asb=Cj1JQ15n0o02%252BjLqswBViVjEDbhmgJCr9dfZc0v0yzu92z%252FoOJY5WMyX%252BiPsPIVR&asb2=HksMFfTpulcXQGpRj_Dl4piJRpBr_aQYx4jwoHcgog1t9mJ5i4vD3tWT8FzjltrCESthuPoA7McdvQubT6gJXAVONYP5bDn9s0Xk-9vXqYkLWBJPbB97u6cznr1YrUc1P08hTEXdlaSzbgi-rmr6qSs_sF7uWxmWYsuGyji1CO2nFw2oPq_8BxMwuDJbWx5F&avtc=1&avte=2&avts=1712575542",
        sbermarket:
          "https://www.ozon.ru/product/batonchiki-zlakovye-myusli-bigstar-s-bananom-i-shokoladom-40-g-h-8-sht-1042667231/?_bctx=CAMQo7_2Lw&asb=Cj1JQ15n0o02%252BjLqswBViVjEDbhmgJCr9dfZc0v0yzu92z%252FoOJY5WMyX%252BiPsPIVR&asb2=HksMFfTpulcXQGpRj_Dl4piJRpBr_aQYx4jwoHcgog1t9mJ5i4vD3tWT8FzjltrCESthuPoA7McdvQubT6gJXAVONYP5bDn9s0Xk-9vXqYkLWBJPbB97u6cznr1YrUc1P08hTEXdlaSzbgi-rmr6qSs_sF7uWxmWYsuGyji1CO2nFw2oPq_8BxMwuDJbWx5F&avtc=1&avte=2&avts=1712575542",
      },
    },
  ],
  [
    "strawberry",
    {
      flavor: "strawberry",
      name: "Клубника",
      image: strawberry,
      ingredients:
        "смесь злаковая (рис воздушный зернышки и шарики ( мука рисовая, мука пшеничная, сахар, соль), хлопья овсяные, хлопья ячменные, хлопья пшеничные, хлопья кукурузные дробленые (крупа кукурузная, сахар, соль)), сироп глюкозно-фруктозный, глазурь молочная кондитерская ( сахар, заменитель масла какао нелауринового типа, молоко сухое цельное, какао-порошок, масло какао, сухая молочная сыворотка, эмульгаторы (лецитин соевый, Е476), ароматизатор),банан сушеный резаный, арахис дробленый, масло растительное, патока, белый шоколад(сахар, какао- масло, цельное сухое молоко, эмульгатор- подсолнечный лецитин, ароматизатор),  эмульгатор лецитин соевый, соль, краситель бета каротин, ароматизаторы. Может содержать следы орехов.",
      nutritionFacts: {
        proteins: 4.5,
        fats: 13,
        carbohydrates: 66,
        kcal: 400,
      },

      marketplaceLinks: { 
        wildberries: "https://global.wildberries.ru/product?card=165880263",
        ozon: "https://www.ozon.ru/product/batonchiki-zlakovye-myusli-bigstar-s-klubnikoy-40-g-h-8-sht-1042672705/",
        yandexmarket:
          "https://market.yandex.ru/product--batonchik-big-star-zlakovyi-s-klubnikoi-40g/1912899489?sku=102255064988&uniqueId=56619310&do-waremd5=JR0FuWlVqVUTZTJ31Yspdg",
        lenta:
          "https://lenta.com/product/batonchik-zlakovyjj-big-star-s-klubnikojj-rossiya-40g-681860/",
        sbermarket:
          "https://sbermarket.ru/products/23082718-batonchik-big-star-zlakovyy-s-klubnikoy-40-g",
      },
    },
  ],
  [
    "cranberry",
    {
      flavor: "cranberry",
      name: "Клюква",
      image: cranberry,
      ingredients:
        "смесь злаковая (рис воздушный зернышки и шарики ( мука рисовая, мука пшеничная, сахар, соль), хлопья овсяные, хлопья ячменные, хлопья пшеничные, хлопья кукурузные дробленые (крупа кукурузная, сахар, соль)), сироп глюкозно-фруктозный, глазурь молочная кондитерская ( сахар, заменитель масла какао нелауринового типа, молоко сухое цельное, какао-порошок, масло какао, сухая молочная сыворотка, эмульгаторы (лецитин соевый, Е476), ароматизатор),банан сушеный резаный, арахис дробленый, масло растительное, патока, белый шоколад(сахар, какао- масло, цельное сухое молоко, эмульгатор- подсолнечный лецитин, ароматизатор),  эмульгатор лецитин соевый, соль, краситель бета каротин, ароматизаторы. Может содержать следы орехов.",
      nutritionFacts: {
        proteins: 4.5,
        fats: 13,
        carbohydrates: 66,
        kcal: 400,
      },

      marketplaceLinks: {
        wildberries:
          "https://global.wildberries.ru/product?card=211427517&option=338086274",
        ozon: "https://www.ozon.ru/product/batonchiki-zlakovye-myusli-bigstar-s-klyukvoy-40-g-h-4-sht-1042677593/",
        yandexmarket:
          "https://market.yandex.ru/product--batonchik-big-star-zlakovyi-s-kliukvoi-40g/37969839?nid=18082942",
        lenta:
          "https://lenta.com/product/batonchik-zlakovyjj-big-star-s-klyukvojj-rossiya-40g-681861/",
        sbermarket:
          "https://sbermarket.ru/products/23372705-batonchik-zlakovyy-big-star-klyukva-40-g",
      },
    },
  ],
  [
    "salt-caramel",
    {
      flavor: "salt-caramel",
      name: "Солёная карамель",
      image: salt_caramel,
      ingredients:
        "смесь злаковая (рис воздушный зернышки и шарики ( мука рисовая, мука пшеничная, сахар, соль), хлопья овсяные, хлопья ячменные, хлопья пшеничные, хлопья кукурузные дробленые (крупа кукурузная, сахар, соль)), сироп глюкозно-фруктозный, глазурь молочная кондитерская ( сахар, заменитель масла какао нелауринового типа, молоко сухое цельное, какао-порошок, масло какао, сухая молочная сыворотка, эмульгаторы (лецитин соевый, Е476), ароматизатор),банан сушеный резаный, арахис дробленый, масло растительное, патока, белый шоколад(сахар, какао- масло, цельное сухое молоко, эмульгатор- подсолнечный лецитин, ароматизатор),  эмульгатор лецитин соевый, соль, краситель бета каротин, ароматизаторы. Может содержать следы орехов.",
      nutritionFacts: {
        proteins: 4.5,
        fats: 13,
        carbohydrates: 66,
        kcal: 400,
      },

      marketplaceLinks: {
        wildberries:
          "https://global.wildberries.ru/product?card=192096709&tail-location=STR&option=313530169",
        ozon: "https://www.ozon.ru/product/batonchik-zlakovyy-big-star-solenaya-karamel-40g-6sht-1218863615/",
        yandexmarket:
          "https://market.yandex.ru/product--batonchik-zlakovyi-big-star-solenaia-karamel/1912681313",
        lenta:
          "https://lenta.com/product/batonchik-zlakovyjj-big-star-solenaya-karamel-rossiya-40g-681862/",
        sbermarket:
          "https://sbermarket.ru/products/23244338-batonchik-big-star-zlakovyy-s-solenoy-karamel-yu-40-g",
      },
    },
  ],
]);
