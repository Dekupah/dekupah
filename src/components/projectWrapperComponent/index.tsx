interface projectWrapperComponentProps {
  title: string;
  text: string;
  imageUrl: string;
  index: number;
}

export function ProjectWrapperComponent({ title, text, imageUrl, index }: projectWrapperComponentProps) {

  return (
    <>
      {index % 2 != 0 ? (
        <section className="flex w-full justify-between py-3 h-52 overflow-hidden">
          <section className="max-w-[60%]">
            <h2 className="text-xl font-bold uppercase" style={{ color: "#595656" }}>
              {title}
            </h2>
            <p className="text-lg" style={{ color: "#595656" }}>
              {text}
            </p>
          </section>
          <section className="h-full w-[40%] relative">
            <div className="w-0 h-0 absolute" style={{ borderRight: "50px solid transparent", borderTop: "200px solid white" }}></div>
            <img src={imageUrl} alt="" className="object-cover h-full w-full" />
          </section>
        </section>
      ) : (
        <section className="flex w-full justify-between py-3 h-52 overflow-hidden">
          <section className="h-full w-[40%] relative">
            <div className="w-0 h-0 absolute right-0" style={{ borderLeft: "50px solid transparent", borderBottom: "200px solid white" }}></div>
            <img src={imageUrl} alt="" className="object-cover h-full w-full" />
          </section>
          <section className="max-w-[60%] ml-2">
            <h2 className="text-xl font-bold uppercase" style={{ color: "#595656" }}>
              {title}
            </h2>
            <p className="text-lg" style={{ color: "#595656" }}>
              {text}
            </p>
          </section>
        </section>
      )}
    </>
  );
}
