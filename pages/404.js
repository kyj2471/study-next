import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Error404() {
  return (
    <ErrorWrapper>
      <div>없습니다!!!</div>
    </ErrorWrapper>
  );
}
