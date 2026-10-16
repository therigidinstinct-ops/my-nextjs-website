
export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      description: "For individuals getting started.",
      features: [
        "Core features",
        "Easy setup",
        "Email support",
      ],
      featured: false,
    },
    {
      name: "Pro",
      price: "$19",
      description: "For growing projects and businesses.",
      features: [
        "Everything in Basic",
        "Advanced features",
        "Priority support",
      ],
      featured: true,
    },
    {
      name: "Business",
      price: "$49",
      description: "For teams that need more flexibility.",
      features: [
        "Everything in Pro",
        "Team features",
        "Dedicated assistance",
      ],
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full bg-white px-6 py-20 text-gray-900 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Simple Pricing
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Choose the right plan for you
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Transparent pricing, essential features, and a plan that fits your needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.featured
                  ? "border-indigo-600 bg-indigo-50 shadow-xl md:-translate-y-2"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.featured && (
                <span className="mb-4 w-fit rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-xl font-semibold">{plan.name}</h3>

              <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
                {plan.description}
              </p>

              <p className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-gray-500"> / month</span>
              </p>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-gray-700">
                    <span className="font-bold text-indigo-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-gray-300 text-gray-900 hover:bg-gray-50"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
