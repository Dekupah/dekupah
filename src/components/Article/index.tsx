import { useState } from "react";

interface ArticleComponentProps {
  title: string;
  text: string;
  imageUrl: string;
  index: number;
}

export function ArticleComponent({ title, text, imageUrl, index }: ArticleComponentProps) {
// className="max-w-[60%]"
  const [_isHovering, setIsHovering] = useState(false);

  const [coords, setCoords] = useState(Array(2).fill(null));

  const [width, setWidth] = useState(1600)
  
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setWidth(1600)
  };

  const handleWindowMouseMove = (event:any) => {
    let nextCoord = coords.slice()

    if (nextCoord[0] == null) {
      nextCoord[0] = event.clientX
    }

    nextCoord[1] = event.clientX

    if (index % 2 != 0) {
      if (nextCoord[1] < nextCoord[0]) {
        setWidth(width + 10)
        nextCoord[0] = nextCoord[1]
      } else {
        setWidth(width -10)
        nextCoord[0] = nextCoord[1]
      }
    } else {
      if (nextCoord[1] > nextCoord[0]) {
        setWidth(width + 10)
        nextCoord[0] = nextCoord[1]
      } else {
        setWidth(width -10)
        nextCoord[0] = nextCoord[1]
      }
    }
      
    setCoords(nextCoord)
  };

  return (
    <>
      {index % 2 != 0 ? (
        <article className="flex w-full justify-between py-3 h-52 overflow-hidden transition duration-300">
          <section className="min-w-[40%]" style={{width: `${width}px`, maxWidth: "60%"}}>
            <h1 className="text-xl font-bold uppercase" style={{ color: "#595656" }}>
              {title}
            </h1>
            <p className="text-lg" style={{ color: "#595656" }}>
              {text}
            </p>
          </section>
          <section className="h-full w-full relative cursor-pointer" onMouseMove={handleWindowMouseMove} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="w-0 h-0 absolute" style={{ borderRight: "50px solid transparent", borderTop: "200px solid white" }}></div>
            <img src={imageUrl} alt="" className="object-cover h-full w-full" />
          </section>
        </article>
      ) : (
        <article className="flex w-full justify-between py-3 h-52 overflow-hidden transition duration-300">
          <section className="h-full w-full relative cursor-pointer" onMouseMove={handleWindowMouseMove} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="w-0 h-0 absolute right-0" style={{ borderLeft: "50px solid transparent", borderBottom: "200px solid white" }}></div>
            <img src={imageUrl} alt="" className="object-cover h-full w-full" />
          </section>
          <section className="min-w-[40%]" style={{width: `${width}px`, maxWidth: "60%"}}>
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
