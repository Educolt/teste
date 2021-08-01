import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 250px;
  height: fit-content;
  border-radius: 8px;
  padding: 100px 10px 10px 10px;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: fit-content;

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid #053e60;
    }
`;

export const Label = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: fit-content;
    margin-bottom: 10px;
    h2 {
      color: #069ec5;
      font-weight: bolder;
    }
    strong {
      font-weight: bolder;
      color: #50534e
    }
    p {
      color: #707978;
    }
`;
export const FooterProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
    padding: 5px;
    
    img {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }

    span {
      color: #9aa0b1;
    }
`; 
export const Last = styled.div`

  display: flex;
  justify-content: space-between;

  width: 100%;
  height: fit-content;

`;