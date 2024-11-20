'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { MainNav } from '@/components/main-nav';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/mobile-nav';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/contact" className="hidden sm:inline-flex">
                <Phone className="mr-2 h-4 w-4" />
                (713) 555-0123
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/schedule">Schedule Service</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}