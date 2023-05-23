import { GetStaticPaths } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function NotFoundPage() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("pageNotFound")}</h1>
    </div>
  );
}

export default NotFoundPage;
NotFoundPage.Layout = "Main";

export async function getStaticProps({ locale }: any) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
