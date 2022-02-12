import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const PercentageChips = ({ status, value }) => {
  return (
    <Chip
      sx={
        status === "positive"
          ? { backgroundColor: "#EDF7EE" }
          : { backgroundColor: "#FDECEB" }
      }
      icon={
        status === "positive" ? (
          <TrendingUpIcon sx={{ fill: "#027E08" }} />
        ) : (
          <TrendingDownIcon sx={{ fill: "#B23229" }} />
        )
      }
      label={
        <Typography variant="h6" sx={status === "positive" ? { color: "#06800C" } : { color: "#B23229" }}>
          {value}%
        </Typography>
      }
    />
  );
};

export default PercentageChips;
