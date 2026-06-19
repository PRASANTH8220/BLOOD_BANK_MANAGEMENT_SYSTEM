import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Heart, Building2, FlaskConical, LayoutDashboard, AlertCircle } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ROLES = [
  {
    key: "donor",
    label: "Donor",
    icon: Heart,
    activeTab: "bg-role-donor text-linen shadow-sm",
    badgeBg: "bg-role-donor-soft",
    badgeText: "text-role-donor",
    ring: "focus:border-role-donor focus:ring-role-donor",
    button: "bg-role-donor hover:bg-oxblood-dark",
    helper:
      "Sign in to track your donation history, upcoming camps, and eligibility status.",
  },
  {
    key: "hospital",
    label: "Hospital",
    icon: Building2,
    activeTab: "bg-role-hospital text-linen shadow-sm",
    badgeBg: "bg-role-hospital-soft",
    badgeText: "text-role-hospital",
    ring: "focus:border-role-hospital focus:ring-role-hospital",
    button: "bg-role-hospital hover:opacity-90",
    helper:
      "Sign in to request blood units, track fulfillment, and browse the donor directory.",
  },
  {
    key: "blood-lab",
    label: "Blood Lab",
    icon: FlaskConical,
    activeTab: "bg-role-lab text-linen shadow-sm",
    badgeBg: "bg-role-lab-soft",
    badgeText: "text-role-lab",
    ring: "focus:border-role-lab focus:ring-role-lab",
    button: "bg-role-lab hover:opacity-90",
    helper:
      "Sign in to manage live inventory, run camps, and handle hospital requests.",
  },
  {
    key: "admin",
    label: "Admin",
    icon: LayoutDashboard,
    activeTab: "bg-role-admin text-linen shadow-sm",
    badgeBg: "bg-role-admin-soft",
    badgeText: "text-role-admin",
    ring: "focus:border-role-admin focus:ring-role-admin",
    button: "bg-role-admin hover:opacity-90",
    helper: "Sign in to verify facilities and oversee the network.",
  },
];

export default function Login() {
  const [searchParams] = useSearchParams();
  const initialRole = ROLES.some((r) => r.key === searchParams.get("role"))
    ? searchParams.get("role")
    : "donor";

  const [activeRole, setActiveRole] = useState(initialRole);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const role = ROLES.find((r) => r.key === activeRole);
  const RoleIcon = role.icon;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const apiUrl = `${import.meta.env.VITE_API_URL || ""}/api/auth/login`;
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Handle non-JSON responses (like 404 HTML pages)
      let data = {};
      const contentType = res.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        data = await res.json();
      } else if (!res.ok) {
        data = { message: `Server error: ${res.status}` };
      }

      if (!res.ok) {
        if (data.message?.includes("awaiting admin approval")) {
          setError(
            "Your account is awaiting admin approval. Please wait for confirmation.",
          );
          return;
        }
        if (data.message?.includes("rejected")) {
          setError("Your registration has been rejected by admin.");
          return;
        }
        throw new Error(data.message || "Login failed");
      }

      const returnedRole = data.user?.role || "unknown";
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", returnedRole);

      const targetPath =
        data.redirect ||
        (returnedRole === "donor"
          ? "/donor"
          : returnedRole === "hospital"
            ? "/hospital"
            : returnedRole === "blood-lab"
              ? "/lab"
              : returnedRole === "admin"
                ? "/admin"
                : "/");

      navigate(targetPath, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linen px-4 pb-16 pt-32">
      <Header />

      <div className="mx-auto w-full max-w-md">
        {/* Role tabs */}
        <div className="mb-6 grid grid-cols-4 gap-1.5 rounded-2xl border border-parchment-deep bg-white p-1.5 shadow-sm">
          {ROLES.map((r) => {
            const Icon = r.icon;
            const active = r.key === activeRole;
            return (
              <button
                key={r.key}
                type="button"
                onClick={() => {
                  setActiveRole(r.key);
                  setError("");
                }}
                className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2.5 text-xs font-medium transition-all duration-200 ${
                  active ? r.activeTab : "text-ink-soft hover:bg-linen-soft"
                }`}
              >
                <Icon className="h-4 w-4" />
                {r.label}
              </button>
            );
          })}
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-parchment-deep bg-white p-8 shadow-xl shadow-oxblood/5">
          <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${role.badgeBg}`}>
            <RoleIcon className={`h-6 w-6 ${role.badgeText}`} />
          </div>
          <h2 className="text-center font-display text-2xl text-ink">
            {role.label} Login
          </h2>
          <p className="mt-2 text-center text-sm text-ink-soft">
            {role.helper}
          </p>

          {error && (
            <div className="mt-5 flex items-start gap-2 rounded-lg border border-oxblood/20 bg-oxblood-soft px-4 py-3 text-sm text-oxblood">
              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium text-ink">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full rounded-lg border border-parchment-deep px-4 py-3 outline-none transition focus:ring-2 disabled:opacity-50 ${role.ring}`}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-ink">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full rounded-lg border border-parchment-deep px-4 py-3 outline-none transition focus:ring-2 disabled:opacity-50 ${role.ring}`}
              />
            </div>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-ink-soft hover:text-oxblood"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`flex w-full items-center justify-center rounded-lg py-3 font-semibold text-linen transition disabled:cursor-not-allowed disabled:opacity-50 ${role.button}`}
            >
              {loading ? (
                <>
                  <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-linen border-t-transparent"></div>
                  Logging in...
                </>
              ) : (
                `Login as ${role.label}`
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-ink-soft">
            Don't have an account?{" "}
            <Link
              to={`/signup?role=${activeRole}`}
              className="font-medium text-oxblood hover:underline"
            >
              Sign up as {role.label}
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
