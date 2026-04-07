import { type FormEvent, useState } from "react";

type UserType = "student" | "publisher";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>("student");
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (val: string) => {
    if (!val) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
      return "Please enter a valid email.";
    return "";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const err = validateEmail(email);
    if (err) {
      setEmailError(err);
      return;
    }
    setEmailError("");
    setStatus("loading");

    try {
      // Backend interface not yet exposed; graceful simulated success
      await new Promise((res) => setTimeout(res, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  if (status === "success") {
    return (
      <section
        id="waitlist"
        className="bg-hero py-24 px-6 section-divider"
        data-ocid="waitlist-success"
      >
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="rule-gold w-16" />
          <h3
            className="font-display font-lighter text-3xl"
            style={{ color: "oklch(0.93 0.007 56.72)" }}
          >
            You're on the list.
          </h3>
          <p
            className="font-body font-lighter text-base leading-relaxed"
            style={{ color: "oklch(0.68 0.022 56.72)" }}
          >
            We'll be in touch as soon as ScholarMkt opens its doors. Keep doing
            great work.
          </p>
          <div className="rule-gold w-16" />
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="bg-hero py-24 px-6"
      data-ocid="waitlist-section"
    >
      <div className="max-w-xl mx-auto">
        {/* Label */}
        <p
          className="text-xs uppercase tracking-[0.22em] font-body font-lighter mb-6"
          style={{ color: "oklch(0.62 0.022 56.72)" }}
        >
          Early Access
        </p>

        {/* Headline */}
        <h2
          className="font-display font-lighter text-[clamp(1.8rem,4vw,2.6rem)] leading-snug mb-4"
          style={{ color: "oklch(0.93 0.007 56.72)" }}
        >
          Join the waitlist.
        </h2>
        <p
          className="font-body font-lighter text-base mb-8 leading-relaxed"
          style={{ color: "oklch(0.68 0.022 56.72)" }}
        >
          Be among the first students and publishers to access the marketplace
          when we launch.
        </p>

        <div className="rule-gold w-16 mb-10" />

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-7"
        >
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="waitlist-email"
              className="text-xs uppercase tracking-[0.18em] font-body font-lighter"
              style={{ color: "oklch(0.72 0.022 56.72)" }}
            >
              Email Address
            </label>
            <input
              id="waitlist-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
              placeholder="your@email.com"
              className="bg-transparent border-b border-border/60 focus:border-gold text-sm font-body font-lighter py-3 outline-none transition-smooth placeholder:text-muted-foreground/40"
              style={{ color: "oklch(0.93 0.007 56.72)" }}
              data-ocid="waitlist-email"
              aria-describedby={emailError ? "email-error" : undefined}
            />
            {emailError && (
              <p
                id="email-error"
                className="text-xs font-body font-lighter mt-1"
                style={{ color: "oklch(0.65 0.19 22)" }}
                role="alert"
              >
                {emailError}
              </p>
            )}
          </div>

          {/* User type */}
          <fieldset>
            <legend
              className="text-xs uppercase tracking-[0.18em] font-body font-lighter mb-3"
              style={{ color: "oklch(0.72 0.022 56.72)" }}
            >
              I am a —
            </legend>
            <div className="flex gap-4">
              {(["student", "publisher"] as UserType[]).map((type) => {
                const active = userType === type;
                return (
                  <label key={type} className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      value={type}
                      checked={active}
                      onChange={() => setUserType(type)}
                      className="sr-only"
                      data-ocid={`waitlist-type-${type}`}
                    />
                    <span
                      className="flex items-center justify-center py-3 text-sm font-body font-lighter uppercase tracking-widest border transition-smooth"
                      style={{
                        borderColor: active
                          ? "oklch(0.72 0.082 56.72)"
                          : "oklch(0.35 0.010 56.72)",
                        color: active
                          ? "oklch(0.72 0.082 56.72)"
                          : "oklch(0.55 0.015 56.72)",
                        background: active
                          ? "oklch(0.72 0.082 56.72 / 0.08)"
                          : "transparent",
                      }}
                    >
                      {type}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Error */}
          {status === "error" && (
            <p
              className="text-xs font-body font-lighter"
              style={{ color: "oklch(0.65 0.19 22)" }}
              role="alert"
            >
              {errorMsg}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 py-4 text-sm font-body font-lighter uppercase tracking-[0.22em] border border-gold text-gold hover:bg-gold/10 transition-smooth disabled:opacity-50"
            data-ocid="waitlist-submit"
          >
            {status === "loading" ? "Submitting…" : "Request Early Access"}
          </button>
        </form>
      </div>
    </section>
  );
}
