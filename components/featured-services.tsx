import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Server, Shield, Wifi } from 'lucide-react';

const services = [
  {
    title: 'Managed IT Services',
    description: 'Comprehensive IT management and support for businesses of all sizes.',
    icon: Monitor,
  },
  {
    title: 'Network Solutions',
    description: 'Professional networking services, from setup to security and maintenance.',
    icon: Wifi,
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business and personal data.',
    icon: Shield,
  },
  {
    title: 'Cloud Services',
    description: 'Secure cloud solutions for storage, backup, and business applications.',
    icon: Server,
  },
];

export function FeaturedServices() {
  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-16">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          Our Services
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Professional IT solutions tailored to your needs. From business support to personal tech services.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <service.icon className="h-10 w-10 text-primary" />
              <CardTitle className="mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}