import { Fragment } from "react";
import LinkBox, { LinkBoxProps } from "./components/LinkBox";

const appList: Array<LinkBoxProps> = [
  {
    img: '/logo/portainer.png',
    title: "Portainer",
    link: "portainer.devonly.dev"
  },
  {
    img: '/logo/nginx.png',
    title: "Nginx Proxy Manager",
    link: "nginx.devonly.dev"
  },
  {
    img: '/logo/jenkins.png',
    title: "Jenkins",
    link: "jenkins.devonly.dev"
  },
  {
    img: '/logo/sonarqube.png',
    title: "Sonarqube",
    link: "sonarqube.devonly.dev"
  },
  {
    img: '/logo/defectdojo.png',
    title: "Defectdojo",
    link: "defectdojo.devonly.dev"
  },
  {
    img: '/logo/pg.png',
    title: "pgAdmin",
    link: "pgadmin.devonly.dev"
  },
  {
    img: '/logo/n8n.png',
    title: "n8n",
    link: "n8n.devonly.dev"
  },
  {
    img: '/logo/elk.png',
    title: "Kibana",
    link: "kibana.devonly.dev"
  }
]

const bookmarkList: Array<LinkBoxProps> = [
  {
    img: '/logo/propilot.png',
    title: "Propilot",
    link: "propilot.vulcan.co.th"
  },
  {
    img: '/logo/humanos.png',
    title: "HumanOS",
    link: "backend.humanos.biz"
  },
  {
    img: '/logo/it-tools.png',
    title: "IT-Tools",
    link: "it-tools.tech"
  },
]


export default function Home() {
  return (
    <div className="mx-20">
      <div className="text-3xl text-center font-bold text-[#343A40] mb-2">
        Applications
      </div>
      <div className="app-box-container">
        {
          appList.map((app, index) => <LinkBox key={app.title + index} {...app} />)
        }
      </div>
      {
        bookmarkList.length > 0 && 
        <Fragment>
          <div className="text-3xl text-center font-bold text-[#343A40] mt-5 mb-2">
            Bookmarks
          </div>
          <div className="app-box-container">
            {
              bookmarkList.map((app, index) => <LinkBox key={app.title + index} {...app} />)
            }
          </div>
        </Fragment>
      }
    </div>
  );
}
