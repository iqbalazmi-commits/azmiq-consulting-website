import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import OfficeShowcase from "@/components/OfficeShowcase";
import SapExpertise from "@/components/SapExpertise";
import ProcessTimeline from "@/components/ProcessTimeline";
import Statistics from "@/components/Statistics";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ChatBot from "@/components/chatbot/ChatBot";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <OfficeShowcase />
        <SapExpertise />
        <ProcessTimeline />
        <Statistics />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
      <ChatBot />
    </>
  );
}
