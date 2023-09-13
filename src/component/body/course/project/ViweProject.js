import classes from "./style/ViweProject.module.css";
import Card from "../../../../ui/Card";
import { FaFileDownload } from "react-icons/fa";

export default function ViweProject() {
  return (
    <Card viweProject>
      <h2 className={classes.title}> پروژه شما</h2>
      <Card projectListItem>
        <h3>نام فایل آپلود شده</h3>
        <FaFileDownload className={classes.icon} />
      </Card>
      <h3 className={classes.number}>20 : نمره پروژه</h3>
    </Card>
  );
}
