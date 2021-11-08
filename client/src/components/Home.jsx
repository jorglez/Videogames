import OptionInput from "./OptionInput";
import { OptionDivCss, TitleCss, TopCss } from "./styles/HomeCss";


const Home = () => {
  return (
    <TopCss>

      <OptionDivCss>

        <OptionInput
          toSearch="genre"
        />
        <OptionInput
          toSearch="source"
        />

      </OptionDivCss>

      <TitleCss>Desde Home</TitleCss>

      <OptionDivCss>

        <OptionInput
          toSearch="alphabetical"
        />
        <OptionInput
          toSearch="rank"
        />

      </OptionDivCss>

    </TopCss>
  );
}

export default Home;