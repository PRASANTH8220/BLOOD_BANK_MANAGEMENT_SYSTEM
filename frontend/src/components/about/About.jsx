import {
  Heart,
  Users,
  Shield,
  Award,
  Target,
  Droplet,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Building2,
  FlaskConical,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const AboutUs = () => {
  const stats = [
    { icon: Users, number: "50,000+", label: "Lives saved" },
    { icon: Droplet, number: "100,000+", label: "Donations" },
    { icon: MapPin, number: "500+", label: "Camps organized" },
    { icon: Shield, number: "99.8%", label: "Safety rate" },
  ];

  const values = [
    { icon: Heart, title: "Compassion", description: "The quiet power of human kindness — and what one person's choice to give can mean for another." },
    { icon: Shield, title: "Safety first", description: "Every donation follows strict medical protocol, protecting donor and recipient alike." },
    { icon: Users, title: "Community", description: "A network where people show up for each other, especially in moments that can't wait." },
    { icon: Target, title: "Excellence", description: "From collection to delivery, every step held to the highest standard we can meet." },
  ];

  const roles = [
    { icon: Heart, name: "Donors", tone: "var(--vg-red)", soft: "var(--vg-red-soft)", description: "Register once, get matched by blood type and location, and get notified the moment you're needed." },
    { icon: Building2, name: "Hospitals", tone: "#7aa7ff", soft: "rgba(122,167,255,0.14)", description: "Request units in an emergency, track fulfillment, and browse a verified donor directory nearby." },
    { icon: FlaskConical, name: "Blood labs", tone: "var(--vg-cyan)", soft: "var(--vg-cyan-soft)", description: "Manage live inventory, run donation camps, and respond to hospital requests from one dashboard." },
    { icon: LayoutDashboard, name: "Admins", tone: "#c9a3ff", soft: "rgba(201,163,255,0.14)", description: "Verify new facilities, oversee the donor base, and keep the whole network accountable." },
  ];

  const timeline = [
    { year: "Step 1", title: "A gap, named", description: "Donors existed. Hospitals had needs. Nothing connected them in real time." },
    { year: "Step 2", title: "One shared ledger", description: "Live inventory across labs and hospitals, visible the moment it changes." },
    { year: "Step 3", title: "Matching, automated", description: "Emergency requests route to eligible donors by type and distance, instantly." },
    { year: "Step 4", title: "A network, not an app", description: "Donors, facilities, and admins working off the same source of truth." },
  ];

  return (
    <div className="vitals-theme min-h-screen overflow-x-clip">
      <Header />

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(255,59,84,0.16),transparent),radial-gradient(ellipse_55%_40%_at_10%_20%,rgba(63,224,197,0.10),transparent)]" />
        <div className="vg-blob vg-float-slow h-[24rem] w-[24rem] bg-[var(--vg-cyan)]/15 right-[-6rem] top-[8rem]" />
        <div className="vg-blob vg-float h-[22rem] w-[22rem] bg-[var(--vg-red)]/18 left-[-7rem] top-[34rem]" />
        <div className="vg-noise" />
      </div>

      <section className="relative z-10 pt-36 pb-16 text-center md:pt-44">
        <div className="vg-grid h-[34rem]" />
        <div className="container relative mx-auto max-w-3xl px-4">
          <div className="vg-glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-[var(--vg-text-soft)]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--vg-cyan)]" />
            Why LifeLine exists
          </div>
          <h1 className="font-display text-4xl leading-tight text-[var(--vg-text)] md:text-6xl">
            Every drop has a{" "}
            <span className="bg-gradient-to-r from-[var(--vg-red)] to-[var(--vg-cyan)] bg-clip-text text-transparent">story</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--vg-text-soft)] md:text-xl">
            We connect donors, hospitals, and blood labs so no patient is ever left waiting on something a stranger was willing to give.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/signup?role=donor" className="vg-glow-red inline-flex items-center justify-center rounded-2xl bg-[var(--vg-red)] px-7 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5">
              Join our mission
            </Link>
            <a href="#mission" className="vg-glass inline-flex items-center justify-center rounded-2xl px-7 py-3 font-semibold text-[var(--vg-text)] transition-all hover:bg-white/10">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-10">
        <div className="container mx-auto px-4">
          <div className="vg-glass-strong mx-auto grid max-w-5xl grid-cols-2 gap-6 rounded-3xl p-8 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--vg-red)]/20 to-[var(--vg-cyan)]/15">
                    <Icon className="h-7 w-7 text-[var(--vg-cyan)]" />
                  </div>
                  <div className="font-mono text-2xl font-semibold text-[var(--vg-text)] md:text-3xl">{stat.number}</div>
                  <div className="text-sm text-[var(--vg-text-faint)]">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="mission" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-stretch gap-6 md:grid-cols-2">
            <div className="vg-glass flex flex-col justify-center rounded-3xl p-8 md:p-10">
              <h2 className="mb-5 font-display text-3xl text-[var(--vg-text)] md:text-4xl">Our mission</h2>
              <p className="mb-6 text-lg text-[var(--vg-text-soft)]">
                A world where no one dies waiting for blood. We close the gap between voluntary donors and patients, so safe blood reaches the people who need it, when they need it.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Clock, text: "24/7 emergency blood availability" },
                  { icon: Shield, text: "Verified, safety-screened donors" },
                  { icon: MapPin, text: "Nationwide network coverage" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center text-[var(--vg-text-soft)]">
                      <Icon className="mr-3 h-5 w-5 flex-shrink-0 text-[var(--vg-red)]" />
                      {item.text}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="vg-glass-strong rounded-3xl p-8 md:p-10">
              <h3 className="mb-4 font-display text-2xl text-[var(--vg-text)]">Our vision</h3>
              <p className="mb-6 text-[var(--vg-text-soft)]">
                A future where transfusion is never the hard part of someone's recovery — backed by committed donors and the technology to match them in moments, not days.
              </p>
              <div className="rounded-2xl bg-white/[0.05] p-6">
                <Award className="mb-4 h-10 w-10 text-[var(--vg-cyan)]" />
                <h4 className="mb-2 font-display text-lg text-[var(--vg-text)]">Quality promise</h4>
                <p className="text-sm text-[var(--vg-text-soft)]">Every unit passes rigorous quality checks before it ever reaches a patient.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-[var(--vg-text)] md:text-4xl">How LifeLine came together</h2>
            <p className="mt-4 text-lg text-[var(--vg-text-soft)]">The same problem, solved in four moves.</p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[var(--vg-red)]/40 via-white/15 to-[var(--vg-cyan)]/40 md:block" />
            <div className="space-y-6 md:space-y-10">
              {timeline.map((item, index) => (
                <div key={item.title} className={`relative md:flex md:items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <div className={`vg-glass w-full rounded-2xl p-6 md:w-[46%] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--vg-cyan)]">{item.year}</div>
                    <h3 className="mb-1.5 font-display text-lg text-[var(--vg-text)]">{item.title}</h3>
                    <p className="text-sm text-[var(--vg-text-soft)]">{item.description}</p>
                  </div>
                  <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--vg-red)] ring-4 ring-[#07080c] md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-[var(--vg-text)] md:text-4xl">Our values</h2>
            <p className="mt-4 text-lg text-[var(--vg-text-soft)]">The principles that guide every decision we make.</p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="vg-glass group rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:bg-white/[0.08]">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--vg-red)]/20 to-[var(--vg-cyan)]/15 transition-transform group-hover:scale-110">
                    <Icon className="h-8 w-8 text-[var(--vg-red)]" />
                  </div>
                  <h3 className="mb-2 font-display text-lg text-[var(--vg-text)]">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--vg-text-soft)]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-[var(--vg-text)] md:text-4xl">Built around four roles</h2>
            <p className="mt-4 text-lg text-[var(--vg-text-soft)]">LifeLine isn't one generic login — it's a different experience for everyone who keeps the blood supply moving.</p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div key={index} className="vg-glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.08]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full" style={{ background: role.soft }}>
                    <Icon className="h-6 w-6" style={{ color: role.tone }} />
                  </div>
                  <h3 className="mb-2 font-display text-lg text-[var(--vg-text)]">{role.name}</h3>
                  <p className="text-sm text-[var(--vg-text-soft)]">{role.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/signup" className="font-medium text-[var(--vg-cyan)] underline-offset-2 hover:underline">
              Find your role and sign up →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-4">
        <div className="container mx-auto px-4">
          <div className="vg-glass-strong vg-glow-red mx-auto max-w-4xl rounded-3xl px-8 py-16 text-center">
            <h2 className="mb-6 font-display text-3xl text-[var(--vg-text)] md:text-4xl">Ready to make a difference?</h2>
            <p className="mb-8 text-lg text-[var(--vg-text-soft)]">
              Join thousands of donors and care teams saving lives one donation at a time. A single donation can save up to 3 lives.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/signup?role=donor" className="rounded-2xl bg-[var(--vg-red)] px-8 py-4 text-lg font-semibold text-white transition-transform hover:-translate-y-0.5">
                Become a donor
              </Link>
              <Link to="/signup?role=blood-lab" className="rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold text-[var(--vg-text)] transition-all hover:border-white/40">
                Organize a camp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              { icon: Phone, title: "Emergency helpline", lines: ["+1 (555) 123-HELP", "24/7 available"] },
              { icon: Mail, title: "Email us", lines: ["help@lifeline.org", "support@lifeline.org"] },
              { icon: Globe, title: "Headquarters", lines: ["123 Healthcare Ave", "Medical District, City 12345"] },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="vg-glass rounded-2xl p-7 text-center">
                  <Icon className="mx-auto mb-4 h-7 w-7 text-[var(--vg-cyan)]" />
                  <h3 className="mb-2 font-display text-lg text-[var(--vg-text)]">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-[var(--vg-text-soft)]">{line}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;