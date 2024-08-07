import styled from 'tailwind';

const StyledButton = styled.div`
  color: pink;
`;

export function Button() {
  return (
    <StyledButton>
      <h1>Welcome to Button!</h1>
    </StyledButton>
  );
}

export default Button;
