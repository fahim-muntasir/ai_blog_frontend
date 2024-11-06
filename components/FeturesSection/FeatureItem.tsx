type FeatureItemProps = {
  title: string;
  description: string;
};

export default function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="bg-secondary rounded-[10px] p-6 border border-dark20 mb-4 md:mb-0">
      <h3 className="font-medium text-lg md:text-xl lg:text-2xl mb-2">{title}</h3>
      <p className="text-grey60 text-sm md:text-base lg:text-lg">{description}</p>
    </div>
  );
}
