import Top from "./header/Top";
import { Fragment } from "react"
import CardSection from "./cardsSection/CardSection";

const Home = () => {
  return (
    <Fragment>
      <Top/>
      <CardSection />
    </Fragment>
  );
}

export default Home;