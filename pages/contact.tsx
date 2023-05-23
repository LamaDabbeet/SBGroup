import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ContactPage() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("contact")}</h1>
    </div>
  );
}

export default ContactPage;
ContactPage.Layout = "Main";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
