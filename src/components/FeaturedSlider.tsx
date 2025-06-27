interface FeaturedSlide {
  backgroundImage: string;
  thumbImage?: string;
  thumbAlt?: string;
  date: string;
  author: string;
  authorUrl?: string;
  title: string;
  url: string;
}

interface FeaturedSliderProps {
  slides: FeaturedSlide[];
}

export default function FeaturedSlider({ slides }: FeaturedSliderProps) {
  return (
    <div className="brick entry featured-grid animate-this">
      <div className="entry-content">
        <div id="featured-post-slider" className="flexslider">
          <ul className="slides">
            {slides.map((slide, index) => (
              <li key={index}>
                <div className="featured-post-slide">
                  <div
                    className="post-background"
                    style={{
                      backgroundImage: `url('${slide.backgroundImage}')`,
                    }}
                  ></div>
                  
                  {slide.thumbImage && (
                    <div className="entry-thumb">
                      <a href={slide.url} className="thumb-link">
                        <img src={slide.thumbImage} alt={slide.thumbAlt || slide.title} />
                      </a>
                    </div>
                  )}
                  
                  <div className="overlay"></div>

                  <div className="post-content">
                    <ul className="entry-meta">
                      <li>{slide.date}</li>
                      <li>
                        <a href={slide.authorUrl || "#"} className="author">
                          {slide.author}
                        </a>
                      </li>
                    </ul>

                    <h1 className="slide-title">
                      <a href={slide.url} title="">
                        {slide.title}
                      </a>
                    </h1>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
