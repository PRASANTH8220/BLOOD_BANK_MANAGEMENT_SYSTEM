import { useSearchParams, Link } from "react-router-dom";
import { Heart, Building2, FlaskConical } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DonorRegister from "./DonorRegister";
import FacultyRegister from "./FacultyRegister";

const ROLES = [
  {
    key: "donor",
    label: "Donor",
    icon: Heart,
    activeTab: "bg-role-donor text-linen shadow-sm",
    badgeBg: "bg-role-donor-soft",
    badgeText: "text-role-donor",
    helper:
      "Register to donate blood, track your eligibility, and get notified when your blood type is needed.",
  },
  {
    key: "hospital",
    label: "Hospital",
    icon: Building2,
    activeTab: "bg-role-hospital text-linen shadow-sm",
    badgeBg: "bg-role-hospital-soft",
    badgeText: "text-role-hospital",
    helper:
      "Register your hospital to request blood units and access the verified donor network.",
  },
  {
    key: "blood-lab",
    label: "Blood Lab",
    icon: FlaskConical,
    activeTab: "bg-role-lab text-linen shadow-sm",
    badgeBg: "bg-role-lab-soft",
    badgeText: "text-role-lab",
    helper:
      "Register your blood lab to manage inventory, run camps, and fulfill hospital requests.",
  },
];

// Map common aliases (e.g. "facility") to a valid tab key.
const ROLE_ALIASES = { facility: "hospital", lab: "blood-lab" };

export default function Signup() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = ROLE_ALIASES[searchParams.get("role")] || searchParams.get("role");
  const initialRole = ROLES.some((r) => r.key === requested) ? requested : "donor";

  const activeRole = ROLES.some((r) => r.key === initialRole) ? initialRole : "donor";
  const role = ROLES.find((r) => r.key === activeRole);

  const setActiveRole = (key) => {
    setSearchParams({ role: key });
  };

  return (
    <div className="min-h-screen bg-linen pb-16 pt-32">
      <Header />

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h1 className="font-display text-3xl text-ink md:text-4xl">
            Join LifeLine
          </h1>
          <p className="mt-3 text-lg text-ink-soft">
            One platform, three ways to help. Choose the role that fits you.
          </p>
        </div>

        {/* Role tabs */}
        <div className="mx-auto mb-10 flex max-w-xl gap-2 rounded-2xl border border-parchment-deep bg-white p-1.5 shadow-sm">
          {ROLES.map((r) => {
            const Icon = r.icon;
            const active = r.key === activeRole;
            return (
              <button
                key={r.key}
                type="button"
                onClick={() => setActiveRole(r.key)}
                className={`flex flex-1 flex-col items-center gap-1.5 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                  active ? r.activeTab : "text-ink-soft hover:bg-linen-soft"
                }`}
              >
                <Icon className="h-5 w-5" />
                {r.label}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mb-10 flex max-w-xl items-start gap-3 rounded-xl border border-parchment-deep bg-white px-5 py-4">
          <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${role.badgeBg}`}>
            <role.icon className={`h-4 w-4 ${role.badgeText}`} />
          </div>
          <p className="text-sm text-ink-soft">{role.helper}</p>
        </div>

        {/* The actual registration form, remounted per role */}
        <div key={activeRole}>
          {activeRole === "donor" && <DonorRegister />}
          {activeRole === "hospital" && (
            <FacultyRegister initialFacilityType="Hospital" />
          )}
          {activeRole === "blood-lab" && (
            <FacultyRegister initialFacilityType="Blood Lab" />
          )}
        </div>

        <p className="mt-8 text-center text-sm text-ink-soft">
          Already have an account?{" "}
          <Link
            to={`/login?role=${activeRole}`}
            className="font-medium text-oxblood hover:underline"
          >
            Sign in as {role.label}
          </Link>
        </p>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
