import PropTypes from "prop-types";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import PercentageChips from "./PercentageChips";

const SummaryInfoCards = ({ color, primaryText, secondaryText, status, percentageValue }) => {
  return (
    <Card sx={{ backgroundColor: color, borderRadius: 5 }}>
      <CardContent sx={{ padding: 3 }}>
        <Typography sx={{ color: "#FFFFFF", fontWeight: 100, fontSize: "24px" }}>
          {primaryText}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography sx={{ color: "#FFFFFF", fontSize: "32px" }}>
              {secondaryText}
            </Typography>
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end" alignItems="center">
            <PercentageChips status={status} value={percentageValue} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SummaryInfoCards.propTypes = {
  color: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  percentageValue: PropTypes.string.isRequired,
};

export default SummaryInfoCards;
