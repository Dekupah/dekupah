import { ArticleComponent as Article } from "./components/Article/index";
import Logo from "./assets/dekupah-logo.png";

export default function App(): any {
  return (
    <>
      <header className="w-full bg-white h-screen" style={{ scrollSnapAlign: "start" }}>
        <section className="max-w-5xl m-auto relative">
          <h1 className="absolute">
            <img src={Logo} alt="Dekupah" data-src-webp="" className="object-cover" />
          </h1>
          <h2 className="absolute top-[27rem] font-bold text-2xl" style={{ color: "#595656" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
        </section>
      </header>
      <main className="flex flex-col gap-3">
        {/* Sessão de sobre mim */}
        <div>
          <section className="max-w-5xl m-auto flex flex-col gap-3 h-screen py-24" style={{ scrollSnapAlign: "start" }}>
            <h2 className="text-3xl font-bold uppercase" style={{ color: "#F27C38" }}>
              Quem nós somos?
            </h2>
            <p className="text-lg" style={{ color: "#595656" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero consequuntur nobis quas cumque labore asperiores sequi optio iure, rerum adipisci, tempora dignissimos architecto natus ipsam voluptatum? Sed, quas officia. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Totam, error quia nobis nisi facere sed qui quod quam dolor in voluptatem, velit ex incidunt illo a ea harum numquam perspiciatis. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Nostrum quas nulla illo. Eum, in! Reiciendis tempora itaque commodi unde sit molestiae doloremque assumenda ea excepturi, iusto, harum, magni ad ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quas rerum
              culpa, nemo debitis, totam corporis neque dicta labore eveniet illo est cupiditate reiciendis assumenda quos repellat itaque vel error.
            </p>
          </section>
        </div>
        {/* Parte de projetos */}
        <div className="bg-white">
          <section className="max-w-5xl m-auto flex flex-col gap-10 pt-14 pb-24" style={{ scrollSnapAlign: "start" }}>
            <section>
              <h2 className="text-3xl font-bold uppercase" style={{ color: "#F27C38" }}>
                Nossos Projetos
              </h2>
            </section>
            <section>
              {/*--------------------------------------------------------------*/}
              <Article
                title="Projeto 1"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates deleniti mollitia nobis iusto rerum voluptatum facere praesentium placeat aliquam, dolor soluta. Earum eum error sed exercitationem autem maiores at."
                imageUrl="https://randomuser.me/api/portraits/women/50.jpg"
                index={1}
              />
              {/*--------------------------------------------------------------*/}
              <Article
                title="Projeto 2"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates deleniti mollitia nobis iusto rerum voluptatum facere praesentium placeat aliquam, dolor soluta. Earum eum error sed exercitationem autem maiores at."
                imageUrl="https://randomuser.me/api/portraits/women/50.jpg"
                index={2}
              />
              {/*--------------------------------------------------------------*/}
              <Article
                title="Projeto 3"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates deleniti mollitia nobis iusto rerum voluptatum facere praesentium placeat aliquam, dolor soluta. Earum eum error sed exercitationem autem maiores at."
                imageUrl="https://randomuser.me/api/portraits/women/50.jpg"
                index={3}
              />
              {/*--------------------------------------------------------------*/}
              <Article
                title="Projeto 4"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates deleniti mollitia nobis iusto rerum voluptatum facere praesentium placeat aliquam, dolor soluta. Earum eum error sed exercitationem autem maiores at."
                imageUrl="https://randomuser.me/api/portraits/women/50.jpg"
                index={4}
              />
            </section>
          </section>
        </div>
      </main>
      <footer className="flex p-5 border-t" style={{ scrollSnapAlign: "start" }}>
        <section>
          <h2>Dekupah</h2>
          <h3>Entre em contato</h3>
          <ul>
            <li>
              <a href="#">Redes sociais 1</a>
            </li>
            <li>
              <a href="#">Redes sociais 2</a>
            </li>
            <li>
              <a href="#">Redes sociais 3</a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}
