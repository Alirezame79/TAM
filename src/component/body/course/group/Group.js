import useCheckGroup from "../../../../fetch/useCheckGroup";
import Card from "../../../../ui/Card";
import CreateGroup from "./CreateGroup";
import GroupList from "./GroupList";
import DetailGroup from "./DetailGroup";
import GroupView from "./GroupView";
import Loading from "../../../loading/Loading";

export default function Group() {
  const { data } = useCheckGroup();

  console.log(data);

  if (data === undefined) {
    return <Loading />;
  } else {
    if (data.group_status === 1 || data.group_status === 2) {
      return <GroupList />;
    } else if (data.group_status === 3) {
      return <DetailGroup />;
    } else if (data.group_status === 4) {
      return <GroupView />;
    } else if (data.group_status === 5) {
      return <CreateGroup />;
    }
  }
}
