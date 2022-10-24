
const CharListItem = (props) => {
	const {thumbnail, imgStyle, name} = props;

	return (
		<li className="char__item">
			<img src={thumbnail} style={imgStyle} alt={name}/>
			<div className="char__name">{name}</div>
		</li>
	)
}

export default CharListItem;