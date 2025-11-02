import { Award, Users, Trophy, Star } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      value: "8",
      label: "Award Categories",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: "500+",
      label: "Nominations Expected",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      value: "50+",
      label: "Distinguished Winners",
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      value: "1",
      label: "United Nation",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Celebrating Excellence Together
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            A national platform bringing together the Emirates' finest leaders, innovators, and changemakers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
