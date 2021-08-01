import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin: 0px 20px 0px 20px;
  height: 100%;
  width: 100%;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;  
  padding: 15px;
  margin-top: 20px;

  p {
    margin: 10px 0px 10px 0px;
    color: #939297;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  div div {

    display: flex;
    align-items: center;

  }

  div div span {
    font-size:12px;
    margin-right: 5px;
    color: #939297;
  }

  div h4 {
    color: #069ec5;
  }
`;

export const PostTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageProfile = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  border: 2px solid #053e60;
`; 

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px 5px 0px 0px;
`; 

export const PostStatus = styled.div`
  display: flex;
  
  span {
    font-size:12px;
    margin-right: 5px;
    color: #939297;
  }
`;

export const PostStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #f9f9f9;
  padding-bottom: 5px;

  span {
    font-size:12px;
    color: #939297;
  }
`;
export const ButtonsContainer = styled.div`

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #f9f9f9;
  padding-bottom: 5px;
  margin-top: 10px;
  
  button {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    border:none;
    border-radius: 25px;
    width: fit-content;
    padding: 10px 20px 10px 20px;
    margin: 5px;
    font-size: 18px;
    color: #2c1f31;
  }
`