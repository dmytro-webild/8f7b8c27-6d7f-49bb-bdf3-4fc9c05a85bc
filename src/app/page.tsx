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
import { Clock, Pizza, Smile, Phone, Mail, Calendar } from "lucide-react";

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
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Speisekarte",          id: "products"},
        {
          name: "Kontakt",          id: "contact"},
      ]}
      brandName="Grün & Stark"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Grün & Stark"
      description="Ihr zuverlässiger Partner für Gartenbau, Landschaftsgestaltung und professionelle Grünflächenpflege. Qualität, die man sieht."
      buttons={[
        {
          text: "Unsere Leistungen",          href: "#products"},
        {
          text: "Jetzt Anfragen",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/gardener-working-green-park_23-2148815159.jpg"
      imageAlt="Professioneller Gartenbau und Landschaftsgestaltung"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Experten für Ihr Grün"
      description="Mit jahrelanger Erfahrung transformieren wir Gärten in persönliche Oasen. Wir stehen für nachhaltige Pflege und präzise Handwerkskunst."
      metrics={[
        {
          value: "10+ Jahre",          title: "Erfahrung"},
        {
          value: "500+",          title: "Projekte"},
        {
          value: "98%",          title: "Zufriedenheitsrate"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/landscaping-worker-planting-flowers-park_23-2148792045.jpg"
      imageAlt="Gartenbauexperten bei der Arbeit"
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
          id: "p1",          name: "Gartengestaltung",          price: "Individuell",          variant: "Neuanlagen",          imageSrc: "http://img.b2bpic.net/free-photo/landscaper-working-with-tools-garden_23-2148792067.jpg"},
        {
          id: "p2",          name: "Rasenpflege",          price: "Ab 50 €",          variant: "Wöchentlich",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-lawn-mower-grass_23-2148906511.jpg"},
        {
          id: "p3",          name: "Baumpflege",          price: "Auf Anfrage",          variant: "Profi",          imageSrc: "http://img.b2bpic.net/free-photo/tree-pruning-process-garden_23-2148820123.jpg"},
      ]}
      title="Unsere Leistungen"
      description="Wir bieten professionelle Lösungen für alle Ihre gärtnerischen Anforderungen."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Qualität & Zuverlässigkeit"
      description="Warum Sie auf uns setzen sollten."
      accordionItems={[
        {
          id: "a1",          title: "Nachhaltigkeit",          content: "Wir verwenden umweltfreundliche Pflegemethoden für Ihren Garten."},
        {
          id: "a2",          title: "Fachwissen",          content: "Unser Team besteht aus ausgebildeten Experten für Gartenbau."},
        {
          id: "a3",          title: "Pünktlichkeit",          content: "Termintreue ist bei uns selbstverständlich."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/professional-gardener-trimming-hedges_23-2148815132.jpg"
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
          id: "t1",          name: "Familie Schmidt",          handle: "@kunden",          testimonial: "Unser Garten sieht dank Grün & Stark endlich so aus, wie wir es uns immer gewünscht haben.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-family-in-garden_23-2148792080.jpg"},
        {
          id: "t2",          name: "Hausverwaltung M.",          handle: "@gewerbe",          testimonial: "Sehr zuverlässige Pflege unserer Grünflächen über das ganze Jahr hinweg.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-people-meeting-outdoors_23-2148906663.jpg"},
      ]}
      showRating={true}
      title="Was unsere Kunden sagen"
      description="Zufriedene Gartenbesitzer und gewerbliche Partner."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          icon: Smile,
          title: "Zufriedene Kunden",          value: "500+"},
        {
          id: "m2",          icon: Clock,
          title: "Stunden Pflege",          value: "5.000+"},
        {
          id: "m3",          icon: Pizza,
          title: "Bäume gepflanzt",          value: "1.200"},
      ]}
      title="Erfolgsgeschichten"
      description="Werte, die unser Engagement unterstreichen."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",          title: "Bieten Sie auch regelmäßige Pflege an?",          content: "Ja, wir bieten maßgeschneiderte Wartungsverträge für Ihren Garten an."},
        {
          id: "f2",          title: "Kommen Sie für eine Vorbesichtigung?",          content: "Selbstverständlich, wir besprechen Ihr Projekt gerne vor Ort."},
      ]}
      title="Häufige Fragen"
      description="Kurz und knapp für Sie beantwortet."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Kontaktieren Sie uns"
      description="Wir freuen uns auf Ihre Nachricht."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "E-Mail",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Ihre Anfrage",        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/gardener-standing-in-front-of-green-garden_23-2148792055.jpg"
      imageAlt="Kontakt zu Grün & Stark"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Grün & Stark"
      columns={[
        {
          title: "Leistungen",          items: [
            { label: "Gartengestaltung", href: "#products" },
            { label: "Rasenpflege", href: "#products" },
          ],
        },
        {
          title: "Kontakt",          items: [
            { label: "0176 63393642", href: "tel:017663393642" },
            { label: "service@grünundstark.de", href: "mailto:service@grünundstark.de" },
          ],
        },
        {
          title: "Öffnungszeiten",          items: [
            { label: "Mo-Sa: 08:00-18:00", href: "#" },
          ],
        },
      ]}
      copyrightText="© 2025 Grün & Stark"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}