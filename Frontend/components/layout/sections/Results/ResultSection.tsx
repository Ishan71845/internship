import ResultsCarousel from "./ResultCarousel";

export const ResultsSection = () => {
  return (
    <section
      className="py-16 bg-gray-50"
      id="results"
      role="region"
      aria-label="Results Section"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
        Our Student Achievements
      </h2>
      <ResultsCarousel />
    </section>
  );
};
