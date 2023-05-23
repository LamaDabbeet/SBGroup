import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ErrorPage() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("errorPage")}</h1>
    </div>
  );
}

export default ErrorPage;
ErrorPage.Layout = "Main";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
