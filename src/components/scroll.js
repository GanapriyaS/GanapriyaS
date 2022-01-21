import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { common } from "@mui/material/colors";
function Scroll() {
  return (
    <a href="/#" class="scrollup" id="scroll-up">
      <ArrowUpwardIcon sx={{ color: common.white }} />
    </a>
  );
}

export default Scroll;
