import { Box, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { Movie } from "../../contexts/MovieContext";
import { titleToSlug } from "../../pages/MovieViewPage";
import BookmarkButton from "./BookMarkButton";
import { StyledMovieCard } from "./MovieCard.style";

function MovieCard(movie: Movie) {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Replace the failed image with the placeholder image
    event.currentTarget.src = "./404.png";
  };

  return (
    <StyledMovieCard data-testid={`id-${movie.title}`}>
      <Link to={`/movie/${titleToSlug(movie.title)}`}>
        <Box className='thumbnail-box'>
          <Image
            className='thumbnail'
            src={movie.thumbnail}
            onError={handleImageError}
            alt={movie.title}
          />
        </Box>
      </Link>
      <Box className='movie-card-bottom'>
        <Link to={`/movie/${titleToSlug(movie.title)}`}>
          <Box className='movie-card-text'>
            <Text>{movie.title}</Text>
            <Text>{movie.year}</Text>
            <Text>{movie.rating}</Text>
          </Box>
        </Link>
        <BookmarkButton {...movie} />
      </Box>
    </StyledMovieCard>
  );
}

export default MovieCard;
