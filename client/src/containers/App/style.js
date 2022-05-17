import styled from 'styled-components/macro';

const AppStyle = styled.div`
max-width: 600px;
min-height: 100vh;
display: flex;
flex-direction: column;
margin: auto;
background: #1c1c1e;
/* margin-top: 2rem; */

/*@media (min-width: 768px) {
  max-width: none;
  width: 100%;
  display: flex;
}*/

> * {
  flex-direction: column;
}
`;

export default AppStyle;