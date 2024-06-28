import css from "./ImageCard.module.css";

export default function ImageCard({
  image: { urls, description, user },
  openModal,
}) {
  return (
    <div>
      <img className={css.img} src={urls.small} alt={description} onClick={() => openModal(urls.regular, description, user.name)}></img>
    </div>
  );
}