import LogInForm from "./forms/LogInForm";
import { TitleCss } from "./styles/HomeCss";


const LogIn = () => {
  return (
    <section>
      <TitleCss>Log in</TitleCss>
      <LogInForm/>
    </section>
  );
}

export default LogIn;