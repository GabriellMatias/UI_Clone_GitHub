import { ProfileData } from "../../components/ProfileData";
import { LeftSide, MainContainer, ProfileContainer, RightSide } from "./style";



export function Profile(){
  return(
    <ProfileContainer>
      <MainContainer>

        <LeftSide>
          
          <ProfileData
          username={"Matias"}
          avatarUrl={'https://github.com/GabriellMatias.png'}
          followers={80}
          name={"Gabriel Matias"}
          following={8}
          company={"AGU"}
          location={"Brasilia-DF"}
          email={"gabriel.goiasat@gmail.com"}
          blog={'https://www.linkedin.com/in/gabriell-matias-03b98421a/'}
          />

        </LeftSide>

        <RightSide></RightSide>

      </MainContainer>
    </ProfileContainer>
    
  )
}