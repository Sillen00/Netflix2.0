import { Carousel } from "@mantine/carousel";
import { Title } from "@mantine/core";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { StyledMovieCarousel } from "./MovieCarousel.style";
interface Prop {
  title: string;
}

function MovieCarousel({ title }: Prop) {
  const { movies } = useContext(MovieContext);

  return (
    <StyledMovieCarousel aria-label='Movie carousel'>
      <Title order={2}>{title}</Title>
      <Carousel
        slideSize={{ base: "60%", sm: "30%", md: "16%" }}
        align='start'
        slideGap='sm'
        controlsOffset='xs'
        slidesToScroll={2}
        loop
      >
        {movies.map((movie, index) => (
          <Carousel.Slide key={index}>
            <img src={movie.thumbnail} alt={`${movie.title}`} />

            <div className='overlay'>
              <span data-testid={`year-${movie.year}-${movie.title}`}>{movie.year}</span>
              <span data-testid={`rating-${movie.rating}-${movie.title}`}>{movie.rating}</span>
            </div>
          </Carousel.Slide>
        ))}
        ;
      </Carousel>
    </StyledMovieCarousel>
  );
}

export default MovieCarousel;
