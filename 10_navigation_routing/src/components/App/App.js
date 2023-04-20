import Button from "../Button/Button";

const App = () => {
  return (
    <div>
      <div>
        <Button primary outline>
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button warning>Outlined</Button>
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

export default App;
