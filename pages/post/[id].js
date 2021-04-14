import { useRouter } from "next/router";
import Test from "../Test";
import styled from "styled-components";
import Link from "next/link";

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  max-width: 450px;
  margin: 0 auto;
  margin-top: 7rem;
`;

const MainTodoTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);

  return (
    <ContainerBox>
      <Link href="/">
        <MainTodoTitle>할일 : {id}</MainTodoTitle>
      </Link>
    </ContainerBox>
  );
};

export default Post;
