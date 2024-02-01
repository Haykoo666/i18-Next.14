"use client";

import { useTranslation } from "react-i18next";

export default function ExampleClientComponent({ name = "Jon Doe" }) {
  const { t } = useTranslation();

  // return <p>Have a great day, {name}!</p>;
  return <p>{t("subHeader", { name })}</p>;
}
