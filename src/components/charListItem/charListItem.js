
const CharListItem = (props) => {
	const {thumbnail, name} = props;

	return (
		<li className="char__item">
			<img src={thumbnail} alt="char"/>
			<div className="char__name">{name}</div>
		</li>
	)
}

export default CharListItem;