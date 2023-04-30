import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary className="mb-5">
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Secondary
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Outlined
        </Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
      <div>
        <Button success>Success</Button>
      </div>
      <div>
        <Button outline rounded>
          Outlined
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
