import { useState } from "react";
import styled from "styled-components";
import { fakeMenu1 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Product from "./Product";

export default function Menu() {
  const [menu, setmenu] = useState(fakeMenu1);

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          //   <Product
          //     imageSource={produit.imageSource}
          //     title={produit.title}
          //     price={produit.price}
          //   />
          <Product {...produit} />
        );
      })}
    </MenuStyled>
  );
}
const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
