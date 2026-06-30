import { TextPressure } from "./TextPressure";

export function Hero() {
  return (
    <section id="top" className="portfolio-cover relative overflow-hidden px-5 sm:px-8">
      <div className="portfolio-cover-field" aria-hidden="true" />

      <div className="portfolio-cover-center" aria-label="Chen Lijun portfolio">
        <h1 className="portfolio-title">
          <TextPressure text="PORTFOLIO" flex width weight />
        </h1>
      </div>

      <div className="portfolio-bottom-left">
        <p className="portfolio-person-name">
          <TextPressure text="chen lijun" />
        </p>
        <a className="portfolio-visit-button" href="#work">
          <span aria-hidden="true">↗</span>
          <span>
            <TextPressure text="访问网站" />
          </span>
        </a>
      </div>

      <div className="portfolio-bottom-right">
        <p className="portfolio-question">
          <TextPressure text="陈丽君作品集" italic />
        </p>
        <p className="portfolio-year">
          <TextPressure text="2026" />
        </p>
        <span className="portfolio-search-icon" aria-hidden="true" />
      </div>
    </section>
  );
}
