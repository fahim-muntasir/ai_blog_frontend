import FeatureCategory from "./FeatureCategory";

export default function FeaturesSection() {
  const featureData = [
    {
      intro: {
        icon: "/images/icon4.svg",
        title: "Future Technology Blog",
        description: "Stay informed with our blog section dedicated to future technology.",
      },
      items: [
        { title: "Quantity", description: "Over 1,000 articles on emerging tech trends and breakthroughs." },
        { title: "Variety", description: "Articles cover fields like AI, robotics, biotechnology, and more." },
        { title: "Frequency", description: "Fresh content added daily to keep you up to date." },
        { title: "Authoritative", description: "Written by our team of tech experts and industry professionals." },
      ],
    },
    {
      intro: {
        icon: "/images/icon5.svg",
        title: "Research Insights Blogs",
        description: "Dive deep into future technology concepts with our research section.",
      },
      items: [
        { title: "Depth", description: "500+ research articles for in-depth understanding" },
        { title: "Graphics", description: "Visual aids and infographics to enhance comprehension." },
        { title: "Trends", description: "Explore emerging trends in future technology research." },
        { title: "Contributors", description: "Contributions from tech researchers and academics." },
      ],
    },
  ];

  return (
    <section>
      <div className="bg-secondary border-b border-dark20 py-10 md:py-16 lg:20">
        <div className="container mx-auto px-6 md:px-0 font-medium">
          <p className="bg-dark20 inline-block py-2 px-3 mb-4 rounded-md text-sm md:text-base">
            Unlock the Power of
          </p>
          <h3 className="font-kumbh text-[28px] md:text-[44px] lg:text-[58px]">
            FutureTech Features
          </h3>
        </div>
      </div>

      {featureData.map((feature, index) => (
        <FeatureCategory key={index} {...feature} />
      ))}
    </section>
  );
}
