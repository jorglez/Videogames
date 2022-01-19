import Card from "./Card";
import { CardSectionCss } from "../styles/CardSectionCss";
import { Fragment } from "react";
import Pagination from "./Pagination";


const CardSection = () => {
  return (
    <Fragment>
      <CardSectionCss>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardSectionCss>
      <Pagination/>
    </Fragment>
  );
}

export default CardSection;