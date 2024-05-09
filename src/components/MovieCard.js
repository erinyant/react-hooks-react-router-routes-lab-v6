import {Link} from 'react-router-dom';

function MovieCard({title, id}) {
  console.log(id)
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to={`/movie/${id}`}>View Info</Link>
    </article>
  );
};

export default MovieCard;