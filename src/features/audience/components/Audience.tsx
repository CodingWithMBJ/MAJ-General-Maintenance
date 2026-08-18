import { audience, audienceContent } from "../data/audience";

import "../styles/Audience.css";

const Audience = () => {
  return (
    <section className="audience" id="audience">
      <div className="audience__container">
        <header className="audience__header">
          <p className="audience__eyebrow">{audienceContent.eyebrow}</p>

          <h2 className="audience__title">{audienceContent.title}</h2>

          <p className="audience__description">{audienceContent.description}</p>
        </header>

        <div className="audience__cards">
          {audience.map((item) => {
            const Icon = item.icon;

            return (
              <article className="audience-card" key={item.id}>
                <div className="audience-card__icon">
                  <Icon aria-hidden="true" />
                </div>

                <h3 className="audience-card__title">{item.title}</h3>

                <p className="audience-card__description">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audience;
