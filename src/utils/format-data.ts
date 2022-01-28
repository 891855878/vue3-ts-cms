import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
const FORMAT_DATA = "YYYY-MM-DD HH:mm:ss";
export default function formatDate(
  utcString: string,
  formatDateString: string = FORMAT_DATA
) {
  return dayjs.utc(utcString).utcOffset(8).format(formatDateString);
}
