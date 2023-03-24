import styled from "styled-components";
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
  width: calc(100% - 3rem);
  padding: 1.5rem;
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
  return { name: name, to: `${hash}` };
};

const HeaderOptions = [
  HeaderOptionObj("New cards", "banner_home"),
  HeaderOptionObj("Waiting cards", "about_me_home"),
  HeaderOptionObj("Done cards", "projects_home"),
  HeaderOptionObj("General status", "contact_home"),
  HeaderOptionObj("ranking cards", "contact_home"),
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
    </HeaderBox>
  );
}

export default Header;
