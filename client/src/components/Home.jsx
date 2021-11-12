import OptionInput from "./OptionInput";
import { OptionDivCss, TitleCss, TopCss } from "./styles/HomeCss";
import { Fragment } from "react"
import CardSection from "./CardSection";
import Pagination from "./Pagination";

const Home = () => {
  return (
    <Fragment>
      <TopCss>

        <OptionDivCss>
          <OptionInput toSearch="genre" />
          <OptionInput toSearch="source" />
        </OptionDivCss>

        <TitleCss>Desde Home</TitleCss>

        <OptionDivCss>
          <OptionInput toSearch="alphabetical" />
          <OptionInput toSearch="rank" />
        </OptionDivCss>

      </TopCss>

      <CardSection />
      <Pagination/>
    </Fragment>
  );
}

export default Home;