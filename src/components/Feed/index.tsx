import {
  Container,
  PostContainer,
  ImageProfile,
  ProfileContainer, 
  Icon,PostTopContainer,
  PostStatus,
  PostStatusContainer,
  ButtonsContainer
} from './styles'
import profile from '../../assets/profile.jpeg';
import like from '../../assets/like.png';
import comments from '../../assets/comments.png'
import share from '../../assets/share.png'
import clock from  '../../assets/clock.png'
import lock from '../../assets/lock.png'
import down from '../../assets/down.png'

function Feed() {
  return (
    <Container>
      <PostContainer>
        <PostTopContainer>
          <ProfileContainer>
            <ImageProfile src={profile} alt="profile"/>
            <div>
              <h4>Eduardo Coutinho</h4>
              <div>
                <Icon src={clock}/><span>há cerca de 8 horas</span>
                <Icon src={lock}/><span>somente eu</span>
              </div>
            </div>
          </ProfileContainer>
          <Icon src={down}  />
        </PostTopContainer>
        <p>Essa publicação está configurado no modo privado "somente eu".</p>
        <PostStatusContainer>
          <span><Icon src={like}/>Seja o primeiro a curtir</span>
          <PostStatus>
            <span>0 comentários</span>
            <span>0 compartilhamentos</span>
          </PostStatus>
        </PostStatusContainer>
        <ButtonsContainer>
          <button><Icon src={like}/>Curtir</button>
          <button><Icon src={comments}/>Comentários</button>
          <button><Icon src={share}/>Compartilhar</button>
        </ButtonsContainer>
      </PostContainer>
      <PostContainer>
        <PostTopContainer>
          <ProfileContainer>
            <ImageProfile src={profile} alt="profile"/>
            <div>
              <h4>Eduardo Coutinho</h4>
              <div>
                <Icon src={clock}/><span>há cerca de 8 horas</span>
                <Icon src={lock}/><span>somente eu</span>
              </div>
            </div>
          </ProfileContainer>
          <Icon src={down}  />
        </PostTopContainer>
        <p>Essa publicação está configurado no modo privado "somente eu".</p>
        <PostStatusContainer>
          <span><Icon src={like}/>Seja o primeiro a curtir</span>
          <PostStatus>
            <span>0 comentários</span>
            <span>0 compartilhamentos</span>
          </PostStatus>
        </PostStatusContainer>
        <ButtonsContainer>
          <button><Icon src={like}/>Curtir</button>
          <button><Icon src={comments}/>Comentários</button>
          <button><Icon src={share}/>Compartilhar</button>
        </ButtonsContainer>
      </PostContainer>
    </Container>
  );

}
export default Feed 