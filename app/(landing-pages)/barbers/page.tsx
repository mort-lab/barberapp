"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/barbershops/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Tu barbería, más eficiente que nunca
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Gestiona citas, clientes y servicios en una sola plataforma.
                Diseñado específicamente para barberías modernas.
              </p>
              <Button size="lg" className="text-lg px-8">
                Prueba gratis por 30 días
              </Button>
            </div>
            <div className="mt-16 relative">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Dashboard de la plataforma"
                className="rounded-lg shadow-2xl mx-auto"
              />
              {/* Animated elements could be added here */}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground mb-8">
              Confían en nosotros las mejores barberías de España
            </p>
            <div className="flex justify-center items-center space-x-12 flex-wrap">
              {/* Replace with actual logos */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-32 h-12 bg-muted-foreground/20 rounded"
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Todo lo que necesitas para hacer crecer tu barbería
            </h2>
            <div className="grid gap-12 md:grid-cols-3">
              {[
                {
                  title: "Gestión de Citas",
                  description:
                    "Sistema de reservas online que se integra perfectamente con tu agenda.",
                  icon: "📅",
                },
                {
                  title: "Perfiles de Clientes",
                  description:
                    "Mantén un historial detallado de cada cliente y sus preferencias.",
                  icon: "👤",
                },
                {
                  title: "Análisis y Reportes",
                  description:
                    "Obtén insights valiosos sobre el rendimiento de tu negocio.",
                  icon: "📊",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <span className="text-4xl">{feature.icon}</span>
                      <span>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-32 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Cómo funciona
            </h2>
            <div className="space-y-24">
              {[
                {
                  title: "Configura tu perfil de barbería",
                  description:
                    "Añade tus servicios, horarios y equipo en minutos.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Tus clientes reservan online",
                  description:
                    "Ofrece a tus clientes la comodidad de reservar 24/7.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Gestiona tu negocio con facilidad",
                  description:
                    "Accede a todas las herramientas desde un solo dashboard.",
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-12`}
                >
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <Button variant="outline">
                      Saber más <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Desde que empezamos a usar esta plataforma, nuestras reservas han aumentado un 40%. Es increíblemente fácil de usar.",
                  author: "Miguel Ángel",
                  company: "Barbería Clásica",
                },
                {
                  quote:
                    "El sistema de gestión de clientes nos ha permitido ofrecer un servicio mucho más personalizado. Nuestros clientes lo notan y lo aprecian.",
                  author: "Laura Gómez",
                  company: "The Barber Shop",
                },
                {
                  quote:
                    "Los informes y análisis nos han ayudado a tomar decisiones más inteligentes sobre nuestro negocio. Ha sido un cambio radical.",
                  author: "Javier Ruiz",
                  company: "Cortes & Estilos",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-muted">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 md:py-32 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Planes simples y transparentes
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Básico",
                  price: "29€",
                  features: [
                    "Hasta 3 barberos",
                    "100 reservas/mes",
                    "Soporte por email",
                  ],
                },
                {
                  name: "Profesional",
                  price: "59€",
                  features: [
                    "Hasta 10 barberos",
                    "Reservas ilimitadas",
                    "Soporte prioritario",
                    "Análisis avanzados",
                  ],
                },
                {
                  name: "Empresarial",
                  price: "Personalizado",
                  features: [
                    "Barberos ilimitados",
                    "Múltiples ubicaciones",
                    "API personalizada",
                    "Gerente de cuenta dedicado",
                  ],
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={index === 1 ? "border-primary" : ""}
                >
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">
                      {plan.price}
                      <span className="text-lg font-normal">/mes</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="h-5 w-5 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-6"
                      variant={index === 1 ? "default" : "outline"}
                    >
                      Empezar ahora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Preguntas frecuentes
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              {[
                {
                  question:
                    "¿Necesito conocimientos técnicos para usar la plataforma?",
                  answer:
                    "No, nuestra plataforma está diseñada para ser intuitiva y fácil de usar, incluso si no tienes experiencia técnica.",
                },
                {
                  question:
                    "¿Puedo probar la plataforma antes de comprometerme?",
                  answer:
                    "Sí, ofrecemos una prueba gratuita de 30 días para que puedas explorar todas las funcionalidades sin compromiso.",
                },
                {
                  question: "¿Cómo se manejan los pagos de los clientes?",
                  answer:
                    "Ofrecemos integración con pasarelas de pago seguras. Puedes elegir entre cobrar un depósito o el pago completo al momento de la reserva.",
                },
                {
                  question: "¿Qué pasa si necesito ayuda o tengo problemas?",
                  answer:
                    "Ofrecemos soporte técnico por correo electrónico y chat en vivo durante horario comercial. Los planes superiores incluyen soporte telefónico prioritario.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Lleva tu barbería al siguiente nivel
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Únete a cientos de barberías que ya están creciendo con nuestra
              plataforma. Pruébala gratis durante 30 días, sin compromiso.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Comenzar prueba gratuita
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
