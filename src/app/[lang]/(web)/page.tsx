import * as React from 'react';
import { IconCard, InlineIconCard } from '@/components/CustomCard';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Item {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    src: '/images/marketing.svg',
    alt: 'marketing',
    title: 'Service-Partner',
    description: 'Design, IT, Marketing, Zulieferer ...'
  },
  {
    src: '/images/partner.svg',
    alt: 'partner',
    title: 'F&E-Partner',
    description: 'Ob Unis, Firmen oder Forschungszentren'
  },
  {
    src: '/images/financial-advisor.svg',
    alt: 'financial-advisor',
    title: 'Berater',
    description: 'zu F&E, Finanzen, Patenten, IT, HR, Strategie, M&A..'
  }
];

const cardsData: Item[] = [
  {
    src: '/images/startup.png',
    alt: 'startup',
    title: 'Geld für Unternehmen & Startups',
    description: 'Durch  Zuschüsse beteiligt sich der Staat bis zu 80% an der Finanzierung von Digitalisierungs-, Marketing-, F&E- & Beratungsprojekten sowie Personalkosten und...'
  },
  {
    src: '/images/alarm.png',
    alt: 'alarm',
    title: 'Fördermittel-Alarm',
    description: 'Als erster auf begehrte Förderungen zugreifen und mit dem Fördermittel-Alarm nie wieder eine Fördermöglichkeit verpassen'
  },
  {
    src: '/images/tracking.png',
    alt: 'tracking',
    title: 'Wettbewerbs-Tracking',
    description: 'Erfahren welche Förderprogramme  Wettbewerber nutzen und sei dank des Wettbewerbs-Trackings einen Schritt voraus sein'
  }
];


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex items-center gap-5 py-10 px-4 md:px-16">
        <div className="w-1/2">
          <Image className='mr-auto mb-1' src="/images/finyou-findet.svg" alt="finyou-findet" width={500} height={87} />
          <h1 className="text-6xl font-bold">Fördermittel</h1>
          <p className="text-lg mt-2 mb-4 text-gray-600">
            Der KI-gestützte Fördermittelassistent für <br></br>Unternehmen
          </p>
          <div className="flex items-center gap-3">
            <Button size={"lg"}>Jetzt suchen</Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image className='ml-auto' src="/images/hero.png" alt="hero" width={500} height={500} />
        </div>
      </section>


      <div className="w-1/2 text-center mx-auto">
        <h1 className='text-3xl text-center font-semibold'>So einfach ist die <span className='text-cyan-500 font-bold'>kostenlose Fördermittelsuche</span> mit Finyou</h1>
      </div>
      {/* section 1 */}
      <section className="flex items-center gap-5 py-10 px-4 md:px-16">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">1. Unternehmensdaten prüfen</h2>
          <p className="text-lg mt-2 mb-4">
            Unser <b>smarter KI-Fördermittelassistent</b> recherchiert alle Unternehmensdaten. Einfach prüfen und loslegen...
          </p>
          <div className="flex items-center gap-3">
            <Button size={"lg"}>Jetzt suchen</Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image className='ml-auto' src="/images/company-data.png" alt="company-data" width={500} height={500} />
        </div>
      </section>

      {/* section 2 */}
      <section className="flex items-center gap-5 py-10 px-4 md:px-16">
        <div className="w-1/2">
          <Image className='mr-auto' src="/images/funding-invoice.png" alt="funding-invoice" width={500} height={500} />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">2. Förderungen | Finanzierung vergleichen & auswählen</h2>
          <p className="text-lg mt-2 mb-4">
            <b>In Sekunden</b> erstellt Finyou eine auf das Unternehemen <b>maßgeschneiderte Übersicht</b> von Förderprogrammen & Finanzierungsmöglichkeiten
          </p>
          <div className="flex items-center flex-wrap gap-4 mb-5">
              <InlineIconCard src="/images/expense-project.svg" alt="expense-project" title="Filtern nach Ausgaben & Projekttypen" />
              <InlineIconCard src="/images/mix-funding.svg" alt="mix-funding" title="Optimaler Fördermittelmix" />
              <InlineIconCard src="/images/mix-financing.svg" alt="mix-financing" title="Mix-Finanzierungen prüfen" />
              <InlineIconCard src="/images/compare-funding.svg" alt="compare-funding" title="Förderungen & Standorte vergleichen" />
          </div>

          <div className="flex items-center md:justify-center gap-3">
            <Button size={"lg"}>Jetzt suchen</Button>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="flex  items-center gap-5 py-10 px-4 md:px-16">
        <div className="w-1/2">
         
        <h2 className="text-2xl font-bold">3. Fördermittel beantragen & abrechnen</h2>
          <p className="text-lg mt-2 mb-4">
            Finyou’s <b>Fördermittelassistent</b> und das Netzwerk unterstützen im gesamten Prozess von der <b>Partnersuche</b>, über die rechtssichere <b>Beantragung</b> bis hin zur <b>Abrechnung</b> und Dokumentation.
          </p>
          <div className="flex items-center flex-wrap gap-4 mb-5">
              <InlineIconCard src="/images/consultant.svg" alt="consultant" title="Fördermittelkonforme Dienstleister & Berater" />
              <InlineIconCard src="/images/development-partner.svg" alt="development-partner" title="Forschungs & Entwicklungs Partner" />
          </div>
          
          <div className="flex items-center gap-3">
            <Button size={"lg"}>Jetzt suchen</Button>
            <Button size={"lg"} variant={'outline'}>Netzwerk</Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image className='ml-auto' src="/images/funding-invoice.png" alt="funding-invoice" width={500} height={500} />
        </div>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-3 bg-sky-50 gap-4 py-10 px-4 md:px-16">
        {cardsData.map((card, index) => (
          <IconCard
            key={index}
            src={card.src}
            alt={card.alt}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>

      {/* Projects */}
      <section className="flex gap-5 py-10 px-4 md:px-16">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Projektpartnersuche</h2>
          <p className="text-lg mt-2 mb-6">
            Passend zu Förderbedingungen findet Finyou <b>autorisierte Dienstleister & Partner</b>, wie für Digitalisierung, Design, Marketing, F&E, Patentanmeldung..
          </p>
          <div className="flex items-center gap-3">
            <Button size={"lg"}>Partner suchen</Button>
            <Button size={"lg"}>Partnernetzwerk</Button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex gap-3">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col gap-1 text-center">
                <Image src={item.src} className='mx-auto' width={50} height={50} alt={item.alt} />
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className='text-base'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex bg-sky-50 gap-5 py-10 px-4 md:px-16">
        <h2 className="text-2xl">
          Melde Dich jetzt für die <b>Alpha-Testphase</b> an oder bewirb Dich für unser <b>Alpha-Testphase</b>
        </h2>
        <div className="flex items-center justify-end gap-5 w-1/2">
          <Button size={"lg"} variant={'outline'}>Anmelden</Button>
          <Button size={"lg"}>Zum Netzwerk</Button>
        </div>
      </section>
    </>
  );
}