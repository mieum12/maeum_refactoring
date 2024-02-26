import Image from "next/image";
import styled from "@emotion/styled";
import Link from "next/link";

export default function PostItem(props) {
  return (
    <ItemWrapper>
      <Link href={props.id}>
        <div>
          <Image
            className='image'
            src={props.image}
            alt={props.title}
            width={200}
            height={200}/>
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <summary>{props.summary}</summary>
        </div>
      </Link>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.li`

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  
  a:hover {
    transform: scale(1.02);
  }

  image {
    border-radius: 10px;
    object-fit: cover;
  }
`