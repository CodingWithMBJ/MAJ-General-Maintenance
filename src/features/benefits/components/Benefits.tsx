import { benefits } from "../data/benefits";
import "../styles/Benefits.css";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <div className="benefits-container">
        <header className="benefits-header">
          <p className="benefits-eyebrow">Why Choose MAJ</p>

          <h2 className="benefits-title">
            Reliable Work. Practical Solutions.
          </h2>

          <p className="benefits-description">
            Property maintenance should be straightforward. We focus on
            dependable service, clear communication, and quality workmanship
            from start to finish.
          </p>
        </header>

        <div className="card-container">
          {benefits.map((card) => (
            <BenefitCard card={card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
