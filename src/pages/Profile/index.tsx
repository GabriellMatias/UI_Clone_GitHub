import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIRepor, APIuser } from "../../@types";
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

interface dataProps {
  user?: APIuser;
  repos?: APIRepor[];
  erro?: string;
}

export function Profile() {
  const [data, setData] = useState<dataProps>();
  const { username = "GabriellMatias" } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ erro: "User not Found!" });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const sortiesRepos = repos.sort(() => 0.5 - Math.random());
      const slicedRepos = sortiesRepos.slice(0, 6);

      setData({
        user,
        repos: slicedRepos,
      });
    });
  }, [username]);

  if (data?.erro) {
    return <h1>{data.erro}</h1>;
  }
  if (!data?.user || !data?.repos) {
    return <h1>Loading..</h1>;
  }

  /* retorna um tipo de mini componente do react*/
  const TabContent = () => {
    return (
      <div className="content">
        <RepoIcon />
        <span className="label"> Repositories</span>
        <span className="number">{data.user?.public_repos}</span>
      </div>
    );
  };

  return (
    <ProfileContainer>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset"></span>
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>

      <MainContainer>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            name={data.user.name}
            following={8}
            company={data.user.company}
            locationgit={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
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
                data.repos.map((item) => (
                  <RepoCard
                    key={Number(item.name)}
                    username={item.owner.login}
                    reporname={item.name}
                    desciption={item.description}
                    language={item.language}
                    stars={item.startgazes_count}
                    forks={item.forks}
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
