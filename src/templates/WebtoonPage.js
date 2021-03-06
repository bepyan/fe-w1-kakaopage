import { GenreNavigator } from "../components/navigators/GenreNavigator.js";
import { AppDownloadSection } from "../components/sections/AppDownloadSection.js";
import { WebtoonDaliyTab } from "./WebtoonDaliyTab.js";
import { WebtoonHomeTab } from "./WebtoonHomeTab.js";
import { WebtoonWebtoonTab } from "./WebtoonWebtoonTab.js";

export const WebtoonPage = () => {
  const $root = document.createElement("main");

  const urlSearchParams = new URLSearchParams(window.location.search);
  const { genre } = Object.fromEntries(urlSearchParams.entries());

  $root.appendChild(GenreNavigator());

  if (genre === "홈") {
    $root.appendChild(WebtoonHomeTab());
  } else if (genre === "요일연재") {
    $root.appendChild(WebtoonDaliyTab());
  } else if (genre === "웹툰") {
    $root.appendChild(WebtoonWebtoonTab());
  }

  $root.appendChild(AppDownloadSection());

  return $root;
};
