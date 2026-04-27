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
import { Clock, Pizza, Smile, Phone, Mail, Calendar, Truck, ShoppingBag } from "lucide-react";

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
        { name: "Home", id: "hero" },
        { name: "Über uns", id: "about" },
        { name: "Speisekarte", id: "products" },
        { name: "Kontakt", id: "contact" },
      ]}
      brandName="Pizzeria Brijani"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Pizzeria Brijani"
      description="Authentische italienische Pizza direkt aus dem Holzofen. Genießen Sie echte Qualität in Helmstedt."
      buttons={[
        { text: "Speisekarte ansehen", href: "#products" },
        { text: "Jetzt bestellen", href: "#contact" },
      ]}
      imageSrc="https://img.b2bpic.net/free-photo/fresh-pizza-with-mushrooms-herbs_114579-2475.jpg"
      imageAlt="Pizzeria Brijani Holzofen Pizza"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Tradition & Geschmack"
      description="Seit Jahren verwöhnen wir Helmstedt mit frischen Zutaten und Leidenschaft für authentische Pizza. Besuchen Sie uns in der Freiherr-vom-Stein-Straße 24."
      metrics={[
        { value: "Authentisch", title: "Holzofen" },
        { value: "Frisch", title: "Zutaten" },
        { value: "Schnell", title: "Lieferung" },
      ]}
      imageSrc="https://img.b2bpic.net/free-photo/chef-preparing-pizza_114579-2815.jpg"
      imageAlt="Pizzeria Brijani Küche"
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
        { id: "p1", name: "Margherita", price: "8,50 €", variant: "Klassisch", imageSrc: "https://img.b2bpic.net/free-photo/pizza-margherita_114579-2917.jpg" },
        { id: "p2", name: "Salami Spezial", price: "10,50 €", variant: "Würzige Salami", imageSrc: "https://img.b2bpic.net/free-photo/pepperoni-pizza_114579-2819.jpg" },
        { id: "p3", name: "Funghi", price: "9,50 €", variant: "Frische Pilze", imageSrc: "https://img.b2bpic.net/free-photo/pizza-mushrooms_114579-2821.jpg" },
      ]}
      title="Unsere Auswahl"
      description="Eine Vielfalt an Pizzen, die jeden Geschmack treffen."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Service & Angebote"
      description="Wir bieten mehr als nur Pizza."
      accordionItems={[
        { id: "a1", title: "Lieferung & Abholung", content: "Genießen Sie unsere Pizza bequem zu Hause oder holen Sie sie direkt bei uns ab." },
        { id: "a2", title: "Frische Zutaten", content: "Wir verwenden ausschließlich hochwertige Produkte für den besten Geschmack." },
        { id: "a3", title: "Öffnungszeiten", content: "Wir sind täglich für Sie da, um Ihre Hunger zu stillen." },
      ]}
      imageSrc="https://img.b2bpic.net/free-photo/delivery-scooter-city_114579-2830.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", icon: Truck, title: "Schnelle Lieferung", value: "Blitzschnell" },
        { id: "m2", icon: ShoppingBag, title: "Takeaway", value: "Jederzeit" },
        { id: "m3", icon: Clock, title: "Täglich geöffnet", value: "Mo-So" },
      ]}
      title="Warum Brijani?"
      description="Ihr Partner für den schnellen Genuss in Helmstedt."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Jetzt bestellen!"
      description="Rufen Sie uns unter 0163 7275488 an oder senden Sie uns eine Nachricht."
      inputs={[
        { name: "name", type: "text", placeholder: "Ihr Name", required: true },
        { name: "tel", type: "tel", placeholder: "Telefonnummer", required: true },
      ]}
      textarea={{ name: "message", placeholder: "Ihre Bestellung oder Nachricht", rows: 4 }}
      imageSrc="https://img.b2bpic.net/free-photo/close-up-pizza-box-delivery_114579-2832.jpg"
      imageAlt="Kontakt Pizzeria Brijani"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Pizzeria Brijani"
      columns={[
        { title: "Informationen", items: [{ label: "Freiherr-vom-Stein-Straße 24, 38350 Helmstedt", href: "#" }] },
        { title: "Kontakt", items: [{ label: "0163 7275488", href: "tel:01637275488" }] },
        { title: "Services", items: [{ label: "Lieferung", href: "#" }, { label: "Abholung", href: "#" }] },
      ]}
      copyrightText="© 2025 Pizzeria Brijani"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}