"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Force light theme and ensure visibility
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      const body = document.body;

      // Remove dark class
      root.classList.remove("dark");

      // Set explicit light theme
      root.style.colorScheme = "light";
      root.setAttribute("data-theme", "light");

      // Ensure background colors are set
      root.style.backgroundColor = "#ffffff";
      body.style.backgroundColor = "#f0fdf4";
      body.style.color = "#111827";

      // Force remove any dark mode styles
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#171717");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Small delay to ensure cookie is set
        setTimeout(() => {
          router.push("/admin/dashboard");
          router.refresh();
        }, 100);
      } else {
        setError(data.message || data.error || "Login failed");
        setLoading(false);
      }
    } catch (err: any) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #ecfdf5 0%, #ffffff 50%, #eff6ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: "28rem" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "1rem",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            padding: "1rem",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <Link
              href="/"
              style={{
                display: "inline-block",
                position: "relative",
                width: "10rem",
                height: "10rem",
              }}
            >
              <Image
                src="/images/logo.png"
                alt="NewsBlogs"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>

            <h1
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "0.5rem",
              }}
            >
              Admin Login
            </h1>
            <p style={{ color: "#4b5563" }}>Sign in to manage your content</p>
          </div>

          {error && (
            <div
              style={{
                marginBottom: "1rem",
                padding: "0.75rem",
                backgroundColor: "#fee2e2",
                border: "1px solid #f87171",
                color: "#991b1b",
                borderRadius: "0.5rem",
              }}
            >
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "0.5rem",
                }}
              >
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.625rem 1rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.5rem",
                  color: "#111827",
                  fontSize: "1rem",
                }}
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "0.5rem",
                }}
              >
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "0.625rem 1rem",
                    paddingRight: "2.5rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.5rem",
                    color: "#111827",
                    fontSize: "1rem",
                  }}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#6b7280",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.25rem",
                  }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="relative w-full px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs overflow-hidden transition-all duration-500 group cursor-pointer shadow-md z-10 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                borderColor: "rgb(83, 200, 30)",
                borderWidth: "2px",
                borderStyle: "solid",
                color: "#000000",
              }}
            >
              {!loading && (
                <span
                  className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out group-hover:w-full -z-10"
                  style={{ backgroundColor: "rgb(83, 200, 30)" }}
                ></span>
              )}

              {!loading && (
                <span
                  className="absolute inset-0 w-full h-full -z-10 transition-transform duration-1000 -translate-x-full group-hover:translate-x-full ease-in-out"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent)",
                  }}
                ></span>
              )}

              <span className="relative z-20 group-hover:text-black transition-colors duration-300">
                {loading ? "Verifying..." : "Login"}
              </span>
            </button>
          </form>

          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <Link
              href="/"
              style={{
                fontSize: "0.875rem",
                color: "#626d58",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              ← Back to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
