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
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import PulseDivider from "../visuals/PulseDivider";

const AboutUs = () => {
  const stats = [
    { icon: Users, number: "50,000+", label: "Lives Saved" },
    { icon: Droplet, number: "100,000+", label: "Donations" },
    { icon: MapPin, number: "500+", label: "Camps Organized" },
    { icon: Shield, number: "99.8%", label: "Safety Rate" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We believe in the quiet power of human kindness — and what one person's choice to give can mean for another.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Every donation follows strict medical protocol, protecting both the donor giving and the patient receiving.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We're building a network where people show up for each other, especially in moments that can't wait.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "From collection to delivery, we hold every step to the highest standard we can meet.",
    },
  ];

  const roles = [
    {
      icon: Heart,
      name: "Donors",
      tone: "var(--role-donor)",
      soft: "bg-role-donor-soft",
      text: "text-role-donor",
      description:
        "Register once, get matched by blood type and location, and get notified the moment you're needed.",
    },
    {
      icon: Building2,
      name: "Hospitals",
      tone: "var(--role-hospital)",
      soft: "bg-role-hospital-soft",
      text: "text-role-hospital",
      description:
        "Request units in an emergency, track fulfillment, and browse a verified donor directory near you.",
    },
    {
      icon: FlaskConical,
      name: "Blood Labs",
      tone: "var(--role-lab)",
      soft: "bg-role-lab-soft",
      text: "text-role-lab",
      description:
        "Manage live inventory, run donation camps, and respond to hospital requests from one dashboard.",
    },
    {
      icon: LayoutDashboard,
      name: "Admins",
      tone: "var(--role-admin)",
      soft: "bg-role-admin-soft",
      text: "text-role-admin",
      description:
        "Verify new facilities, oversee the donor base, and keep the whole network healthy and accountable.",
    },
  ];

  return (
    <div className="min-h-screen bg-linen">
      <Header />

      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden pt-32 pb-12 text-center md:pt-40">
        <div className="container relative z-10 mx-auto max-w-3xl px-4">
          <h1 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            Every Drop Has a{" "}
            <span className="italic text-oxblood">Story</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft md:text-xl">
            We're a platform that connects donors, hospitals, and blood labs
            so that no patient is ever left waiting on something a stranger
            was willing to give.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/signup?role=donor"
              className="inline-flex items-center justify-center rounded-xl bg-oxblood px-7 py-3 font-semibold text-linen shadow-md transition-all hover:bg-oxblood-dark hover:shadow-lg"
            >
              Join Our Mission
            </Link>
            <a
              href="#mission"
              className="inline-flex items-center justify-center rounded-xl border-2 border-ink/15 px-7 py-3 font-semibold text-ink transition-all hover:border-oxblood/40 hover:text-oxblood"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-12">
          <PulseDivider />
        </div>
      </section>

      {/* ============ Stats ============ */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-oxblood-soft">
                    <Icon className="h-8 w-8 text-oxblood" />
                  </div>
                  <div className="font-mono text-2xl font-semibold text-ink md:text-3xl">
                    {stat.number}
                  </div>
                  <div className="text-ink-soft">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Mission & Vision ============ */}
      <section id="mission" className="bg-linen-soft py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-display text-3xl text-ink md:text-4xl">
                Our Mission
              </h2>
              <p className="mb-6 text-lg text-ink-soft">
                To build a world where no one dies waiting for blood. We
                close the gap between voluntary donors and patients, so safe
                blood reaches the people who need it, when they need it.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-ink-soft">
                  <Clock className="mr-3 h-5 w-5 text-oxblood" />
                  24/7 emergency blood availability
                </div>
                <div className="flex items-center text-ink-soft">
                  <Shield className="mr-3 h-5 w-5 text-oxblood" />
                  Verified, safety-screened donors
                </div>
                <div className="flex items-center text-ink-soft">
                  <MapPin className="mr-3 h-5 w-5 text-oxblood" />
                  Nationwide network coverage
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 font-display text-2xl text-ink">
                Our Vision
              </h3>
              <p className="mb-6 text-ink-soft">
                A future where transfusion is never the hard part of
                someone's recovery — backed by a network of committed donors
                and the technology to match them in moments, not days.
              </p>
              <div className="rounded-xl bg-oxblood-soft p-6">
                <Award className="mb-4 h-10 w-10 text-oxblood" />
                <h4 className="mb-2 font-display text-lg text-ink">
                  Quality Promise
                </h4>
                <p className="text-sm text-ink-soft">
                  Every unit passes rigorous quality checks before it ever
                  reaches a patient — for the safety of donors and recipients
                  alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Values ============ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-oxblood-soft transition-colors group-hover:bg-oxblood/20">
                    <Icon className="h-8 w-8 text-oxblood" />
                  </div>
                  <h3 className="mb-2 font-display text-lg text-ink">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Built around four roles ============ */}
      <section className="bg-linen-soft py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Built Around Four Roles
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              LifeLine isn't one generic login — it's a different experience
              for everyone who keeps the blood supply moving.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${role.soft}`}
                  >
                    <Icon className={`h-6 w-6 ${role.text}`} />
                  </div>
                  <h3 className="mb-2 font-display text-lg text-ink">
                    {role.name}
                  </h3>
                  <p className="text-sm text-ink-soft">{role.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/signup"
              className="font-medium text-oxblood underline-offset-2 hover:underline"
            >
              Find your role and sign up →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-oxblood py-20 text-linen">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 font-display text-3xl md:text-4xl">
            Ready to Make a Difference?
          </h2>
          <p className="mb-8 text-lg text-linen/85">
            Join thousands of donors and care teams saving lives one donation
            at a time. A single donation can save up to 3 lives.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/signup?role=donor"
              className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-oxblood transition-colors hover:bg-linen-soft"
            >
              Become a Donor
            </Link>
            <Link
              to="/signup?role=blood-lab"
              className="rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              Organize a Camp
            </Link>
          </div>
        </div>
      </section>

      {/* ============ Contact ============ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
            <div className="text-center">
              <Phone className="mx-auto mb-4 h-8 w-8 text-oxblood" />
              <h3 className="mb-2 font-display text-lg text-ink">
                Emergency Helpline
              </h3>
              <p className="text-ink-soft">+1 (555) 123-HELP</p>
              <p className="text-ink-soft">24/7 available</p>
            </div>
            <div className="text-center">
              <Mail className="mx-auto mb-4 h-8 w-8 text-oxblood" />
              <h3 className="mb-2 font-display text-lg text-ink">Email Us</h3>
              <p className="text-ink-soft">help@lifeline.org</p>
              <p className="text-ink-soft">support@lifeline.org</p>
            </div>
            <div className="text-center">
              <Globe className="mx-auto mb-4 h-8 w-8 text-oxblood" />
              <h3 className="mb-2 font-display text-lg text-ink">
                Headquarters
              </h3>
              <p className="text-ink-soft">123 Healthcare Ave</p>
              <p className="text-ink-soft">Medical District, City 12345</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
