import Box from '@/components/box'
import * as React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

function SectionHeader(): React.ReactElement {
  // const { t: tHome } = useTranslations('home') // TODO: use translations from home module @ Farjad

  const t = useTranslations()

  return (
    <Box section>
      <Box>
        <Image className="mr-auto mb-1" src="/images/finyou-findet.svg" alt="finyou-findet" width={500} height={87} />
        <h1 className="sm:text-6xl text-5xl font-bold">{t('funding')}</h1>
        <p
          className="text-lg mt-2 mb-4 text-gray-600"
          dangerouslySetInnerHTML={{ __html: t.raw('supportedFundingAssistant') }}
        ></p>
        <div className="flex items-center gap-3 py-2">
          <Button size="lg">{t('readMore')}</Button>
        </div>
      </Box>
      <Box>
        <Image className="lg:mr-0 mr-auto ml-auto" src="/images/hero.png" alt="hero" width={500} height={500} />
      </Box>
    </Box>
  )
}
export { SectionHeader }
