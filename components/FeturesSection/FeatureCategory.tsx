import FeatureIntro from "./FeatureIntro";
import FeatureItem from "./FeatureItem";

type FeatureItemType = {
  title: string;
  description: string;
};

type FeatureIntoType = {
  icon: string;
  title: string;
  description: string;
};

type FeatureCategoryProps = {
  intro: FeatureIntoType;
  items: FeatureItemType[];
};

export default function FeatureCategory({
  intro,
  items,
}: FeatureCategoryProps) {
  return (
    <div className="border-b border-dark20">
      <div className="container mx-auto px-6 md:px-0 md:flex md:justify-between">
        <FeatureIntro {...intro} />
        <div className="w-full md:w-2/3 mb-8 md:mb-0 md:grid md:grid-cols-2 md:gap-4 lg:gap-6 md:py-16 md:pl-16">
          {items.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
