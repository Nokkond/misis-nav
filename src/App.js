import './App.css';
import { Stage, Sprite } from "@inlet/react-pixi";

function App() {
  return (
      <Stage width={500} height={500} options={{ backgroundColor: 0xff3860 }}>
          <Sprite
              image="https://assets.codepen.io/693612/surya.svg"
              width={450}
              height={450}
              anchor={0.5}
              position={[250, 250]}
          />
      </Stage>
  );
}

export default App;
