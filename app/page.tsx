import FinalCta from '@/components/sections/FinalCta';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import HotItWorks from '@/components/sections/HowItWorks';
import ProductPreviewSection from './components/sections/ProductPreviewSection';
import ProgressSection from '@/components/sections/ProgressSection';
import WhyUse from '@/components/sections/WhyUse';
import TodayRoutine from "@/components/sections/TodayRoutine";

import { TaskProvider } from './contexts/TaskContext';

export default function Home() {
  return (
    <TaskProvider>
      <main>
        <Header />
        <Hero />
        <TodayRoutine />
        <HotItWorks />
        <ProductPreviewSection />
        <WhyUse />
        <ProgressSection />
        <FinalCta />
        <Footer />

      </main>
    </TaskProvider>
  )
}
