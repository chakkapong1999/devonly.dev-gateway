import LinkBox from "./components/LinkBox";

const appList = [
  {
    img: '/icon-32x32.png',
    title: "Portainer",
    link: "portainer.devonly.dev"
  },
  {
    img: '/icon-32x32.png',
    title: "Nginx Proxy Manager",
    link: "nginx.devonly.dev"
  },
  {
    img: '/icon-32x32.png',
    title: "Jenkins",
    link: "jenkins.devonly.dev"
  },
  {
    img: '/icon-32x32.png',
    title: "Sonarqube",
    link: "sonarqube.devonly.dev"
  },
  {
    img: '/icon-32x32.png',
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
