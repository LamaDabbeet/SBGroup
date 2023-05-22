import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function News() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      News
    </main>
  );
}

export default News;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}