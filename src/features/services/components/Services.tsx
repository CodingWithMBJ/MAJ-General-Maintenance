import { services, servicesContent } from "../data/services";
import "../styles/Services.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <header className="services-header">
          <p className="services-eyebrow">{servicesContent.eyebrow}</p>

          <h2 className="services-title">{servicesContent.title}</h2>

          <p className="services-description">{servicesContent.description}</p>
        </header>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
