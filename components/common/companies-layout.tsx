import CompaniesFooter from "../companies-footer";
import CompaniesNavbar from "../companies-navbar";

export default function CompaniesLayout({ children }: any) {
  return (
    <>
      <CompaniesNavbar />
      <main>{children}</main>
      <CompaniesFooter />
    </>
  );
}
