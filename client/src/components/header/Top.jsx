import { OptionDivCss, TitleCss, TopCss } from "../styles/HomeCss";
import OptionInput from "./OptionInput";
const Top = () => {
  return (
    <TopCss>

      <OptionDivCss>
        <OptionInput toSearch="genre" />
        <OptionInput toSearch="source" />
      </OptionDivCss>

      <TitleCss>Game DB</TitleCss>

      <OptionDivCss>
        <OptionInput toSearch="alphabetical" />
        <OptionInput toSearch="rank" />
      </OptionDivCss>

    </TopCss>
  );
}

export default Top;