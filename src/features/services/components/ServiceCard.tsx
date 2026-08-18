import type { Service } from "../data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-card__icon">
        <Icon aria-hidden="true" />
      </div>

      <div className="service-card__content">
        <h3 className="service-card__title">{service.title}</h3>

        <p className="service-card__short-description">
          {service.shortDescription}
        </p>

        <p className="service-card__description">{service.description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
