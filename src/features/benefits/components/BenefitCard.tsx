import type { Benefit } from "../data/benefits";

interface BenefitCardProps {
  card: Benefit;
}

const BenefitCard = ({ card }: BenefitCardProps) => {
  const Icon = card.icon;

  return (
    <article className="benefit-card">
      <div className="benefit-card__icon">
        <Icon className="card-icon" aria-hidden="true" />
      </div>

      <section className="benefit-card__content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-text">{card.description}</p>
      </section>
    </article>
  );
};

export default BenefitCard;
