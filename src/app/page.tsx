import LinkBox from "./components/LinkBox";

const appList = [
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
  }
]


export default function Home() {
  return (
    <div className="app-box-container">
      {
        appList.map((app, index) => <LinkBox key={app.title + index} {...app} />)
      }
    </div>
  );
}
