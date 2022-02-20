import PropTypes from "prop-types";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import { Chip, Typography } from "@mui/material";

const PercentageChips = ({ status, value }) => {
  return (
    <Chip
      sx={
        status === "positive"
          ? { backgroundColor: "#EDF7EE", pl: 0.5, pr: 0.5, maxHeight: 25 }
          : { backgroundColor: "#FDECEB", pl: 0.5, pr: 0.5, maxHeight: 25 }
      }
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
          sx={
            status === "positive"
              ? { color: "#06800C", fontWeight: 400, fontSize: 15 }
              : { color: "#B23229", fontWeight: 400, fontSize: 15 }
          }
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
