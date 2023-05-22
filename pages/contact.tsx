import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Contact() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      contact us
    </main>
  );
}

export default Contact;
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}