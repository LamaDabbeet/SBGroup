import { GetStaticPaths } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ErrorPage() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("aboutSBGDesc2")}</h1>
    </div>
  );
}

export default ErrorPage;
ErrorPage.Layout = "Main";

export async function getStaticProps({ locale }: any) {
  console.log(`Building slug: ${locale}`);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
