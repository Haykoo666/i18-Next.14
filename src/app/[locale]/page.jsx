import ExampleClientComponent from "@/components/ExampleClientComponent";
import Link from "next/link";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import LanguageChanger from "@/components/LanguageChanger";

const i18Namespaces = ["home", "common"];
export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18Namespaces);

  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18Namespaces}
    >
      <main>
        <h1 className="text-2xl">{t("header")}</h1>
        <br />
        <ExampleClientComponent name="Mathew" />
        <br />
        <Link
          href="/about"
          className="  block mt-8 rounded-md p-4 text-center bg-emerald-800"
        >
          {t("common:about_us")}
        </Link>
        <br />
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}
