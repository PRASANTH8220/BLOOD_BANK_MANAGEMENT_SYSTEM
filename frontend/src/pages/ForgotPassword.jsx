import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const apiUrl = `${import.meta.env.VITE_API_URL || ""}/api/auth/forgot-password`;
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      let data = {};
      const contentType = res.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        data = await res.json();
      } else if (!res.ok) {
        data = { message: `Server error: ${res.status}` };
      }

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      alert("If account exists, reset instructions sent to email.");
    } catch (err) {
      console.error("Forgot password error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-96"
      >
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded mb-3 text-sm">
            {error}
          </div>
        )}
        <input
          type="email"
          placeholder="Enter Email"
          className="border p-2 w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <button
          className="bg-purple-500 text-white py-2 px-4 rounded w-full disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Sending..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}