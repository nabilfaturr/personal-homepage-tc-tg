import Image from "next/image";
import Photo from "./Components/Photo";
import Description from "./Components/Description";

export default function Home() {
  return (
    <section>
      <article className="flex justify-between items-center gap-4">
        <Photo />
        <Description />
      </article>
    </section>
  );
}
