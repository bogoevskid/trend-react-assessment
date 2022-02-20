import PropTypes from "prop-types";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import { Chip, Typography } from "@mui/material";

const PercentageChips = ({ status, value }) => {
  return (
    <Chip
      sx={{
        pl: 0.5, pr: 0.5, maxHeight: 25, backgroundColor: status === "positive" ? "#EDF7EE" : "#FDECEB"
      }}
      icon={
        status === "positive" ? (
          <TrendingUp sx={{ fill: "#027E08" }} />
        ) : (
          <TrendingDown sx={{ fill: "#B23229" }} />
        )
      }
      label={
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500, fontSize: 15, color: status === "positive" ? "#06800C" : "#B23229"
          }}
        >
          {value}%
        </Typography>
      }
    />
  );
};

PercentageChips.propTypes = {
  status: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default PercentageChips;
