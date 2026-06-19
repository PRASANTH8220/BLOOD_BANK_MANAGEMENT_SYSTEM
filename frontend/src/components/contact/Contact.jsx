import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
} from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

const Contact = () => {
  const cards = [
    { icon: Phone, title: "Emergency helpline", lines: ["+91 98765 43210", "Available 24/7"] },
    { icon: Mail, title: "Email us", lines: ["support@bloodconnect.org", "info@bloodconnect.org"] },
    { icon: MapPin, title: "Head office", lines: ["Navi Mumbai, Maharashtra", "India – 410206"] },
  ];

  const fields = [
    { id: "name", label: "Full name", icon: User, type: "text", placeholder: "Enter your name" },
    { id: "email", label: "Email address", icon: Mail, type: "email", placeholder: "Enter your email" },
    { id: "phone", label: "Phone number", icon: Phone, type: "text", placeholder: "Enter phone number" },
  ];

  const socials = [Instagram, Facebook, Linkedin, Globe];

  return (
    <div className="vitals-theme min-h-screen overflow-x-clip">
      <Header />

      {/* ============ Ambient atmosphere ============ */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(255,59,84,0.16),transparent),radial-gradient(ellipse_55%_40%_at_90%_15%,rgba(63,224,197,0.10),transparent)]" />
        <div className="vg-blob vg-float-slow h-[24rem] w-[24rem] bg-[var(--vg-red)]/18 left-[-7rem] top-[6rem]" />
        <div className="vg-blob vg-float h-[22rem] w-[22rem] bg-[var(--vg-cyan)]/15 right-[-6rem] top-[32rem]" />
        <div className="vg-noise" />
      </div>

      {/* ============ Hero ============ */}
      <section className="relative z-10 pt-36 pb-16 text-center md:pt-44">
        <div className="vg-grid h-[30rem]" />
        <div className="container relative mx-auto max-w-2xl px-4">
          <div className="vg-glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-[var(--vg-text-soft)]">
            <Clock className="h-3.5 w-3.5 text-[var(--vg-cyan)]" />
            We typically reply within an hour
          </div>
          <h1 className="font-display text-4xl leading-tight text-[var(--vg-text)] md:text-6xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-[var(--vg-red)] to-[var(--vg-cyan)] bg-clip-text text-transparent">
              touch
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--vg-text-soft)]">
            We're here to help — reach out for support, partnerships, or
            anything blood-related.
          </p>
        </div>
      </section>

      {/* ============ Contact cards ============ */}
      <section className="relative z-10 py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="vg-glass rounded-2xl p-7 text-center transition-all hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--vg-red)]/20 to-[var(--vg-cyan)]/15">
                    <Icon className="h-7 w-7 text-[var(--vg-red)]" />
                  </div>
                  <h3 className="mb-2 font-display text-lg text-[var(--vg-text)]">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-[var(--vg-text-soft)]">
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Form + side info ============ */}
      <section className="relative z-10 pb-20 pt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            {/* Left content */}
            <div>
              <h2 className="mb-4 font-display text-3xl text-[var(--vg-text)] md:text-4xl">
                Send us a message
              </h2>
              <p className="mb-8 text-[var(--vg-text-soft)]">
                Questions about donating, organizing a camp, or anything
                else? We're always glad to help.
              </p>

              <div className="vg-glass space-y-4 rounded-2xl p-6">
                <div className="flex items-center text-[var(--vg-text-soft)]">
                  <Phone className="mr-3 h-4 w-4 flex-shrink-0 text-[var(--vg-cyan)]" />
                  +91 1234567890
                </div>
                <div className="flex items-center text-[var(--vg-text-soft)]">
                  <Mail className="mr-3 h-4 w-4 flex-shrink-0 text-[var(--vg-cyan)]" />
                  support@bloodconnect.org
                </div>
                <div className="flex items-center text-[var(--vg-text-soft)]">
                  <MapPin className="mr-3 h-4 w-4 flex-shrink-0 text-[var(--vg-cyan)]" />
                  Navi Mumbai, Maharashtra
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                {socials.map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="vg-glass flex h-11 w-11 items-center justify-center rounded-xl text-[var(--vg-text-soft)] transition-all hover:-translate-y-0.5 hover:text-[var(--vg-red)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="vg-glass-strong vg-glow-cyan space-y-5 rounded-3xl p-8">
              {fields.map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="mb-2 block text-sm font-medium text-[var(--vg-text-soft)]"
                    >
                      {field.label}
                    </label>
                    <div className="flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-3 transition-colors focus-within:border-[var(--vg-cyan)]/50">
                      <Icon className="h-4 w-4 flex-shrink-0 text-[var(--vg-text-faint)]" />
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent p-3 text-[var(--vg-text)] placeholder:text-[var(--vg-text-faint)] outline-none"
                      />
                    </div>
                  </div>
                );
              })}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[var(--vg-text-soft)]"
                >
                  Message
                </label>
                <div className="flex items-start rounded-xl border border-white/10 bg-white/[0.04] px-3 transition-colors focus-within:border-[var(--vg-cyan)]/50">
                  <MessageSquare className="mt-3 h-4 w-4 flex-shrink-0 text-[var(--vg-text-faint)]" />
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full bg-transparent p-3 text-[var(--vg-text)] placeholder:text-[var(--vg-text-faint)] outline-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="vg-glow-red flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--vg-red)] py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;