import useCheckGroup from "../../../../fetch/useCheckGroup";
import Card from "../../../../ui/Card";
import CreateGroup from "./CreateGroup";
import GroupList from "./GroupList";
import DetailGroup from "./DetailGroup";
import GroupView from "./GroupView";

export default function Group() {
  const { data } = useCheckGroup();

  if (data === undefined) return;
  console.log(data);

  if (data.group_status === 1 || data.group_status === 2) {
    return <GroupList />;
  } else if (data.group_status === 3) {
    return <DetailGroup />;
  } else if (data.group_status === 4) {
    return <GroupView />;
  } else if (data.group_status === 5) {
    return <CreateGroup />;
  } else {
    return (
      <Card profile>
        <h1>Group</h1>
      </Card>
    );
  }
}
