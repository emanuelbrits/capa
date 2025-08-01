import FooterLanding from "./components/footerLanding/footerLanding";
import Welcome from "./components/welcome/welcome";
import FAQ from "./components/FAQ/FAQ";
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/testimonials";
import About from "./components/about/about";
import CookieConsent from "./components/cookieConsent/cookieConsent";
import NavbarLanding from "./components/navbarLanding/navbarLanding";
import Adress from "./components/adress/adress";

export default function Home() {
  return (
    <>
        <div className="font-lora">
          <CookieConsent />
          <NavbarLanding />
          <Welcome />
          <section id="sobre">
            <About />
          </section>
          <section id="servicos">
            <Services />
          </section>
          <section id="testemunhos">
            <Testimonials />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <section id="endereco">
            <Adress></Adress>
          </section>
          <FooterLanding />
        </div>
    </>
  );
}
