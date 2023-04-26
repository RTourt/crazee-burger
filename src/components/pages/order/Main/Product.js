import styled from "styled-components";

export default function Product({ imageSource, title, price }) {
  return (
    <ProductStyled className="produit">
      <div className="image">
        <img src={imageSource} alt={title}></img>
      </div>
      <div className="info-text">
        <div class="description">
          <div class="title">{title}</div>
          <div className="price">{price}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}
const ProductStyled = styled.div`
  background: red;
  width: 240px;
  height: 330px;
  .image {
    border: 1px solid fuchsia;
    width: 100px;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .description {
    border: 1px solid fuchsia;
  }
`;
