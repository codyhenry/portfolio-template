import Typography from "@mui/material/Typography";

// TODO: fix sizing of text import and loop through all bullets

export default function IntroAboutMe() {
  return (
    <>
      <Typography variant="h4" color="text.primary">
        A little{" "}
        <Typography variant="h4" color="primary" component="span">
          about{" "}
        </Typography>
        myself
      </Typography>
      <Typography>
        My love for programming started in highschool and has been growing ever
        since
      </Typography>
      <Typography>
        My interests are in web and mobile development and also in embedded
        systems and IoT
      </Typography>
      <Typography>
        I always enjoy experimenting with new and modern tools for development,
        for example, this website was made using Vite!
      </Typography>
    </>
  );
}
