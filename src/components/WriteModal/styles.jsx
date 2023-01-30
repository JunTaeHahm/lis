import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Form = styled.form`
  position: relative;
  z-index: 10;
  width: 80%;
  height: 80%;
  background-color: var(--white);
  box-shadow: 0.13rem 0.13rem 0.6rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  svg {
    position: absolute;
    left: 3rem;
    top: 3rem;
    cursor: pointer;
  }
`;

export const FormHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30vw;
    object-fit: cover;
  }
`;

export const Input = styled.input`
  transition: all 0.3s;
  border: none;
  box-sizing: border-box;
  width: 80%;
  height: 10%;
  max-height: 5rem;
  padding: 0.8rem;
  text-indent: 0.8rem;
  &:focus {
    outline: none;
    border-bottom: 0.06rem solid var(--black);
    transition: all 0.3s;
  }
  &::placeholder {
    text-align: center;
    color: var(gray);
    opacity: 0.5;
    height: 100%;
  }
`;

export const Button = styled.button`
  width: 12rem;
  height: 3rem;
  cursor: pointer;
  border-radius: 20.3rem;
  background-color: ${(props) => (props.buttonActive ? 'var(--black)' : 'var(--gray)')};
  color: var(--white);
`;
