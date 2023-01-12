import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./comicsList.scss";

const setContent = (process, elements, newListLoading) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newListLoading ? (
        <ul className="comics__grid">{elements}</ul>
      ) : (
        <Spinner />
      );
    case "confirmed":
      return <ul className="comics__grid">{elements}</ul>;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Unexpected process state");
  }
};

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [offset, setOffset] = useState(100);
  const [newListLoading, setNewListLoading] = useState(false);
  const [endList, setEndList] = useState(false);
  const { clearError, getAllComics, process, setProcess } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
    // eslint-disable-next-line
  }, []);

  const onRequest = (offset, initial) => {
    clearError();

    initial ? setNewListLoading(false) : setNewListLoading(true);

    getAllComics(offset)
      .then(onComicsListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onComicsListLoaded = newComicsList => {
    if (newComicsList.length < 8) {
      setEndList(true);
    }

    setComicsList([...comicsList, ...newComicsList]);
    setNewListLoading(false);
    setOffset(offset => offset + 8);
  };

  const elements = comicsList.map(comics => {
    const { id, name, thumbnail } = comics;
    let { price } = comics;
    const imgStyle =
      thumbnail ===
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        ? { objectFit: "contain" }
        : null;

    price = price === 0 ? "Not available" : `${price}$`;

    return (
      <li key={id} className="comics__item">
        <Link to={`/marvel-test-project/comics/${id}`}>
          <img
            style={imgStyle}
            src={thumbnail}
            alt="ultimate war"
            className="comics__item-img"
          />
          <div className="comics__item-name">{name}</div>
          <div className="comics__item-price">{price}</div>
        </Link>
      </li>
    );
  });

  return (
    <div className="comics__list">
      {setContent(process, elements, newListLoading)}
      <button
        disabled={newListLoading ? true : false}
        className="button button__main button__long"
        onClick={() => onRequest(offset)}
        style={{ display: endList ? "none" : "block" }}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
