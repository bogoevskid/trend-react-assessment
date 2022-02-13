import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

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
          <TrendingUpIcon sx={{ fill: "#027E08" }} />
        ) : (
          <TrendingDownIcon sx={{ fill: "#B23229" }} />
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

export default PercentageChips;
