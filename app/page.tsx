import Image from "next/image";
import Photo from "./Components/Photo";

export default function Home() {
  return (
    <section>
      <article className="flex">
        <Photo />
      </article>
    </section>
  );
}
