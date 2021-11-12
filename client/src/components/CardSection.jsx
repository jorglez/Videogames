import Card from "./Card";
import { CardSectionCss } from "./styles/CardSectionCss";


const CardSection = () => {
  return (
    <CardSectionCss>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardSectionCss>
  );
}

export default CardSection;