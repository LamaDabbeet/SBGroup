import { Layouts } from "@/components/common/layouts";
import { MyAppProps } from "@/components/common/types";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page) => page);
  
  const { locale } = useRouter();

  if (typeof document !== "undefined") {
    const dir = locale === "ar" ? "rtl" : "ltr";
    if (document != null) {
      document?.querySelector("html")?.setAttribute("dir", dir);
    }
    const fontFamily =
      locale === "ar" ? "'Cairo', sans-serif" : "'Montserrat', sans-serif";
    document
      .querySelector("html")
      ?.setAttribute("style", `font-family: ${fontFamily}`);
      
  }

  return (
    <Layout  >
      <Component {...pageProps}></Component>
    </Layout>
  );
}
export default appWithTranslation(MyApp);
