import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Users,
  MapPin,
  Clock,
  Droplets,
  Shield,
  Zap,
  FileText,
  Search,
  Bell,
  CheckCircle2,
  Activity,
  RefreshCw,
  AlertTriangle,
  Stethoscope,
  Building2,
  FlaskConical,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
  const vitals = [
    { icon: Users, label: "Lives saved", value: "10,000+" },
    { icon: Droplets, label: "Units tracked", value: "50,000+" },
    { icon: MapPin, label: "Partner sites", value: "150+" },
    { icon: Clock, label: "Avg. response", value: "< 30 min" },
  ];

  const bloodTypes = [
    { type: "A+", need: "High", donors: "32%" },
    { type: "A-", need: "Critical", donors: "8%" },
    { type: "B+", need: "Medium", donors: "12%" },
    { type: "B-", need: "High", donors: "3%" },
    { type: "O+", need: "High", donors: "35%" },
    { type: "O-", need: "Critical", donors: "5%" },
    { type: "AB+", need: "Low", donors: "4%" },
    { type: "AB-", need: "Medium", donors: "1%" },
  ];

  const needStyles = {
    Critical: "text-[var(--vg-red)] bg-[var(--vg-red-soft)] border-[var(--vg-red)]/25",
    High: "text-amber-300 bg-amber-400/10 border-amber-300/25",
    Medium: "text-[var(--vg-cyan)] bg-[var(--vg-cyan-soft)] border-[var(--vg-cyan)]/25",
    Low: "text-sky-300 bg-sky-400/10 border-sky-300/25",
  };

  const features = [
    {
      icon: Users,
      title: "Donor registration",
      description:
        "A secure intake flow with medical history and eligibility checks built right in.",
      tone: "red",
    },
    {
      icon: Droplets,
      title: "Live inventory",
      description:
        "Units, expiry dates, and distribution tracked in real time across every site.",
      tone: "cyan",
    },
    {
      icon: Zap,
      title: "Rapid matching",
      description:
        "Emergency requests are routed to compatible, eligible donors automatically.",
      tone: "red",
    },
  ];

  const processSteps = [
    { icon: FileText, title: "Register & screen", description: "A short form and a quick health screening." },
    { icon: Search, title: "Get matched", description: "We pair blood needs with eligible donors nearby." },
    { icon: Bell, title: "Get the alert", description: "Notified the moment your type is needed." },
    { icon: Heart, title: "Donate", description: "Visit a center and make the donation count." },
  ];

  const donationFacts = [
    { icon: Heart, title: "One donation, three lives", description: "A single visit can help up to three patients.", stat: "3 lives" },
    { icon: RefreshCw, title: "Fast to replenish", description: "Plasma rebuilds in 24–48 hrs; red cells in 4–6 weeks.", stat: "48 hrs" },
    { icon: Activity, title: "Constant demand", description: "Someone needs blood every 2 seconds, around the clock.", stat: "every 2 sec" },
    { icon: AlertTriangle, title: "Short shelf life", description: "Red cells last 42 days, platelets just 5.", stat: "42 days" },
  ];

  const emergencyNeeds = [
    { type: "Accident victims", units: "Up to 100 units", icon: AlertTriangle },
    { type: "Cancer patients", units: "8 units / week", icon: Heart },
    { type: "Surgery patients", units: "5–10 units", icon: Stethoscope },
    { type: "Burn victims", units: "20+ units", icon: Activity },
  ];

  return (
    <div className="vitals-theme min-h-screen overflow-x-clip">
      <Header />

      {/* ============ Ambient atmosphere (fixed, behind everything) ============ */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(255,59,84,0.16),transparent),radial-gradient(ellipse_60%_45%_at_85%_15%,rgba(63,224,197,0.10),transparent)]" />
        <div className="vg-blob vg-float-slow h-[26rem] w-[26rem] bg-[var(--vg-red)]/20 left-[-8rem] top-[6rem]" />
        <div className="vg-blob vg-float h-[22rem] w-[22rem] bg-[var(--vg-cyan)]/15 right-[-6rem] top-[28rem]" />
        <div className="vg-blob vg-float-slow h-[24rem] w-[24rem] bg-[var(--vg-red)]/10 left-[10%] top-[120rem]" />
        <div className="vg-noise" />
      </div>

      {/* ============ Hero ============ */}
      <section className="relative z-10 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="vg-grid h-[42rem]" />
        <div className="container relative mx-auto grid max-w-6xl gap-14 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <div className="vg-glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-[var(--vg-text-soft)]">
              <span className="relative inline-flex h-2 w-2">
                <span className="pulse-dot relative inline-flex h-2 w-2 rounded-full bg-[var(--vg-cyan)] text-[var(--vg-cyan)]"></span>
              </span>
              Network online — matching donors now
            </div>

            <h1 className="font-display text-4xl leading-[1.08] text-[var(--vg-text)] md:text-6xl">
              Blood, tracked
              <br />
              like a{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[var(--vg-red)] to-[var(--vg-cyan)] bg-clip-text text-transparent">
                  vital sign
                </span>
              </span>
              .
            </h1>

            <p className="mt-6 max-w-xl text-lg text-[var(--vg-text-soft)]">
              LifeLine connects donors, hospitals, and blood labs on one live
              dashboard — so the right blood finds the right patient before
              it's too late.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/signup?role=donor"
                className="vg-glow-red inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--vg-red)] px-6 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Become a donor <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/signup?role=hospital"
                className="vg-glass inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-semibold text-[var(--vg-text)] transition-all hover:bg-white/10"
              >
                We're a hospital or lab
              </Link>
            </div>

            <p className="mt-5 text-sm text-[var(--vg-text-faint)]">
              Already registered?{" "}
              <Link to="/login" className="font-medium text-[var(--vg-cyan)] underline-offset-2 hover:underline">
                Sign in to your dashboard
              </Link>
            </p>
          </div>

          {/* Signature element: floating glass "vitals monitor" card */}
          <div className="relative">
            <div className="vg-glass-strong vg-glow-cyan relative rounded-3xl p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-display text-sm tracking-wide text-[var(--vg-text)]">
                  Network Monitor
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--vg-cyan)]">
                  <span className="vg-blink h-1.5 w-1.5 rounded-full bg-[var(--vg-cyan)]" />
                  live
                </span>
              </div>

              {/* animated ECG trace */}
              <svg viewBox="0 0 400 90" className="mb-5 h-20 w-full" preserveAspectRatio="none">
                <path
                  d="M0,46 L60,46 L78,46 L92,18 L108,78 L124,46 L150,46
                     L210,46 L228,18 L244,78 L260,46 L400,46"
                  fill="none"
                  stroke="var(--vg-red)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="vg-ecg-path"
                />
              </svg>

              <div className="grid grid-cols-2 gap-5">
                {vitals.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="rounded-xl bg-white/[0.04] p-3.5">
                      <Icon className="mb-2 h-4 w-4 text-[var(--vg-cyan)]" />
                      <div className="font-mono text-xl font-semibold text-[var(--vg-text)]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[var(--vg-text-faint)]">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============ Current Blood Needs ============ */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-[var(--vg-text)] md:text-4xl">
              Current blood needs
            </h2>
            <p className="mt-4 text-lg text-[var(--vg-text-soft)]">
              A live read on demand across our network — your donation
              matters most exactly where it's short.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {bloodTypes.map((blood, index) => (
              <div
                key={index}
                className="vg-glass group relative overflow-hidden rounded-2xl p-5 text-center transition-transform hover:-translate-y-1"
              >
                <div className="font-display text-2xl text-[var(--vg-text)]">{blood.type}</div>
                <div
                  className={`mt-2 inline-block rounded-full border px-2.5 py-1 text-xs font-medium ${needStyles[blood.need]}`}
                >
                  {blood.need} need
                </div>
                <div className="mt-3 font-mono text-xs text-[var(--vg-text-faint)]">
                  {blood.donors} of donors
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Why your donation matters ============ */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-[var(--vg-text)] md:text-4xl">
              Why your donation matters
            </h2>
            <p className="mt-4 text-lg text-[var(--vg-text-soft)]">
              Every donation sends a ripple of hope through someone's hardest day.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {donationFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className="vg-glass rounded-2xl p-6 text-center transition-all hover:bg-white/[0.08]"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--vg-red)]/25 to-[var(--vg-cyan)]/15">
                    <Icon className="h-7 w-7 text-[var(--vg-red)]" />
                  </div>
                  <h3 className="mb-2 font-display text-lg text-[var(--vg-text)]">{fact.title}</h3>
                  <p className="mb-4 text-sm text-[var(--vg-text-soft)]">{fact.description}</p>
                  <div className="font-mono text-sm font-semibold text-[var(--vg-cyan)]">
                    {fact.stat}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ How It Works ============ */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-[var(--vg-text)] md:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-[var(--vg-text-soft)]">
              Four steps between you and your first life saved.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="vg-glass relative rounded-2xl p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--vg-red)] to-[var(--vg-red)]/70 text-white shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-display text-lg text-[var(--vg-text)]">{step.title}</h3>
                  <p className="text-sm text-[var(--vg-text-soft)]">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[var(--vg-text-faint)] md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ One platform, three roles ============ */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-[var(--vg-text)] md:text-4xl">
              One platform, built for everyone involved
            </h2>
            <p className="mt-4 text-lg text-[var(--vg-text-soft)]">
              Donors, hospitals, and blood labs each get an experience shaped
              around how they actually work.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isRed = feature.tone === "red";
              return (
                <div
                  key={index}
                  className={`vg-glass rounded-2xl p-6 text-center transition-all hover:-translate-y-1 ${isRed ? "hover:vg-glow-red" : "hover:vg-glow-cyan"}`}
                >
                  <div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{ background: isRed ? "var(--vg-red-soft)" : "var(--vg-cyan-soft)" }}
                  >
                    <Icon className="h-8 w-8" style={{ color: isRed ? "var(--vg-red)" : "var(--vg-cyan)" }} />
                  </div>
                  <h3 className="mb-2 font-display text-xl text-[var(--vg-text)]">{feature.title}</h3>
                  <p className="text-[var(--vg-text-soft)]">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-8 flex max-w-5xl flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/signup?role=hospital"
              className="vg-glass inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[var(--vg-text)] transition-colors hover:bg-white/10"
            >
              <Building2 className="h-4 w-4 text-[var(--vg-cyan)]" /> Register a hospital
            </Link>
            <Link
              to="/signup?role=blood-lab"
              className="vg-glass inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[var(--vg-text)] transition-colors hover:bg-white/10"
            >
              <FlaskConical className="h-4 w-4 text-[var(--vg-red)]" /> Register a blood lab
            </Link>
          </div>
        </div>
      </section>

      {/* ============ Emergency Needs ============ */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="vg-glass-strong mx-auto max-w-6xl rounded-3xl p-8 md:p-12">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-display text-3xl text-[var(--vg-text)] md:text-4xl">
                Who needs your blood?
              </h2>
              <p className="mt-4 text-lg text-[var(--vg-text-soft)]">
                Your donation reaches patients in their most critical moments.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {emergencyNeeds.map((need, index) => {
                const Icon = need.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/[0.05] p-6 text-center transition-colors hover:bg-white/[0.09]"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--vg-red-soft)]">
                      <Icon className="h-6 w-6 text-[var(--vg-red)]" />
                    </div>
                    <h3 className="mb-1 font-display text-lg text-[var(--vg-text)]">{need.type}</h3>
                    <p className="text-sm text-[var(--vg-text-faint)]">{need.units}</p>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white/[0.05] p-6 text-center">
              <p className="text-lg text-[var(--vg-text)]">
                <strong className="text-[var(--vg-cyan)]">47%</strong> of the population is
                eligible to donate, but only{" "}
                <strong className="text-[var(--vg-red)]">5%</strong> actually do.
              </p>
              <p className="mt-2 text-[var(--vg-text-soft)]">
                Your single donation can make all the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Security ============ */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row">
            <div className="flex-1">
              <div className="vg-glass mb-6 flex h-14 w-14 items-center justify-center rounded-2xl">
                <Shield className="h-7 w-7 text-[var(--vg-cyan)]" />
              </div>
              <h2 className="mb-4 font-display text-3xl text-[var(--vg-text)]">
                Secure &amp; compliant
              </h2>
              <p className="mb-6 text-[var(--vg-text-soft)]">
                Every record is encrypted end-to-end and handled under strict
                healthcare data standards — so donors and patients can trust
                the system that connects them.
              </p>
              <ul className="space-y-3">
                {[
                  "HIPAA-aligned data handling",
                  "End-to-end encryption",
                  "Regular independent security audits",
                ].map((item) => (
                  <li key={item} className="flex items-center text-[var(--vg-text-soft)]">
                    <CheckCircle2 className="mr-3 h-4 w-4 flex-shrink-0 text-[var(--vg-cyan)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="vg-glass-strong flex-1 rounded-3xl p-8">
              <div className="flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--vg-red)]/15 to-[var(--vg-cyan)]/15">
                <div className="p-4 text-center">
                  <Shield className="mx-auto mb-4 h-12 w-12 text-[var(--vg-cyan)]" />
                  <p className="font-medium text-[var(--vg-text)]">
                    Secure blood bank management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Closing CTA ============ */}
      <section className="relative z-10 pb-24 pt-4">
        <div className="container mx-auto px-4">
          <div className="vg-glass-strong vg-glow-red relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-8 py-16 text-center">
            <Plus className="absolute -left-6 -top-6 h-32 w-32 text-white/[0.04]" strokeWidth={1} />
            <Plus className="absolute -bottom-8 -right-8 h-40 w-40 text-white/[0.04]" strokeWidth={1} />
            <h2 className="relative font-display text-3xl text-[var(--vg-text)] md:text-4xl">
              Ready to save a life?
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-lg text-[var(--vg-text-soft)]">
              Join a community of donors and healthcare professionals making
              sure blood is there exactly when it's needed.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/signup?role=donor"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--vg-red)] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Join as a donor <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/signup?role=hospital"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-3.5 text-base font-semibold text-[var(--vg-text)] transition-all hover:border-white/40"
              >
                Join as a facility <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;