import styled from 'styled-components/macro';

const StyledBody = styled.div`
  background: #1c1c1e;
  color: #fefefe;
  width: 85%;
  margin: auto;
  display: flex;
  align-items: center;

  flex: flex-grow;
  margin-top: 2rem;

  > * {
    flex: 1;
  }
`;

const Body = ({ children }) => {
  return <StyledBody>{children}</StyledBody>;
};

export default Body;
