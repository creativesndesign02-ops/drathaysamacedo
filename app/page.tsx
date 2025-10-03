import Image from "next/image";
import { Arapey } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dra. Thaysa Macedo | Medicina Integrativa em Vitória/ES",
  description:
    "Especialista em medicina integrativa, emagrecimento saudável e tratamento de dores crônicas. Agende sua consulta na Enseada do Suá ou Mata da Praia.",
  openGraph: {
    title: "Dra. Thaysa Macedo | Medicina Integrativa em Vitória/ES",
    description: "Cuidado completo para sua saúde e bem-estar.",
    url: "https://www.seudominio.com.br", // SEO: Substitua pelo seu domínio real
    siteName: "Dra. Thaysa Macedo",
    images: [
      {
        url: "https://www.seudominio.com.br/og-image.png", // SEO: Crie e adicione uma imagem para compartilhamento (1200x630px)
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Thaysa Macedo | Medicina Integrativa em Vitória/ES",
    description: "Cuidado completo para sua saúde e bem-estar.",
    images: ["https://www.seudominio.com.br/twitter-image.png"], // SEO: Crie e adicione uma imagem para o Twitter
  },
  // SEO: Adiciona palavras-chave relevantes
  keywords: [
    "Medicina Integrativa",
    "Emagrecimento",
    "Dores Crônicas",
    "Médica em Vitória ES",
  ],
};

const arapey = Arapey({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Thaysa Macedo",
  image: "https://www.seudominio.com.br/section1.png", // Use a URL completa da sua imagem principal
  description:
    "Médica especialista em medicina integrativa, com foco em emagrecimento saudável e tratamento de dores crônicas.",
  medicalSpecialty: "Integrative Medicine",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress:
        "Ed. Center Point Republica - R. Nahum Prado, 80 - Sala 01 e 02",
      addressLocality: "Vitória",
      addressRegion: "ES",
      postalCode: "29070-190",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Rua Tenente Mário Francisco Brito, 420 – Sala 1201",
      addressLocality: "Vitória",
      addressRegion: "ES",
      postalCode: "29050-555",
      addressCountry: "BR",
    },
  ],
  telephone: "+552732078446",
  url: "https://www.seudominio.com.br", // Substitua pelo seu domínio real
};

export default function Home() {
  const whatsappSmartdoc = "5527997777019";
  const whatsappIntegrative = "552732078446";
  const message = "Olá, gostaria de agendar uma consulta.";

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative h-screen w-full text-white">
        <Image
          src="/section1.png"
          alt="Retrato da Dra. Thaysa Macedo, médica especialista em medicina integrativa."
          fill
          className="object-cover z-0"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#4E8098]/10 to-[#4E8098] opacity-90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#4E8098]/10 to-[#427AA1] opacity-90 z-10" />

        <div className="relative z-20 flex h-full flex-col justify-between">
          <header className="flex items-center justify-between px-6 py-4">
            <div className="relative h-10 w-28">
              <Image
                src="/assinatura.png"
                alt="Assinatura de Dra. Thaysa Macedo"
                fill
                className="object-cover z-0"
                priority
              />
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-wide">
              Clínica Médica
            </p>
          </header>

          <div className="px-6 py-8 text-center mx-auto relative bottom-10 flex flex-col justify-end h-full">
            <h1 className="text-balance mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light">
              Dra. THAYSA
              <br />
              MACEDO
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
              Meu cuidado com você vai além dos sintomas.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-4xl">
              Sou médica especialista em medicina integrativa, com foco em
              emagrecimento saudável e tratamento de dores crônicas. Meu
              objetivo é olhar para cada pessoa de forma única, investigando as
              causas reais dos problemas de saúde. Acredito que o corpo, mente e
              espírito estão conectados, e é por isso que trabalho para propor
              estratégias que realmente façam diferença no dia a dia.
            </p>
          </div>

          <div />
        </div>
      </section>

      <section className="bg-[#FCE0DA] px-6 py-4 md:py-10 text-[#39759E] flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[600] text-center mb-8 text-balance leading-8 md:leading-12">
          MEUS PRINCIPAIS
          <br />
          SERVIÇOS
        </h2>

        <div className="space-y-6 max-w-[22rem] md:max-w-[32rem] mx-auto">
          <div className="h-[1px] bg-[#39759E] mx-8" />

          <div className="flex gap-4 px-6">
            <span className="text-base sm:text-lg md:text-xl font-[600] flex-shrink-0">
              01
            </span>
            <div>
              <p className="text-xs sm:text-sm md:text-base leading-4 md:leading-6">
                <strong className="font-semibold">Medicina Integrativa:</strong>{" "}
                avaliação completa para identificar causas, prevenir doenças e
                promover bem-estar físico e mental. Transformando sua saúde de
                dentro para fora.
              </p>
            </div>
          </div>

          <div className="h-[1px] bg-[#39759E] mx-8" />

          <div className="flex gap-4 px-6">
            <span className="text-base sm:text-lg md:text-xl font-[600] flex-shrink-0">
              02
            </span>
            <div>
              <p className="text-xs sm:text-sm md:text-base leading-4 md:leading-6">
                <strong className="font-semibold">
                  Acompanhamento em emagrecimento saudável:
                </strong>{" "}
                planos personalizados para perda de peso sustentável, com foco
                em saúde, equilíbrio e qualidade de vida.
              </p>
            </div>
          </div>

          <div className="h-[1px] bg-[#39759E] mx-8" />

          <div className="flex gap-4 px-6">
            <span className="text-base sm:text-lg md:text-xl font-[600] flex-shrink-0">
              03
            </span>
            <div>
              <p className="text-xs sm:text-sm md:text-base leading-4 md:leading-6">
                <strong className="font-semibold">
                  Tratamento de dores crônicas:
                </strong>{" "}
                abordagem integrativa que associa recursos da medicina
                convencional e terapias complementares para aliviar sintomas e
                melhorar a qualidade de vida.
              </p>
            </div>
          </div>

          <div className="h-[1px] bg-[#39759E] mx-8" />
        </div>

        <p className="text-xs sm:text-sm md:text-base leading-4 md:leading-6 text-center mt-8 max-w-[28rem] mx-auto">
          Minha missão é ajudar você a conquistar a sua melhor versão, com mais
          saúde, disposição e qualidade de vida, com resultados reais e
          duradouros.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href={`https://wa.me/${whatsappSmartdoc}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato pelo WhatsApp para agendar uma consulta"
            className="bg-[#39759E] hover:bg-[#234a63] text-[#FCE0DA] rounded-full px-8 py-1.5 text-sm sm:text-base md:text-lg uppercase tracking-wide transition-colors"
            role="button"
          >
            Entrar em contato
          </a>
        </div>
      </section>

      <section className="relative h-[400px] md:h-[100vh] w-full">
        <Image
          src="/section2.png"
          alt="Ambiente do consultório da Dra. Thaysa Macedo."
          fill
          className="object-cover"
        />
      </section>

      <section className="bg-[#39759E] text-white px-6 py-12 ">
        <div className="relative max-w-xl mx-auto w-full">
          <div className="absolute h-9 w-12 -top-3 left-2">
            <Image
              src="/esquerda.png"
              alt=""
              fill
              className="object-cover z-0"
              aria-hidden="true"
            />
          </div>

          <div className="absolute h-9 w-12 top-8 right-2">
            <Image
              src="/direita.png"
              alt=""
              fill
              className="object-cover z-0"
              aria-hidden="true"
            />
          </div>
          <h2
            className={`${arapey.className} relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 text-balance leading-7 md:leading-14`}
          >
            Seu corpo não falha.
            <br />
            Ele só pede cuidado
          </h2>
        </div>

        <p className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-8 uppercase tracking-wide leading-6 md:leading-8">
          PRONTO(A) PARA CONQUISTAR
          <br />A SUA MELHOR VERSÃO?
        </p>

        <div className="space-y-2 space max-w-2xl mx-auto border-[1px] flex flex-col items-center py-6">
          <div className="p-6 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-4 text-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 uppercase">
                  Onde me encontrar?
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-[500] mb-2">
                  SMARTDOC
                </p>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  <strong className="font-semibold">Dias:</strong> Terças à
                  tarde
                </p>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  <strong className="font-semibold">Endereço:</strong> Ed.
                  Center Point Republica - R. Nahum Prado, 80 - Sala 01 e 02
                </p>
                <p className="text-xs sm:text-sm md:text-base">
                  <strong className="font-semibold">Bairro:</strong> Mata da
                  Praia - Vitória/ES
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsappSmartdoc}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar consulta na SMARTDOC pelo WhatsApp"
              className="w-fit bg-[#FCE0DA] text-[#2B5876] hover:bg-gray-100 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg uppercase tracking-wide font-semibold transition-colors"
              role="button"
            >
              Agendar pelo WhatsApp
            </a>
          </div>

          <div className="h-[1px] w-[90%] bg-white" />

          <div className="p-6 flex flex-col items-center">
            <div className="mb-4 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-[500] mb-2 uppercase">
                Clínica Integrative Vitória
              </h3>
              <p className="text-xs sm:text-sm md:text-base mb-1">
                <strong className="font-semibold">Dias:</strong> Quartas e
                quintas-feiras à tarde
              </p>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                <strong className="font-semibold">Endereço:</strong> Rua Tenente
                Mário Francisco Brito, 420 – Sala 1201
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                <strong className="font-semibold">Bairro:</strong> Enseada do
                Suá – Vitória/ES
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsappIntegrative}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar consulta na Clínica Integrative Vitória pelo WhatsApp"
              className="w-fit bg-[#FCE0DA] text-[#2B5876] hover:bg-gray-100 rounded-full px-4 py-2 text-sm sm:text-base md:text-lg uppercase tracking-wide font-semibold transition-colors"
              role="button"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>

        <footer className="text-center text-xs sm:text-sm md:text-base mt-8 text-white/70">
          <p>© 2025 Thaysa Macedo | Todos os direitos reservados</p>
        </footer>
      </section>
    </main>
  );
}
