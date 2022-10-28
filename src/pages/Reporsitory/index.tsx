import { Link } from "react-router-dom";
import {
  Breadcrump,
  ForkIcon,
  GithubIcon,
  LinkButton,
  ReporIcon,
  RepositoryContainer,
  StarIcon,
  Stats,
} from "./style";

export function Repository() {
  return (
    <RepositoryContainer>
      <Breadcrump>
        <ReporIcon/>
        
          <Link className="username" to={"/GabriellMatias"}>
            GabriellMatias
          </Link>
          <span>/</span>

          <Link className="reponame" to={"/GabriellMatias/explorer_lab"}>
            explorer_lab
          </Link>
        
      </Breadcrump>
      <p>Contains my studies about JS DOM</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>Starts</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>Forks</span>
        </li>
      </Stats>

      <LinkButton
        href={
          "https://github.com/GabriellMatias/Desafio_02_Coffe_Store--Trilha-2022-"
        }
      >
        <GithubIcon />
        <span>View On Github</span>
      </LinkButton>
    </RepositoryContainer>
  );
}
