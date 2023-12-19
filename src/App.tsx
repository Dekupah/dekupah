import { ProjectWrapperComponent as ProjectWrapper } from "./components/projectWrapperComponent/index"
import Logo from "./assets/dekupah-logo.png"

export default function App() {

  return (
    <>
      <header className="w-full">
        <section className="max-w-5xl m-auto">
          <img src={Logo} alt="" className="object-cover" />
        </section>
      </header>
      <main className="max-w-5xl m-auto flex flex-col gap-3">
          {/* Sessão de sobre mim */}
          <section className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold uppercase" style={{color: "#F27C38"}}>Quem nós somos?</h1>
            <p className="text-lg" style={{color: "#595656"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero consequuntur nobis quas cumque labore asperiores sequi optio iure, rerum adipisci, tempora dignissimos architecto natus ipsam voluptatum? Sed, quas officia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, error quia nobis nisi facere sed qui quod quam dolor in voluptatem, velit ex incidunt illo a ea harum numquam perspiciatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quas nulla illo. Eum, in! Reiciendis tempora itaque commodi unde sit molestiae doloremque assumenda ea excepturi, iusto, harum, magni ad ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quas rerum culpa, nemo debitis, totam corporis neque dicta labore eveniet illo est cupiditate reiciendis assumenda quos repellat itaque vel error.
            </p>
          </section>
          {/* Parte de projetos */}
          <section className="flex flex-col gap-3">
            <section>
              <h1 className="text-3xl font-bold uppercase" style={{color: "#F27C38"}}>Nossos Projetos</h1>
            </section>
            <section>
              {/*--------------------------------------------------------------*/}
              <ProjectWrapper
                title = "Projeto 1"
                text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates deleniti mollitia nobis iusto rerum voluptatum facere praesentium placeat aliquam, dolor soluta. Earum eum error sed exercitationem autem maiores at."
                imageUrl="https://randomuser.me/api/portraits/women/50.jpg"
                index={1}
              />
              {/*--------------------------------------------------------------*/}
              <ProjectWrapper
                title = "Projeto 2"
                text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates deleniti mollitia nobis iusto rerum voluptatum facere praesentium placeat aliquam, dolor soluta. Earum eum error sed exercitationem autem maiores at."
                imageUrl="https://randomuser.me/api/portraits/women/50.jpg"
                index={2}
              />
              {/*--------------------------------------------------------------*/}
              <ProjectWrapper
                title = "Projeto 3"
                text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates deleniti mollitia nobis iusto rerum voluptatum facere praesentium placeat aliquam, dolor soluta. Earum eum error sed exercitationem autem maiores at."
                imageUrl="https://randomuser.me/api/portraits/women/50.jpg"
                index={3}
              />
              {/*--------------------------------------------------------------*/}
              <ProjectWrapper
                title = "Projeto 4"
                text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates deleniti mollitia nobis iusto rerum voluptatum facere praesentium placeat aliquam, dolor soluta. Earum eum error sed exercitationem autem maiores at."
                imageUrl="https://randomuser.me/api/portraits/women/50.jpg"
                index={4}
              />
            </section>
          </section>
      </main>
      <footer className="flex p-5 border-t">
        <section>
          <h2>Dekupah</h2>
          <h3>
            Entre em contato
          </h3>
          <ul>
            <li><a href="#">Redes sociais 1</a></li>
            <li><a href="#">Redes sociais 2</a></li>
            <li><a href="#">Redes sociais 3</a></li>
          </ul>
        </section>
      </footer>
    </>
  )
}
