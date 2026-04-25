"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Clock, Pizza, Smile } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Pizzeria Brijani"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Pizzeria Brijani"
      description="Authentische Pizza aus dem Holzofen, zubereitet mit Liebe und Tradition in Helmstedt. Besuchen Sie uns in der Freiherr-vom-Stein-Straße 24."
      buttons={[
        {
          text: "Jetzt Bestellen",
          href: "#products",
        },
        {
          text: "Route Planen",
          href: "https://maps.google.com",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/delicious-pizza-party_23-2151309473.jpg"
      imageAlt="Authentic wood fired pizza at Pizzeria Brijani"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Tradition & Geschmack"
      description="Seit Jahren bringen wir den wahren Geschmack Italiens nach Helmstedt. Wir verwenden nur frische Zutaten und backen unsere Pizzen traditionell im Holzofen."
      metrics={[
        {
          value: "18",
          title: "Mitarbeiter",
        },
        {
          value: "50+",
          title: "Pizza-Variationen",
        },
        {
          value: "4.6",
          title: "Bewertungen",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/elderly-chef-with-bonete-making-dough-baking-cookies-retired-senior-baker-with-apron-kitchen-uniform-sprinkling-sifting-spreading-rew-ingredients-with-hand-baking-homemade-pizza-bread_482257-14469.jpg"
      imageAlt="Traditional wood oven pizza preparation"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Margherita",
          price: "7,50 €",
          variant: "Klassisch",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-italian-pizza-table_23-2148305641.jpg",
        },
        {
          id: "p2",
          name: "Salami",
          price: "8,50 €",
          variant: "Würzig",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-pizza-slices-cutting-board_23-2148574253.jpg",
        },
        {
          id: "p3",
          name: "Veggie",
          price: "9,00 €",
          variant: "Frisch",
          imageSrc: "http://img.b2bpic.net/free-photo/neapolitan-spicy-pizza-with-ham-cheese-arugula-basil-tomatoes-pepperoni-pepper-sprayed-with-cheese_78826-2234.jpg",
        },
        {
          id: "p4",
          name: "Funghi",
          price: "8,00 €",
          variant: "Erdig",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-delicious-mushroom-pizza_23-2148601589.jpg",
        },
        {
          id: "p5",
          name: "Quattro Formaggi",
          price: "10,00 €",
          variant: "Käsig",
          imageSrc: "http://img.b2bpic.net/free-photo/margarita-pizza-table_140725-4801.jpg",
        },
        {
          id: "p6",
          name: "Hawaii",
          price: "9,50 €",
          variant: "Exotisch",
          imageSrc: "http://img.b2bpic.net/free-photo/seafood-pizza-shrimp-pizza_1417-133.jpg",
        },
      ]}
      title="Unsere Spezialitäten"
      description="Wählen Sie aus einer Vielzahl von hausgemachten Pizzen."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Warum Pizzeria Brijani?"
      description="Erleben Sie echte Qualität und herzlichen Service bei jedem Besuch."
      accordionItems={[
        {
          id: "a1",
          title: "Frische Zutaten",
          content: "Wir beziehen unsere Zutaten von ausgewählten Händlern.",
        },
        {
          id: "a2",
          title: "Traditioneller Holzofen",
          content: "Knusprig gebacken nach italienischer Art.",
        },
        {
          id: "a3",
          title: "Schnelle Lieferung",
          content: "Ihre Lieblingspizza heiß bei Ihnen zu Hause.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/chef-white-uniform-prepare-pizzaa_1157-27020.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Müller",
          handle: "@sarah",
          testimonial: "Die beste Pizza in Helmstedt! Super freundliches Personal.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-restaurant_23-2148006698.jpg",
        },
        {
          id: "t2",
          name: "Markus Schmidt",
          handle: "@markus",
          testimonial: "Immer wieder gerne. Die Pizzen kommen heiß und pünktlich.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-eating-pizza-outside_23-2149872430.jpg",
        },
        {
          id: "t3",
          name: "Elena Weber",
          handle: "@elena",
          testimonial: "Tolle Atmosphäre und extrem leckere Käsesorten auf der Pizza.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-shy-young-asian-woman-standing-front-cafe-entrance-touching-her-neck_1258-199358.jpg",
        },
        {
          id: "t4",
          name: "David Becker",
          handle: "@david",
          testimonial: "Super authentisch und absolut faire Preise.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-friends-eating-pizza_23-2149066099.jpg",
        },
        {
          id: "t5",
          name: "Julia Schneider",
          handle: "@julia",
          testimonial: "Einfach lecker, besonders der dünne knusprige Boden.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-people-enyoing-dinner-party_23-2150717845.jpg",
        },
      ]}
      showRating={true}
      title="Was unsere Gäste sagen"
      description="Authentische Eindrücke unserer treuen Kunden."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Pizza,
          title: "Pizzen serviert",
          value: "10.000+",
        },
        {
          id: "m2",
          icon: Clock,
          title: "Minuten Lieferzeit",
          value: "20",
        },
        {
          id: "m3",
          icon: Smile,
          title: "Zufriedene Gäste",
          value: "5000+",
        },
      ]}
      title="Unsere Meilensteine"
      description="Zahlen, die für sich sprechen."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Bieten Sie auch Lieferung an?",
          content: "Ja, wir liefern in ganz Helmstedt und Umgebung.",
        },
        {
          id: "f2",
          title: "Gibt es vegetarische Optionen?",
          content: "Natürlich, wir haben eine breite Auswahl an vegetarischen Pizzen.",
        },
        {
          id: "f3",
          title: "Wo befindet sich das Restaurant?",
          content: "Sie finden uns in der Freiherr-vom-Stein-Straße 24.",
        },
      ]}
      title="Häufige Fragen"
      description="Alles was Sie über unser Restaurant wissen müssen."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Besuchen Sie uns"
      description="Kontaktieren Sie uns für Tischreservierungen oder Fragen."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Ihr Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Ihre E-Mail",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Ihre Nachricht oder Tischreservierung",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/happy-pub-owner-welcoming-guest-while-standing-entrance-door-looking-camera_637285-5713.jpg"
      imageAlt="Pizzeria Brijani Exterior"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Pizzeria Brijani"
      columns={[
        {
          title: "Menü",
          items: [
            {
              label: "Pizza",
              href: "#products",
            },
            {
              label: "Über Uns",
              href: "#about",
            },
          ],
        },
        {
          title: "Kontakt",
          items: [
            {
              label: "0163 7275488",
              href: "tel:01637275488",
            },
            {
              label: "Helmstedt",
              href: "#",
            },
          ],
        },
        {
          title: "Rechtliches",
          items: [
            {
              label: "Impressum",
              href: "#",
            },
            {
              label: "Datenschutz",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Pizzeria Brijani"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
