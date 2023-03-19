import {
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiReact,
  SiNodedotjs,
  SiWordpress,
  SiMaterialui,
  SiBootstrap,
  SiSpring,
  SiDotnet,
  SiTrello,
  SiFigma,
  SiPostman,
  SiSwagger,
  SiHibernate,
  SiGithub,
} from "react-icons/si";

/* TODO: Add any icons you need (https://react-icons.github.io/react-icons)
 * Create objects with 4 items max, you can have as many objects as you want
 */

// onhover icon should disappear and name should appear
// onhover card should shake
// this array is going to card group
/** TODO: group the tools how you would like them to appear in the about me section
 */

const tools = [
  [
    { name: "MySql", icon: SiMysql },
    { name: "Firebase", icon: SiFirebase },
    { name: "Mongo DB", icon: SiMongodb },
  ],
  [
    { name: "React", icon: SiReact },
    { name: "Java Spring", icon: SiSpring },
    { name: ".Net", icon: SiDotnet },
    { name: "Wordpress", icon: SiWordpress },
  ],
  [
    { name: "Material UI", icon: SiMaterialui },
    { name: "Bootstrap", icon: SiBootstrap },
  ],
  [
    { name: "Trello", icon: SiTrello },
    { name: "Figma", icon: SiFigma },
    { name: "SwaggerHub", icon: SiSwagger },
    { name: "Github", icon: SiGithub },
  ],
  [
    { name: "Postman", icon: SiPostman },
    { name: "Hibernate ORM", icon: SiHibernate },
    { name: "Node JS", icon: SiNodedotjs },
  ],
];

export default tools;
