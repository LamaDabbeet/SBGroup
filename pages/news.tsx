import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function NewsPage() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("news")}</h1>
    </div>
  );
}

export default NewsPage;
NewsPage.Layout = "Main";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
