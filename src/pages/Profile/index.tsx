import { ProfileData } from "../../components/ProfileData";
import { RandomCalendar } from "../../components/RandomCalendar";
import { RepoCard } from "../../components/ReporCard";
import {
  CalendarHeading,
  LeftSide,
  MainContainer,
  ProfileContainer,
  RepoIcon,
  RepositoryListContainer,
  RightSide,
  Tab,
} from "./style";

export function Profile() {
  /* retorna um tipo de mini componente do react*/
  const TabContent = () => {
    return (
      <div className="content">
        <RepoIcon />
        <span className="label"> Repositories</span>
        <span className="number">29</span>
      </div>
    );
  };

  return (
    <ProfileContainer>
      <Tab className="desktop">
        <div className="wrapper">
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>

      <MainContainer>
        <LeftSide>
          <ProfileData
            username={"Matias"}
            avatarUrl={"https://github.com/GabriellMatias.png"}
            followers={80}
            name={"Gabriel Matias"}
            following={8}
            company={"AGU"}
            locationgit={"Brasilia-DF"}
            email={"gabriel.goiasat@gmail.com"}
            blog={"https://www.linkedin.com/in/gabriell-matias-03b98421a/"}
          />
        </LeftSide>

        <RightSide>
          {/* className mobile para aplicar apenas quando for mobile */}
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <RepositoryListContainer>
            <h2>Random Repos</h2>

            <div>
              {
                /* refazer com um array de repositorios */
                [1, 2, 3, 4, 5, 6].map((n) => (
                  <RepoCard
                    key={n}
                    username={"Matias"}
                    reporname={"github_UI_clone"}
                    desciption={" k k k k k kj"}
                    language={"Typescript"}
                    stars={8}
                    forks={10}
                  />
                ))
              }
            </div>
          </RepositoryListContainer>
          <CalendarHeading>
            Random Calendar[Dont represent actual data][Just for fun!]
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </MainContainer>
    </ProfileContainer>
  );
}