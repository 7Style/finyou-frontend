import * as React from 'react';
import { IconCard } from '@/components/CustomCard';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>

      {/* Hero */}
      <section className="flex gap-5 py-10 px-4 md:px-20">
        <div className="w-1/2">
          <h2 className='text-xl font-bold'>3. Fördermittel beantragen & abrechnen</h2>
          <p className="text-md mt-2 mb-4">
          Finyou’s Fördermittelassistent und das Netzwerk unterstützen im gesamten Prozess von der Partnersuche, über die rechtssichere Beantragung bis hin zur Abrechnung und Dokumentation. 
          </p>
          <div className="flex items-center gap-3">
            <Button size={"md"}>Jetzt suchen</Button>
            <Button size={"md"} variant={'outline'}>Netzwerk</Button>
          </div>
        </div>
        <div className="w-1/2">
          
        </div>
      </section>

      {/* Cards */}
      <section className="flex bg-sky-50 gap-5 py-10 px-4 md:px-20">
          <IconCard />
          <IconCard />
          <IconCard />
      </section>

      {/* Projects */}
      <section className="flex gap-5 py-10 px-4 md:px-20">
        <div className="w-1/2">
          <h2 className='text-xl font-bold'>Projektpartnersuche</h2>
          <p className="text-md mt-2 mb-4">
          Passend zu Förderbedingungen findet Finyou <b>autorisierte Dienstleister & Partner</b>, wie für Digitalisierung, Design, Marketing, F&E, Patentanmeldung..
          </p>
          <div className="flex items-center gap-3">
            <Button size={"md"} variant={'outline'}>Partner suchen</Button>
            <Button size={"md"}>Partnernetzwerk</Button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex gap-5 px-2">
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-sm font-bold">Service-Partner</h3>
              <p className='text-xs'>Design, IT, Marketing, Zulieferer ...</p>
            </div>

            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-sm font-bold">Service-Partner</h3>
              <p className='text-xs'>Design, IT, Marketing, Zulieferer ...</p>
            </div>

            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-sm font-bold">Service-Partner</h3>
              <p className='text-xs'>Design, IT, Marketing, Zulieferer ...</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex bg-sky-50 gap-5 py-10 px-4 md:px-20">
        <p className="text-2xl">
          Melde Dich jetzt für die <b>Alpha-Testphase</b> an oder bewirb Dich für unser <b>Alpha-Testphase</b>
        </p>
        <div className="flex items-center justify-end gap-5 w-1/2">
          <Button size={"lg"} variant={'outline'}>Anmelden</Button>
          <Button size={"lg"}>Zum Netzwerk</Button>
        </div>
      </section>
    </>
  );
}