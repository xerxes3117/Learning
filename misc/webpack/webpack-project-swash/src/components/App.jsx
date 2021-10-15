import '../styles/index.scss';
import Recipes from './Recipies'
import sword from '../images/swc-sword.png';
import swordSVG from '../images/sword.svg'

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
          <section>
            <h1>Oh Hai Reactssassss</h1>
          </section>
          <img src={sword} alt="swaord" width="300"/>
          <img src={swordSVG} alt="swaord" width="300"/>
          <Recipes />
        </main>
    </>
  )
}

export default App
