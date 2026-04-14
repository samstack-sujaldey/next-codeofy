import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WelcomeBanner from "@/Components/WelcomeBanner";
import WhatsAppButton from "@/Components/WhatsAppButton";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <WelcomeBanner />
      <main className="grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
