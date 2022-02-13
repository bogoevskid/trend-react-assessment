import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PercentageChips from "./PercentageChips";

const SummaryInfoCards = ({
  color,
  primaryText,
  secondaryText,
  status,
  percentageValue,
}) => {
  return (
    <Card sx={{ backgroundColor: color, borderRadius: 5 }}>
      <CardContent sx={{ padding: 3 }}>
        <Typography variant="h6" sx={{ color: "#FFFFFF", fontWeight: 100 }}>
          {primaryText}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5" sx={{ color: "#FFFFFF" }}>
              {secondaryText}
            </Typography>
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end">
            <PercentageChips status={status} value={percentageValue} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SummaryInfoCards;
