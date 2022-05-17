import styled from 'styled-components';

const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  width: 100%;
  height: 2rem;
  /* max-width: 120px; */
  background: #B9D7EA;
  border-radius: 25px;
  padding: 0 0.5rem;
  border: 2px solid transparent;
  text-align: center;
  margin-left: 0.5rem;
  color:#67666a;

  &:hover {
    cursor: pointer;
    background: #B9D7EA;
    color: #1c1c1e;
    transition: 0.5s all cubic-bezier(0.8, 0, 0.2, 1);
  }
`;

export default SubmitButton;
