import { processContent, processSteps } from "../data/process";
import "../styles/Process.css";

const Process = () => {
  return (
    <section className="process" id="process">
      <div className="process-container">
        <header className="process-header">
          <p className="process-eyebrow">{processContent.eyebrow}</p>

          <h2 className="process-title">{processContent.title}</h2>

          <p className="process-description">{processContent.description}</p>
        </header>

        <div className="process-grid">
          {processSteps.map((item) => (
            <article className="process-card" key={item.id}>
              <span className="process-card__step">{item.step}</span>

              <h3 className="process-card__title">{item.title}</h3>

              <p className="process-card__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
