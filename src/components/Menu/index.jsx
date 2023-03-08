import {
  ContainerMenu,
  MenuLeftArea,
  MenuRightArea,
  MenuOptions,
  MenuOptionGroup,
  OptionMenu,
  ImgIcon,
} from "./styled";
import logoImage from "../../../public/logo.png";
import iconsCat from "../../../public/cat.png";
import iconCar from "../../../public/car.png";
import iconDog from "../../../public/dog.png";
import iconTech from "../../../public/ai.png";
import iconSave from "../../../public/save.png";
import { Link } from "react-router-dom";
import { Search } from "../Search";

export const Menu = () => {
  return (
    <ContainerMenu>
      <MenuLeftArea>
        <Link to={"/"}>
          <img src={logoImage} alt="" width="50px" />
        </Link>
        FireGifs
      </MenuLeftArea>

      <MenuRightArea>
        <MenuOptions>
          <MenuOptionGroup>
            <Link className="linkWhite" to={"/category/car"}>
              <OptionMenu>
                <ImgIcon src={iconCar} alt="" srcset="" />
                Carros
              </OptionMenu>
            </Link>
            <Link className="linkWhite" to={"/category/cat"}>
              <OptionMenu>
                <ImgIcon src={iconsCat} alt="" srcset="" />
                Gatos
              </OptionMenu>
            </Link>
            <Link className="linkWhite" to={"/category/dog"}>
              <OptionMenu>
                <ImgIcon src={iconDog} alt="" srcset="" />
                Cachorros
              </OptionMenu>
            </Link>
            <Link className="linkWhite" to={"/category/technology"}>
              <OptionMenu>
                <ImgIcon src={iconTech} alt="" srcset="" />
                Tecnologia
              </OptionMenu>
            </Link>
            <Link className="linkWhite" to={"/favorites"}>
              <OptionMenu>
                <ImgIcon src={iconSave} alt="" srcset="" />
                Salvos
              </OptionMenu>
            </Link>
            <Search />
          </MenuOptionGroup>
        </MenuOptions>
      </MenuRightArea>
    </ContainerMenu>
  );
};
