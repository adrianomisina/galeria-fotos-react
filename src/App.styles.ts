import styled from "styled-components";

export const Container = styled.div`
  background-color:#404258;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`

export const Header = styled.h1`
  margin:0;
  padding:0;
  text-align: center;
  margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
  text-align: center;

  .emoji {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const UploadForm = styled.form`
  background-color: #50577A;
  border-radius: 10px;
  padding:15px;
  margin-bottom: 30px;

  input[type=submit] {
    background-color: #756df4;
    border:0;
    color: #fff;
    padding: 8px 16px;
    font-size: 1.2rem;
    border-radius:10px;
    margin: 0 20px;
    cursor: pointer;

    &:hover {
      opacity: .9;
    }
  }
`;
