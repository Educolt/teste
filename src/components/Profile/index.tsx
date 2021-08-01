import {Container, ImageContainer, Label, FooterProfileContainer, Last} from './styles'
import profilePic from '../../assets/profile.jpeg'
import place from '../../assets/place.png';
import lib from '../../assets/lib.png'
import corp from '../../assets/corp.png'

function Profile() {
  return (
  <Container>
    <ImageContainer>
      <img src={profilePic} alt="profile"  />
    </ImageContainer>

    <Label>
      <h2>Kenedy Morais</h2>
      <strong>@kenedymorais</strong>
      <p>Front-end Developer</p>
    </Label>

    <FooterProfileContainer>
      <div className="first">
        <img src={place} alt="icon"/>
        <span>Rio Branco/Acre - Brasil</span>
      </div>

      <Last>
        <div>
          <img src={corp} alt="icon" />
          <span>InCicle</span>
        </div>
        <div>
          <img src={lib} alt="icon" />
          <span>Uninorte</span>
        </div>
      </Last>
    </FooterProfileContainer>
  </Container>
  )
}

export default Profile;