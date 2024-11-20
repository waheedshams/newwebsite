import { Metadata } from 'next';
import { HeroSection } from '@/components/hero-section';
import { FeaturedServices } from '@/components/featured-services';
import { SocialProof } from '@/components/social-proof';
import { LocationTrust } from '@/components/location-trust';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Compucare Houston - Professional IT Services & Computer Repair',
  description: 'Houston\'s trusted provider of IT solutions for businesses and individuals. Expert computer repair, managed IT services, and technical support.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <SocialProof />
      <LocationTrust />
      <CTASection />
    </>
  );
}