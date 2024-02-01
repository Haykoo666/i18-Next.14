import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Link from "next/link";

const i18Namespaces = ["about", "common"];

const AboutPage = async ({ params: {locale} }) => {
  const { t, resources } = await initTranslations(locale, i18Namespaces);
  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18Namespaces}
    >
      <div>
        <h2 className="text-2xl mb-4">{t("common:about_us")}</h2>
        <p>
          <mark>{t("attention")}</mark>
          <br />
          {t("about_info")}
        </p>
        <hr />
        <Link
          href="/"
          className="bg-emerald-800 p-4 mt-8 block rounded-lg text-center"
        >
          {t("back_btn")}
        </Link>
      </div>
    </TranslationsProvider>
  );
};

export default AboutPage;
