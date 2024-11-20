import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Monitor, Smartphone } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-24">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Houston's Premier IT Solutions Provider
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Expert technology services for businesses and individuals. 
            24/7 support, certified technicians, and guaranteed solutions.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/services/business">
                <Monitor className="mr-2 h-5 w-5" />
                Business Solutions
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/services/residential">
                <Smartphone className="mr-2 h-5 w-5" />
                Personal Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-14 -top-14 overflow-hidden bg-gradient-to-b from-primary/5 to-transparent bg-size-200 bg-pos-0 transition-all duration-500" />
    </section>
  );
}