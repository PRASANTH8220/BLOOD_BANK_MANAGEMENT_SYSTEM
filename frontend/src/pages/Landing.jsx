import {
  ArrowRight,
  Heart,
  Users,
  MapPin,
  Clock,
  Droplets,
  Shield,
  Zap,
  Search,
  Bell,
  FileText,
  CheckCircle,
  Activity,
  RefreshCw,
  AlertTriangle,
  Stethoscope,
  Building2,
  FlaskConical,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PulseDivider from "../components/visuals/PulseDivider";

const LandingPage = () => {
  const stats = [
    { icon: Users, label: "Lives Saved", value: "10,000+" },
    { icon: Heart, label: "Blood Units", value: "50,000+" },
    { icon: MapPin, label: "Partner Hospitals", value: "150+" },
    { icon: Clock, label: "Response Time", value: "< 30 min" },
  ];

  const features = [
    {
      icon: Users,
      title: "Easy Donor Registration",
      description:
        "A simple, secure registration flow with medical history tracking and eligibility checks built in.",
    },
    {
      icon: Droplets,
      title: "Real-Time Inventory",
      description:
        "Track blood units, expiry dates, and distribution live across every partner hospital and lab.",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description:
        "Emergency requests are matched and routed automatically so urgent needs are never left waiting.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      icon: FileText,
      title: "Register & Screen",
      description: "Complete a short registration and health screening.",
    },
    {
      step: "02",
      icon: Search,
      title: "Find a Match",
      description: "We match blood needs with compatible, eligible donors.",
    },
    {
      step: "03",
      icon: Bell,
      title: "Get Notified",
      description: "Receive an alert the moment your blood type is needed.",
    },
    {
      step: "04",
      icon: Heart,
      title: "Donate & Save Lives",
      description: "Visit an approved center and make your donation count.",
    },
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
    Critical: "text-oxblood bg-oxblood-soft",
    High: "text-marigold-dark bg-marigold-soft",
    Medium: "text-role-lab bg-role-lab-soft",
    Low: "text-role-hospital bg-role-hospital-soft",
  };

  const donationFacts = [
    {
      icon: Heart,
      title: "One Donation, Multiple Lives",
      description:
        "A single donation can save up to 3 lives — your one hour can give someone a lifetime.",
      stat: "3 lives saved",
    },
    {
      icon: RefreshCw,
      title: "Your Body Replenishes Fast",
      description:
        "Plasma rebuilds within 24–48 hours; red cells fully replace in 4–6 weeks.",
      stat: "48 hours",
    },
    {
      icon: Activity,
      title: "The Need Never Pauses",
      description:
        "Someone needs blood every 2 seconds. Regular donors keep that supply steady.",
      stat: "every 2 sec",
    },
    {
      icon: AlertTriangle,
      title: "A Short Shelf Life",
      description:
        "Red cells last only 42 days, platelets just 5 — fresh donations are constantly needed.",
      stat: "42 day shelf life",
    },
  ];

  const eligibilityInfo = [
    {
      icon: CheckCircle,
      title: "Who Can Donate",
      items: [
        "Age 17–75 (16 with parental consent)",
        "At least 110 lbs (50 kg)",
        "Generally good health",
        "No flu or cold symptoms",
      ],
    },
    {
      icon: Stethoscope,
      title: "Health Benefits",
      items: [
        "A free mini health screening",
        "Burns ~650 calories per donation",
        "May reduce heart disease risk",
        "Stimulates new blood cell production",
      ],
    },
    {
      icon: Shield,
      title: "Safety First",
      items: [
        "Sterile, single-use equipment",
        "Trained medical staff on site",
        "A calm, comfortable setting",
        "Guided post-donation care",
      ],
    },
  ];

  const emergencyNeeds = [
    { type: "Accident Victims", units: "Up to 100 units", icon: AlertTriangle },
    { type: "Cancer Patients", units: "8 units weekly", icon: Heart },
    { type: "Surgery Patients", units: "5–10 units", icon: Stethoscope },
    { type: "Burn Victims", units: "20+ units", icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-linen">
      <Header />

      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden pt-32 pb-10 md:pt-40 md:pb-16">
        {/* faint oversized brand drop, thematically grounded watermark */}
        <svg
          className="pointer-events-none absolute -right-24 -top-16 w-[28rem] opacity-[0.05] md:w-[36rem]"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M24 4C24 4 9 21.5 9 30.5C9 38.5 15.8 44 24 44C32.2 44 39 38.5 39 30.5C39 21.5 24 4 24 4Z"
            fill="var(--oxblood)"
          />
        </svg>

        <div className="container relative z-10 mx-auto grid max-w-6xl gap-14 px-4 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-oxblood/15 bg-oxblood-soft px-4 py-1.5 text-sm font-medium text-oxblood">
              <span className="relative inline-flex h-2 w-2">
                <span className="pulse-dot relative inline-flex h-2 w-2 rounded-full bg-oxblood text-oxblood"></span>
              </span>
              Saving lives, one donor at a time
            </div>

            <h1 className="font-display text-4xl leading-[1.1] text-ink md:text-6xl">
              Every donor has a story.
              <br />
              <span className="italic text-oxblood">So does every life</span>{" "}
              they save.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              LifeLine connects donors, hospitals, and blood labs on one
              platform — so the right blood reaches the right patient before
              it's too late.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/signup?role=donor"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-oxblood px-6 py-3.5 text-base font-semibold text-linen shadow-md transition-all hover:bg-oxblood-dark hover:shadow-lg"
              >
                Become a Donor <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/signup?role=hospital"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink/15 px-6 py-3.5 text-base font-semibold text-ink transition-all hover:border-oxblood/40 hover:text-oxblood"
              >
                We're a Hospital or Lab
              </Link>
            </div>

            <p className="mt-5 text-sm text-ink-faint">
              Already registered?{" "}
              <Link to="/login" className="font-medium text-oxblood underline-offset-2 hover:underline">
                Sign in to your dashboard
              </Link>
            </p>
          </div>

          {/* "Vitals" readout card — clinical counterpoint to the warm headline */}
          <div className="rounded-2xl border border-parchment-deep bg-white p-6 shadow-xl shadow-oxblood/5">
            <div className="mb-4 flex items-center justify-between border-b border-parchment-deep pb-4">
              <span className="font-display text-sm tracking-wide text-ink-soft">
                Network Vitals
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-role-lab">
                ● live
              </span>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index}>
                    <Icon className="mb-2 h-4 w-4 text-oxblood" />
                    <div className="font-mono text-xl font-semibold text-ink">
                      {stat.value}
                    </div>
                    <div className="text-xs text-ink-faint">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <PulseDivider />
        </div>
      </section>

      {/* ============ Current Blood Needs ============ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Current Blood Needs
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              A real-time look at blood type demand across our network.
              Your donation matters most exactly where it's short.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {bloodTypes.map((blood, index) => (
              <div
                key={index}
                className="rounded-xl border border-parchment-deep bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="font-display text-2xl text-ink">
                  {blood.type}
                </div>
                <div
                  className={`mt-2 inline-block rounded-full px-2.5 py-1 text-xs font-medium ${needStyles[blood.need]}`}
                >
                  {blood.need} need
                </div>
                <div className="mt-3 font-mono text-xs text-ink-faint">
                  {blood.donors} of donors
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Why your donation matters ============ */}
      <section className="bg-linen-soft py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Why Your Donation Matters
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Every donation sends a ripple of hope through someone's hardest
              day.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {donationFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border-t-4 border-oxblood bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-oxblood-soft">
                    <Icon className="h-7 w-7 text-oxblood" />
                  </div>
                  <h3 className="mb-2 font-display text-lg text-ink">
                    {fact.title}
                  </h3>
                  <p className="mb-4 text-sm text-ink-soft">
                    {fact.description}
                  </p>
                  <div className="font-mono text-sm font-semibold text-oxblood">
                    {fact.stat}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ How It Works — pulse-line stepper ============ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Four simple steps stand between you and your first life saved.
            </p>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-parchment-deep md:block" />
            <div className="grid gap-10 md:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative text-center">
                    <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-4 border-linen bg-oxblood text-linen shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mb-2 font-mono text-xs tracking-widest text-ink-faint">
                      STEP {step.step}
                    </div>
                    <h3 className="mb-2 font-display text-lg text-ink">
                      {step.title}
                    </h3>
                    <p className="text-sm text-ink-soft">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ Eligibility & Benefits ============ */}
      <section className="bg-linen-soft py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Donor Eligibility &amp; Benefits
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Safe, simple, and quietly good for you too.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {eligibilityInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-oxblood-soft">
                    <Icon className="h-6 w-6 text-oxblood" />
                  </div>
                  <h3 className="mb-4 text-center font-display text-xl text-ink">
                    {info.title}
                  </h3>
                  <ul className="space-y-3">
                    {info.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-sm text-ink-soft"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-role-lab" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ One platform, three roles ============ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              One Platform, Built for Everyone Involved
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Donors, hospitals, and blood labs each get an experience shaped
              around how they actually work.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border-t-4 border-oxblood bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-oxblood-soft">
                    <Icon className="h-8 w-8 text-oxblood" />
                  </div>
                  <h3 className="mb-2 font-display text-xl text-ink">
                    {feature.title}
                  </h3>
                  <p className="text-ink-soft">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-8 flex max-w-5xl flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/signup?role=hospital"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-role-hospital/30 bg-role-hospital-soft px-5 py-3 text-sm font-semibold text-role-hospital transition-colors hover:bg-role-hospital/10"
            >
              <Building2 className="h-4 w-4" /> Register a Hospital
            </Link>
            <Link
              to="/signup?role=blood-lab"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-role-lab/30 bg-role-lab-soft px-5 py-3 text-sm font-semibold text-role-lab transition-colors hover:bg-role-lab/10"
            >
              <FlaskConical className="h-4 w-4" /> Register a Blood Lab
            </Link>
          </div>
        </div>
      </section>

      {/* ============ Emergency Needs ============ */}
      <section className="bg-oxblood py-20 text-linen">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Who Needs Your Blood?
            </h2>
            <p className="mt-4 text-lg text-linen/80">
              Your donation reaches patients in their most critical moments.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {emergencyNeeds.map((need, index) => {
              const Icon = need.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <Icon className="h-6 w-6 text-linen" />
                  </div>
                  <h3 className="mb-1 font-display text-lg">{need.type}</h3>
                  <p className="text-sm text-linen/75">{need.units}</p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
            <p className="text-lg">
              <strong>47% of the population</strong> is eligible to donate
              blood, but only <strong>5%</strong> actually do.
            </p>
            <p className="mt-2 text-linen/80">
              Your single donation can make all the difference.
            </p>
          </div>
        </div>
      </section>

      {/* ============ Security ============ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row">
            <div className="flex-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-oxblood-soft">
                <Shield className="h-7 w-7 text-oxblood" />
              </div>
              <h2 className="mb-4 font-display text-3xl text-ink">
                Secure &amp; Compliant
              </h2>
              <p className="mb-6 text-ink-soft">
                Every record is encrypted end-to-end and handled under strict
                healthcare data standards — so donors and patients can trust
                the system that connects them.
              </p>
              <ul className="space-y-2">
                {[
                  "HIPAA-aligned data handling",
                  "End-to-end encryption",
                  "Regular independent security audits",
                ].map((item) => (
                  <li key={item} className="flex items-center text-ink-soft">
                    <div className="mr-3 h-2 w-2 rounded-full bg-oxblood" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 rounded-2xl border border-parchment-deep bg-linen-soft p-8">
              <div className="flex aspect-video items-center justify-center rounded-xl bg-oxblood-soft">
                <div className="p-4 text-center">
                  <Shield className="mx-auto mb-4 h-12 w-12 text-oxblood" />
                  <p className="font-medium text-oxblood">
                    Secure Blood Bank Management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Closing CTA ============ */}
      <section className="relative overflow-hidden bg-ink py-20 text-linen">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Ready to Save a Life?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-linen/75">
            Join a community of donors and healthcare professionals making
            sure blood is there exactly when it's needed.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/signup?role=donor"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-oxblood px-6 py-3.5 text-base font-semibold text-linen shadow-lg transition-all hover:bg-oxblood-dark"
            >
              Join as a Donor <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/signup?role=hospital"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-linen/30 px-6 py-3.5 text-base font-semibold text-linen transition-all hover:border-linen/60"
            >
              Join as a Facility
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
