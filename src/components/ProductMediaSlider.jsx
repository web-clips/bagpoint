import { useMemo, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

function ProductMediaSlider({ images, alt, badge }) {
  const media = useMemo(() => (images?.length ? images : ['https://via.placeholder.com/800x900?text=Bag+Point']), [images]);
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const prev = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrent((value) => (value === 0 ? media.length - 1 : value - 1));
  };

  const next = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrent((value) => (value === media.length - 1 ? 0 : value + 1));
  };

  const goTo = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrent(index);
  };

  const handleTouchStart = (event) => {
    touchStart.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    touchEnd.current = event.changedTouches[0].clientX;
    const delta = touchStart.current - touchEnd.current;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) next(event);
    else prev(event);
  };

  return (
    <div className="media-slider" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {badge ? <span className="media-slider__badge">{badge}</span> : null}
      <div className="media-slider__track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {media.map((image, index) => (
          <div className="media-slider__slide" key={`${alt}-${index}`}>
            <img src={image} alt={alt} className="media-slider__image" />
          </div>
        ))}
      </div>

      {media.length > 1 ? (
        <>
          <button type="button" className="media-slider__nav media-slider__nav--prev" onClick={prev} aria-label="Предыдущее фото">
            <ChevronLeftIcon />
          </button>
          <button type="button" className="media-slider__nav media-slider__nav--next" onClick={next} aria-label="Следующее фото">
            <ChevronRightIcon />
          </button>
          <div className="media-slider__dots">
            {media.map((_, index) => (
              <button
                type="button"
                key={index}
                className={`media-slider__dot ${index === current ? 'is-active' : ''}`}
                onClick={(event) => goTo(event, index)}
                aria-label={`Фото ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ProductMediaSlider;
