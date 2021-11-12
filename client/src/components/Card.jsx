import { CardBodyCss, CardCss, CardHeadCss } from "./styles/CardCss";


const Card = () => {
  return ( 
    <CardCss>
      <CardHeadCss>
        <img src="/landingBg.jpg" alt="" />
      </CardHeadCss>
      <CardBodyCss>
        <h3>Game Name</h3>
        <h4>Genres:</h4>
        <p>genre1</p>
        <p>genre2</p>

      </CardBodyCss>
    </CardCss>
   );
}
 
export default Card;