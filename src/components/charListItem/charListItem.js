
const CharListItem = (props) => {
	const {thumbnail, imgStyle, name, onCharSelected} = props;

	return (
		<li className="char__item" onClick={onCharSelected}>
			<img src={thumbnail} style={imgStyle} alt={name}/>
			<div className="char__name">{name}</div>
		</li>
	)
}

export default CharListItem;