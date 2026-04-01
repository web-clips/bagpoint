import { Link } from 'react-router-dom';

function EmptyState({ icon, title, text }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">{icon}</div>
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to="/" className="dark-button empty-state__button">Перейти в каталог</Link>
    </div>
  );
}

export default EmptyState;
