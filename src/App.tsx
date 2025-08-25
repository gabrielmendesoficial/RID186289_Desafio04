import Blog from "./components/Blog"
import Contato from "./components/Contato"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projetos from "./components/Projetos"

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Blog />
      <Projetos />
      <Contato />
    </>
  )
}

export default App