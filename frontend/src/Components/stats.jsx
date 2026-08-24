import "../styles/stats.css";

const stats = [
  {
    number: "10K+",
    label: "Ideas Analyzed",
  },
  {
    number: "95%",
    label: "AI Accuracy",
  },
  {
    number: "50+",
    label: "Industries",
  },
  {
    number: "24/7",
    label: "AI Support",
  },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
