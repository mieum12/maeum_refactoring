import Image from "next/image";

export default function PostDetail(props) {
  return (
    <section>
      <h1>{props.title}</h1>
      <Image
        src={props.image}
        alt={props.title}
        width={500}
        height={600}
      />
      <summary>{props.summary}</summary>
      <p>{props.description}</p>
    </section>

  )
}