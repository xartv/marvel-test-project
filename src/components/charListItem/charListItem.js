const CharListItem = props => {
  const { thumbnail, imgStyle, name, onCharSelected, onSetRef, onFocus } =
    props;

  return (
    <li
      ref={onSetRef}
      className="char__item"
      onClick={onCharSelected}
      tabIndex={0}
      onFocus={e => onFocus(e)}
    >
      <img src={thumbnail} style={imgStyle} alt={name} />
      <div className="char__name">{name}</div>
    </li>
  );
};

export default CharListItem;
