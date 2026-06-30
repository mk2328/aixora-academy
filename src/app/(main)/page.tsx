import Hero from '@/components/home/Hero';
import Vision from '@/components/home/Vision';
import Programs from '@/components/home/Programs';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import Testimonials from '@/components/home/Testimonials';
import Founder from '@/components/home/Founder';
import Footer from '@/components/home/Footer';


export default function Home() {
  return (
    <main>
      <Hero />
      <Vision />
      <Programs />
      <WhyChooseUs />
      <UpcomingEvents />
      <Testimonials />
      <Founder />
      <Footer />
    </main>
  );
}