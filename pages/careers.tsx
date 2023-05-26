import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function CareersPage() {
  const { t } = useTranslation("common");

  return (
    <div className="h-full flex align-center justify-center">
      <h1>{t("careers")}</h1>
    </div>
  );
}

export default CareersPage;
CareersPage.Layout = "Main";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
