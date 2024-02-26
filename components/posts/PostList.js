import PostItem from "@/components/posts/PostItem";
import styled from "@emotion/styled";

export default function PostList(props) {
  return (
    <PostWrapper>
      <div className="posts">
        <ul className="list">
          {props.posts.map((post) => (
            <PostItem
              key={post.id}
              id={post.id}
              image={post.image}
              title={post.title}
              summary={post.summary}
            />
          ))}
        </ul>
      </div>
    </PostWrapper>
  );
}

const PostWrapper = styled.div`
  .posts {
    margin: 3rem auto;
    width: 80%;
  }

  .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;