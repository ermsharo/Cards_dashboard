import styled from "styled-components";
import { Button } from "../../../styles/generalStyles";
import { Colors } from "./../../../styles/defaultProps";
import NavigationLink from "../../atoms/NavigationLink";
export interface HeaderProps {}

export const HeaderBox = styled.div`
  background-color: ${Colors.secondBackround};
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  justify-content: end;
  gap: 2.5rem;
  z-index: 4;
  position: fixed;
  width: calc(100% - 2rem);
  padding: 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;
const OptionsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 2.5rem;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const HeaderOptionObj = (name: string, hash: string) => {
  return { name: name, to: `#${hash}` };
};

const HeaderOptions = [
  HeaderOptionObj("Home", "banner_home"),
  HeaderOptionObj("About", "about_me_home"),
  HeaderOptionObj("Projects", "projects_home"),
  HeaderOptionObj("Contact", "contact_home"),
];

function Header() {
  return (
    <HeaderBox>
      <OptionsBox>
        {HeaderOptions.map((item, index) => {
          return (
            <Option key={index}>
              <NavigationLink to={{ pathname: "/", hash: `${item.to}` }}>
                {item.name}
              </NavigationLink>
            </Option>
          );
        })}
      </OptionsBox>

      <ButtonBox>
        <Button>Download CV</Button>
      </ButtonBox>
    </HeaderBox>
  );
}

export default Header;
