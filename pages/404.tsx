import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function NotFoundPage() {
  return (
    <div>
      <h1>Not Found!</h1>
    </div>
  );
}

export default NotFoundPage;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}