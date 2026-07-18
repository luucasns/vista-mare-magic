import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const photo1 = "/Images (66).jpeg";
const photo2 = "/Images (67).jpeg";
const photo3 = "/Images (68).jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_NUMBER = "5547996053320";

const WHATSAPP_BASE_MSG =
  "Olá! Vi a apresentação do apartamento Vista Mare, no bairro Fazenda, e gostaria de receber mais informações.";

function buildWhatsAppUrl(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function Index() {
  const [scrolled, setScrolled] = useState(false);

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    timeline: "",
  });

  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `Olá! Sou ${form.name}. Tenho interesse no apartamento Vista Mare (bairro Fazenda, Itajaí). Prazo de compra: ${form.timeline}. Meu WhatsApp: ${form.whatsapp}.`;

    setSent(true);

    setTimeout(() => {
      window.open(buildWhatsAppUrl(msg), "_blank");
    }, 400);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <button onClick={() => scrollTo("top")} className="text-left">
            <div
              className={`font-serif text-xl md:text-2xl leading-none ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Vista Mare
            </div>

            <div
              className={`text-[10px] tracking-[0.25em] uppercase mt-1 ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              Lotisa · Itajaí
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {[
              { label: "O imóvel", id: "imovel" },
              { label: "Localização", id: "localizacao" },
              { label: "Condições", id: "condicoes" },
            ].map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`text-sm tracking-wide transition-colors ${
                  scrolled
                    ? "text-foreground hover:text-accent"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("contato")}
            className="btn-primary text-xs md:text-sm px-5 py-3"
          >
            Quero conhecer
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative h-[90vh] min-h-[640px] w-full overflow-hidden"
      >
        <img
          src={photo1}
          alt="Vista Mare — empreendimento em Itajaí"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
          <div className="max-w-2xl animate-fade-up text-white">
            <div className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/80 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-soft" />
              Vista Mare · Bairro Fazenda · Itajaí
            </div>

            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] mb-6">
              Seu novo apartamento
              <br />
              <em className="not-italic text-accent-soft">perto do mar</em>
            </h1>

            <p className="text-base md:text-lg text-white/85 max-w-xl leading-relaxed mb-10 font-light">
              96 m² privativos, 3 dormitórios e uma localização desejada para
              viver com mais conforto em Itajaí.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-white/60 mb-1">
                  Apartamento de alto padrão
                </div>

                <div className="font-serif text-3xl md:text-4xl text-white">
                  R$ 1.850.000
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo("contato")}
                className="btn-primary"
              >
                Receber fotos e condições
              </button>

              <button
                onClick={() => scrollTo("imovel")}
                className="btn-outline text-white border-white/50 hover:bg-white hover:text-foreground"
              >
                Conhecer o imóvel
              </button>
            </div>

            <p className="text-xs text-white/60 mt-6">
              Atendimento personalizado e sem compromisso.
            </p>
          </div>
        </div>

        <div className="hidden md:flex absolute right-8 bottom-10 z-10 flex-col items-center gap-3 text-white/70 text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
          Role para descobrir
          <span className="h-16 w-px bg-white/40" />
        </div>
      </section>

      {/* Property summary */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {[
            { v: "96 m²", l: "Área privativa" },
            { v: "3", l: "Dormitórios" },
            { v: "1", l: "Suíte" },
            { v: "3", l: "Banheiros" },
            { v: "1", l: "Vaga privativa" },
          ].map((s) => (
            <div
              key={s.l}
              className="text-center md:border-r last:border-r-0 border-border"
            >
              <div className="font-serif text-3xl md:text-4xl text-foreground">
                {s.v}
              </div>

              <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emotional intro */}
      <section id="imovel" className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <div className="eyebrow mb-6">Um novo jeito de viver Itajaí</div>

            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              Espaço, localização e conforto em um só endereço
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                O Vista Mare reúne a praticidade de uma planta bem distribuída
                com o estilo de vida de uma das regiões mais desejadas da
                cidade.
              </p>

              <p>
                Um imóvel para quem valoriza ambientes confortáveis, proximidade
                com o mar e a segurança de investir em um endereço de alto
                padrão.
              </p>
            </div>

            <div className="mt-10 pl-6 border-l-2 border-accent">
              <p className="font-serif italic text-xl md:text-2xl text-foreground leading-snug">
                Mais do que um apartamento. Um lugar para viver seus próximos
                capítulos.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={photo2}
                alt="Sacada com vista para o mar"
                className="w-full h-full object-cover"
                style={{ objectPosition: "left center" }}
              />
            </div>

            <div className="hidden md:block absolute -bottom-8 -left-8 bg-background-alt p-6 max-w-[220px] rounded-lg">
              <div className="eyebrow mb-2">Localização</div>

              <div className="font-serif text-lg leading-tight">
                Bairro Fazenda
                <br />
                <span className="text-muted-foreground text-sm">
                  Itajaí — SC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        style={{ backgroundColor: "var(--background-alt)" }}
        className="py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow mb-4">Detalhes do apartamento</div>

            <h2 className="text-4xl md:text-5xl leading-tight">
              Conforto na medida certa para a sua rotina
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              {
                t: "3 dormitórios",
                d: "Espaço para acomodar a família, receber visitas ou criar um ambiente de trabalho.",
              },
              {
                t: "1 suíte",
                d: "Mais privacidade e conforto para os momentos de descanso.",
              },
              {
                t: "96 m² privativos",
                d: "Ambientes bem distribuídos para uma rotina mais funcional.",
              },
              {
                t: "3 banheiros",
                d: "Praticidade para o dia a dia de toda a família.",
              },
              {
                t: "1 vaga privativa",
                d: "Mais segurança e comodidade para o seu veículo.",
              },
              {
                t: "Vista lateral",
                d: "Iluminação natural e uma conexão agradável com o entorno.",
              },
            ].map((f, i) => (
              <div
                key={f.t}
                className="bg-[var(--background-alt)] p-8 md:p-10"
              >
                <div className="text-accent font-serif text-2xl mb-4">
                  0{i + 1}
                </div>

                <h3 className="font-serif text-2xl mb-3">{f.t}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => scrollTo("contato")}
              className="btn-primary"
            >
              Agendar uma visita
            </button>
          </div>
        </div>
      </section>

      {/* Editorial gallery */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-4">Galeria</div>

            <h2 className="text-4xl md:text-5xl leading-tight">
              Conheça o Vista Mare por diferentes perspectivas
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden rounded-lg">
              <img
                src={photo1}
                alt="Fachada Vista Mare"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="col-span-6 md:col-span-4 aspect-[3/5] md:aspect-auto overflow-hidden rounded-lg">
              <img
                src={photo2}
                alt="Detalhe sacada"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: "left" }}
              />
            </div>

            <div className="col-span-6 md:col-span-5 aspect-square overflow-hidden rounded-lg">
              <img
                src={photo3}
                alt="Entorno"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="col-span-12 md:col-span-7 aspect-[16/9] md:aspect-auto overflow-hidden rounded-lg">
              <img
                src={photo1}
                alt="Torre Vista Mare"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section id="localizacao" className="relative">
        <div className="relative h-[600px] md:h-[720px] overflow-hidden">
          <img
            src={photo3}
            alt="Bairro Fazenda, Itajaí"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center">
            <div className="max-w-xl text-white">
              <div className="text-[11px] tracking-[0.3em] uppercase text-accent-soft mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-soft" />
                Bairro Fazenda
              </div>

              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                Viva em uma das regiões mais desejadas de Itajaí
              </h2>

              <p className="text-white/85 leading-relaxed mb-10 font-light">
                Uma localização que combina atmosfera residencial, proximidade
                com o mar e conexão facilitada com diferentes pontos da cidade.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Qualidade de vida",
                  "Localização valorizada",
                  "Conforto para a família",
                  "Potencial de valorização",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-3 text-sm">
                    <span className="text-accent-soft mt-1">—</span>
                    <span className="text-white/90">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase conditions */}
      <section
        id="condicoes"
        style={{ backgroundColor: "#203B3C" }}
        className="py-24 md:py-36 text-white"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-accent-soft mb-6">
              Condição de compra
            </div>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-white">
              Um imóvel que pode se adaptar aos seus planos
            </h2>

            <p className="text-white/75 leading-relaxed mb-8">
              Converse com um especialista para entender as possibilidades
              disponíveis para a negociação.
            </p>

            <button
              onClick={() => scrollTo("contato")}
              className="inline-flex items-center gap-3 bg-white text-[#203B3C] px-8 py-4 rounded-lg text-sm font-medium hover:bg-accent-soft transition-colors"
            >
              Consultar condições
            </button>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-3">
              A partir de
            </div>

            <div className="font-serif text-6xl md:text-7xl mb-10 text-white">
              R$ 1.850.000
            </div>

            <ul className="space-y-4 border-t border-white/15 pt-8">
              {[
                "Financiamento bancário",
                "Avaliação de proposta",
                "Possibilidade de veículo na negociação",
              ].map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-4 text-white/90"
                >
                  <span className="h-px w-6 bg-accent-soft" />
                  {c}
                </li>
              ))}
            </ul>

            <p className="text-xs text-white/50 mt-8">
              Condições sujeitas à análise e aprovação.
            </p>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow mb-4">Para quem é este imóvel</div>

            <h2 className="text-4xl md:text-5xl leading-tight">
              O Vista Mare pode ser a escolha certa para você
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {[
              "Para quem deseja morar no bairro Fazenda",
              "Para famílias que procuram três dormitórios",
              "Para quem valoriza espaço e conforto",
              "Para quem busca proximidade com o mar",
              "Para quem deseja um imóvel de padrão superior",
              "Para quem procura uma oportunidade patrimonial em Itajaí",
            ].map((q, i) => (
              <div
                key={q}
                className="flex items-start gap-5 py-5 border-b border-border"
              >
                <span className="font-serif text-accent text-lg pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="text-foreground">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final conversion */}
      <section
        id="contato"
        style={{ backgroundColor: "var(--background)" }}
        className="py-24 md:py-32 border-t border-border"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          <div>
            <div className="eyebrow mb-4">Conheça pessoalmente</div>

            <h2 className="text-4xl md:text-5xl leading-tight mb-6">
              Seu próximo capítulo pode começar no{" "}
              <em className="not-italic text-accent">Vista Mare</em>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Receba mais informações, fotos disponíveis e condições de
              negociação diretamente pelo WhatsApp.
            </p>

            <ul className="space-y-4">
              {[
                "Atendimento individual",
                "Sem compromisso",
                "Resposta rápida pelo WhatsApp",
              ].map((t) => (
                <li key={t} className="flex items-center gap-4 text-sm">
                  <span className="h-px w-8 bg-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card p-8 md:p-10 rounded-lg shadow-[0_4px_40px_rgba(29,38,40,0.06)] border border-border">
            {!sent ? (
              <>
                <h3 className="font-serif text-2xl mb-2">
                  Receba todos os detalhes
                </h3>

                <p className="text-sm text-muted-foreground mb-8">
                  Preencha as informações abaixo para iniciar o atendimento.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      Nome
                    </label>

                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      placeholder="Como podemos chamar você?"
                      className="mt-2 w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      WhatsApp
                    </label>

                    <input
                      required
                      type="tel"
                      value={form.whatsapp}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          whatsapp: e.target.value,
                        })
                      }
                      placeholder="(00) 00000-0000"
                      className="mt-2 w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      Quando pretende comprar?
                    </label>

                    <select
                      required
                      value={form.timeline}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          timeline: e.target.value,
                        })
                      }
                      className="mt-2 w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Selecione</option>
                      <option>O quanto antes</option>
                      <option>Nos próximos 3 meses</option>
                      <option>Nos próximos 6 meses</option>
                      <option>Apenas pesquisando</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full mt-4"
                  >
                    Receber informações no WhatsApp
                  </button>

                  <p className="text-[11px] text-muted-foreground leading-relaxed pt-2">
                    Ao enviar, você concorda em receber contato sobre este
                    imóvel. Seus dados serão utilizados apenas para atendimento.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-12 text-center">
                <div className="font-serif text-2xl mb-3">Obrigado!</div>

                <p className="text-muted-foreground">
                  Recebemos seus dados. Em breve você receberá todas as
                  informações pelo WhatsApp.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="font-serif text-2xl">Vista Mare</div>

            <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mt-1">
              Lotisa
            </div>

            <div className="text-sm text-muted-foreground mt-4">
              Bairro Fazenda — Itajaí, SC
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#"
              className="hover:text-accent transition-colors"
            >
              Política de Privacidade
            </a>

            <a
              href={buildWhatsAppUrl(WHATSAPP_BASE_MSG)}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              WhatsApp
            </a>

            <a
              href="#"
              className="hover:text-accent transition-colors"
            >
              Instagram
            </a>
          </div>

          <div className="text-xs text-muted-foreground leading-relaxed">
            Valores, condições e disponibilidade podem ser alterados sem aviso
            prévio. Consulte o corretor responsável. CRECI a inserir.
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp */}
      <a
        href={buildWhatsAppUrl(WHATSAPP_BASE_MSG)}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden md:inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm font-medium"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        Falar no WhatsApp
      </a>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 p-3 bg-background/95 backdrop-blur-md border-t border-border">
        <button
          onClick={() => scrollTo("contato")}
          className="btn-primary w-full"
        >
          Quero conhecer o Vista Mare
        </button>
      </div>
    </div>
  );
}
