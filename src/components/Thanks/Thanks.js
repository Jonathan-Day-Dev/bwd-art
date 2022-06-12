import CustomCard from "../UI/CustomCard";
import { Typography } from "@mui/material";

const Thanks = (props) => {
  return (
    <CustomCard
      maxWth={{ xs: "80%", sm: "60%", md: "45%" }}
      title="Thank You to the Patrons of BAA"
      body={
        <div>
            <Typography variant="h5">Champion of the Arts</Typography>
            <Typography variant="h6">Brenda Shaw</Typography>
            <Typography variant="h6">Sandra McSwain</Typography>

          <Typography variant="h5">Benefactor of the Arts</Typography>
          <Typography variant="h6">Brad &amp; Cathy Bradley</Typography>
          <Typography variant="h6">Boyd &amp; Pat Harris</Typography>

          <Typography variant="h5">Supporter of the Arts</Typography>
          <Typography variant="h6">Jimmie Hudson</Typography>
          <Typography variant="h6">Roger &amp; Linda Levesque</Typography>
          <Typography variant="h6">Keith Clark</Typography>

          <Typography variant="h5">Benefactor</Typography>
          <Typography variant="h6">Brad &amp; Cathy Bradly</Typography>
          <Typography variant="h6">Boyd &amp; Pat Harris</Typography>
          <Typography variant="h6">Gayle Massey</Typography>

          <Typography variant="h5">Donors</Typography>
          <Typography variant="h6">Fran Rogers-Sunberg</Typography>
        </div>
      }
    />
  );
};

export default Thanks;
