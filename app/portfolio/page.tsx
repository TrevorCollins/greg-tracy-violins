import Section from "@/components/Section";
import { PortfolioImages } from "@/lib/paths";
import Image from "next/image";

const Portfolio = () => {
  return (
    <Section header="Portfolio">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {PortfolioImages.map((image, index) => (
          <div>
            <img
              key={index}
              className="object-cover object-center w-80 h-80 max-w-full rounded-lg border-4 border-background"
              src={image}
              alt={`Portfolio Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
