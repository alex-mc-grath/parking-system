import styled from 'styled-components/macro';

const Wrapper = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
margin: auto;
background: #1c1c1e;

/*@media (min-width: 768px) {
  max-width: none;
  width: 100%;
  display: flex;
}*/

> * {
  flex-direction: column;
}
`;


const Theme = ({layout}) => {
    return (
        <Wrapper>
            {layout}
        </Wrapper>
    )
}

export default Theme;
