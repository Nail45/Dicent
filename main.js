import {
  renderCountryList,
  renderCountryCard,
  renderError,
  spinner,
} from "./render-Country";
import "./style.css";
import { mount, unmount } from "redom";
import Navigo from "navigo";

const router = new Navigo("/");

const getCountries = async () => {
  mount(document.getElementById("app"), spinner);
  return await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      unmount(document.getElementById("app"), spinner);
      renderCountryList(data);
    });
};

const getCountry = async (data) => {
  mount(document.getElementById("app"), spinner);
  await fetch(`https://restcountries.com/v3.1/name/${data.url}`)
    .then((res) => res.json())
    .then((data) => {
      unmount(document.getElementById("app"), spinner);
      renderCountryCard(data);
    });
};

router.on("/", async () => {
  try {
    await getCountries();
  } catch (error) {
    renderError();
  }
});

router.on("/:country", async (data) => {
  try {
    await getCountry(data);
  } catch (error) {
    renderError();
  }
});

router.resolve();
