import { Container } from './style';
import { FiStar } from 'react-icons/fi';

export function Stars({ rating }) {
  const roundedRating = Math.round(rating * 2) / 2; 

  return (
    <Container>
      {[...Array(5)].map((_, index) => (
        <li key={index} className={index + 1 <= roundedRating ? 'bg' : ''}>
          <FiStar />
        </li>
      ))}
    </Container>
  );
}