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
          <section className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold uppercase" style={{color: "#F27C38"}}>Quem nós somos?</h1>
            <p className="text-lg" style={{color: "#595656"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero consequuntur nobis quas cumque labore asperiores sequi optio iure, rerum adipisci, tempora dignissimos architecto natus ipsam voluptatum? Sed, quas officia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, error quia nobis nisi facere sed qui quod quam dolor in voluptatem, velit ex incidunt illo a ea harum numquam perspiciatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quas nulla illo. Eum, in! Reiciendis tempora itaque commodi unde sit molestiae doloremque assumenda ea excepturi, iusto, harum, magni ad ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quas rerum culpa, nemo debitis, totam corporis neque dicta labore eveniet illo est cupiditate reiciendis assumenda quos repellat itaque vel error.
            </p>
          </section>
          <section className="flex flex-col gap-3">
            <section>
              <h1 className="text-3xl font-bold uppercase" style={{color: "#F27C38"}}>Nossos Projetos</h1>
            </section>
            <section>
              <section className="flex w-full justify-between gap-3 py-3">
                <section>
                  <h2 className="text-xl font-bold uppercase">Primeiro Projeto</h2>
                  <p className="text-lg" style={{color: "#595656"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates deleniti mollitia nobis iusto rerum voluptatum facere praesentium placeat aliquam, dolor soluta. Earum eum error sed exercitationem autem maiores at.</p>
                </section>
                <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="" />
              </section>
              <section className="flex w-full justify-between gap-3 py-3">
                <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="" />
                <section>
                  <h2 className="text-xl font-bold uppercase">Segundo Projeto</h2>
                  <p className="text-lg" style={{color: "#595656"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates deleniti mollitia nobis iusto rerum voluptatum facere praesentium placeat aliquam, dolor soluta. Earum eum error sed exercitationem autem maiores at.</p>
                </section>
              </section>
              <section className="flex w-full justify-between gap-3 py-3">
                <section>
                  <h2 className="text-xl font-bold uppercase">Terceiro Projeto</h2>
                  <p className="text-lg" style={{color: "#595656"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptates deleniti mollitia nobis iusto rerum voluptatum facere praesentium placeat aliquam, dolor soluta. Earum eum error sed exercitationem autem maiores at.</p>
                </section>
                <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="" />
              </section>
            </section>
          </section>
      </main>
    </>
  )
}
