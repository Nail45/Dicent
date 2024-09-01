import { el, mount, setChildren } from "redom";

export const renderCountryList = (arr) => {
  const container = el("div", { class: "container-xl" });
  const countryList = el("div", { class: "list list-group" });
  arr.forEach((element) => {
    const listItem = el(
      "a",
      {
        href: `/${element.name.common}`,
        class: "list-group-item list-group-item-action",
      },
      element.name.official
    );
    mount(countryList, listItem);
  });

  mount(container, countryList);
  mount(document.getElementById("app"), container);
};

export const renderCountryCard = (arr) => {
  const container = el("div", { class: "container" });
  const country = arr[0];
  const card = el("div", {
    class: "card card-country",
  });
  const img = el("img", {
    src: `${country.coatOfArms.svg || country.flags.svg}`,
    class: "card-img-top img",
  });
  const cardBody = el("div", { class: "card-body card-body_country" });
  const cardTitle = el(
    "div",
    { class: "card-title" },
    `Country: ${country.name.official}`
  );
  const cardCapital = el(
    "div",
    { class: "card-capital" },
    `Capital: ${country.capital}`
  );
  const cardFlag = el("img", {
    src: `${country.flags.svg}`,
    class: "card-flag",
  });
  setChildren(cardBody, [cardTitle, cardCapital, cardFlag]);
  setChildren(card, [img, cardBody]);
  mount(container, card);
  mount(document.getElementById("app"), container);
};

export const renderError = () => {
  const errorEl = el(
    "div",
    "Ошибка, перезагрузите страницу или попробуйте позднее",
    { class: "error" }
  );
  mount(document.getElementById("app"), errorEl);
  return errorEl;
};

export const spinner = el("div", { class: "spinner-wrap" }, [
  el("div", { class: "spinner-border spinner", role: "status" }, [
    el("span", { class: "visually-hidden" }, "Загрузка..."),
  ]),
]);
