import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function About() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      About
    </main>
  );
}

export default About;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}