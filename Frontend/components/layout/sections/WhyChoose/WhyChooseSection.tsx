import {
  Award,
  Users,
  HelpCircle,
  MonitorPlay,
  BadgeDollarSign,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: <Award className="w-10 h-10 text-blue-600 mb-4" />,
    title: "15+ Years Experience",
    description: "Delivering results with quality teaching since 2003.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Experienced Faculty",
    description: "Highly qualified and passionate educators.",
  },
  {
    icon: <HelpCircle className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Doubt Support",
    description: "One-on-one doubt clearing and support system.",
  },
  {
    icon: <MonitorPlay className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Smart Classrooms",
    description: "Interactive tech-enabled learning environment.",
  },
  {
    icon: <BadgeDollarSign className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Affordable Fees",
    description: "Best education at minimal fees with scholarship support.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-blue-600" />,
    title: "Personalized Mentorship",
    description:
      "We assign personal mentors to students for academic guidance, motivation, and performance tracking.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Why Choose Arpita&apos;s Science Academy?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${
                index >= 3 ? "pr-6" : ""
              }`}
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
