import MainLayout from "./main-layout";
import CompaniesLayout from "./companies-layout";

export const Layouts = {
  Main: MainLayout,
  Companies: CompaniesLayout,
};
export type LayoutKeys = keyof typeof Layouts;


