import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
        <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
          {primaryText}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
              {secondaryText}
            </Typography>
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end">
            <Chip
              sx={{ backgroundColor: "#EDF7EE" }}
              icon={status === "positive" ? <TrendingUpIcon sx={{ color: "#027E08" }} /> : <TrendingDownIcon sx={{ color: "#B23229" }} />}
              label={
                <Typography variant="h6" sx={{ color: "#06800C" }}>
                  {percentageValue}%
                </Typography>
              }
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SummaryInfoCards;
