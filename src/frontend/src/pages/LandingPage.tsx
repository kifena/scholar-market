import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import PublisherSection from "../components/PublisherSection";
import StudentSection from "../components/StudentSection";
import WaitlistForm from "../components/WaitlistForm";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <StudentSection />
        <PublisherSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
