import classes from "./NotFoundPage.module.sass";

export default function NotFoundPage() {
  return (
    <div className={classes.not_found_page__container}>
      <h1 className={classes.not_found_page__title}>
        Упс, такой страницы у нас нет...
      </h1>
      <p className={classes.not_found_page__subtitle}>
        Зато у нас есть много вкусных батончиков, переходи скорее в
        <a href="/" className={classes.not_found_page__link}>
          {" "}
          каталог
        </a>
      </p>
    </div>
  );
}
