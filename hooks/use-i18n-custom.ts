import { useRouter } from "next/router"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function useWtxI18n() {
  const { asPath, locale, pathname, replace, query } = useRouter()
  const { i18n: { dir, language } } = useTranslation()

  useEffect(() => {
    // 👇 Synch Next.js locale with i18n language property
    replace({ pathname, query }, asPath, { locale: language })
    // 👇 Flips the document direction if i18n language is RTL based
    document.dir = dir()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])
}
