import CompaniesFooter from "../companies-footer";
import CompaniesNavbar from "../companies-navbar";

export default function CompaniesLayout({ children }: any) {
  debugger;
  return (
    <>
      {/* <CompaniesNavbar
        color={children.type.LayoutColor}
        logo={children.type.Logo}
      /> */}
      <main>{children}</main>
      {/* <CompaniesFooter color={children.type.LayoutColor} /> */}
    </>
  );
}
