import Typography from "@mui/material/Typography";

// TODO: move the text to bio and import
export default function Greeting() {
  return (
    <>
      <Typography variant="h4" color="text.primary">
        Hello!
      </Typography>
      <Typography variant="h3" color="text.primary">
        My Name is{" "}
        <Typography variant="h3" color="primary" component="span">
          Gerald &quot;Cody&quot; Henry
        </Typography>
      </Typography>
    </>
  );
}
