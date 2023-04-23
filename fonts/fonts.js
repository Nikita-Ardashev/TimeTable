import { createGlobalStyle } from "styled-components";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoLight from "../assets/fonts/Roboto-Light.ttf";

export default GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'RobotoRegular';
    src: url(${RobotoRegular});
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'RobotoMedium';
    src: url(${RobotoMedium});
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'RobotoBold';
    src: url(${RobotoBold});
    font-weight: normal;
    font-style: normal;
  }
    @font-face {
    font-family: 'RobotoLight';
    src: url(${RobotoLight});
    font-weight: normal;
    font-style: normal;
  }
`;
