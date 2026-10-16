import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "Built for speed",
    description:
      "Keep your work moving with a streamlined experience that puts the essentials within reach.",
    icon: <path d="m13 2-9 12h7l-1 8 10-12h-7l1-8Z" />,
  },
  {
    title: "Security at the core",
    description:
      "Approach every task with confidence, supported by thoughtful safeguards and clear controls.",
    icon: (
      <>
        <path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
  },
  {
    title: "Seamless collaboration",
    description:
      "Bring people and ideas together, with a shared space to stay connected and move forward.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 21v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M21 21v-2a6 6 0 0 0-4-5.65" />
      </>
    ),
  },
  {
    title: "Insights that matter",
    description:
      "Turn the bigger picture into clear next steps with information that helps you make better decisions.",
    icon: <path d="M4 3v17h17M8 16v-4M13 16V8M18 16V5" />,
  },
  {
    title: "Flexible by design",
    description:
      "Make the experience your own with adaptable options that fit the way you and your team work.",
    icon: (
      <>
        <path d="M4 7h7M15 7h5M4 17h3M11 17h9" />
        <circle cx="13" cy="7" r="2" />
        <circle cx="9" cy="17" r="2" />
      </>
    ),
  },
  {
    title: "Support you can trust",
    description:
      "Find a helpful answer when you need it, so you can spend less time getting stuck and more time progressing.",
    icon: (
      <>
        <path d="M3 14v-2a9 9 0 0 1 18 0v2M21 17v1a3 3 0 0 1-3 3h-3" />
        <rect x="3" y="12" width="4" height="6" rx="2" />
        <rect x="17" y="12" width="4" height="6" rx="2" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-24 bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            Features
          </p>
          <h2
            id="features-heading"
            className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
          >
            Everything you need to move forward
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Thoughtful tools, meaningful insights, and dependable support —
            designed to make your everyday work feel effortless.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-lg border border-border bg-card p-7 shadow-sm motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 hover:shadow-md motion-safe:hover:-translate-y-1 sm:p-8"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                  focusable="false"
                >
                  {feature.icon}
                </svg>
              </span>
              <h3 className="mt-6 text-lg font-semibold leading-snug">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
