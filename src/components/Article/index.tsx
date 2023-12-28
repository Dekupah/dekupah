interface ArticleComponentProps {
  title: string;
  text: string;
  imageUrl: string;
  index: number;
}

export function ArticleComponent({ title, text, imageUrl, index }: ArticleComponentProps) {
// className="max-w-[60%]"
  return (
    <>
      {index % 2 != 0 ? (
        <article className="flex w-full justify-between py-3 h-52 overflow-hidden transition-all duration-300">
          <section className="max-w-[60%] dinamic-width transition-all duration-300">
            <h1 className="text-xl font-bold uppercase" style={{ color: "#595656" }}>
              {title}
            </h1>
            <p className="text-lg" style={{ color: "#595656" }}>
              {text}
            </p>
          </section>
          <section className="h-full w-full relative">
            <div className="w-0 h-0 absolute" style={{ borderRight: "50px solid transparent", borderTop: "200px solid white" }}></div>
            <img src={imageUrl} alt="" className="object-cover h-full w-full" />
          </section>
        </article>
      ) : (
        <article className="flex w-full justify-between py-3 h-52 overflow-hidden transition duration-300">
          <section className="h-full w-full relative">
            <div className="w-0 h-0 absolute right-0" style={{ borderLeft: "50px solid transparent", borderBottom: "200px solid white" }}></div>
            <img src={imageUrl} alt="" className="object-cover h-full w-full" />
          </section>
          <section className="max-w-[60%] ml-2 dinamic-width transition-all duration-300">
            <h1 className="text-xl font-bold uppercase" style={{ color: "#595656" }}>
              {title}
            </h1>
            <p className="text-lg" style={{ color: "#595656" }}>
              {text}
            </p>
          </section>
        </article>
      )}
    </>
  );
}
