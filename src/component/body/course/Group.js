import useCheckGroup from "../../../fetch/useCheckGroup";
import Card from "../../../ui/Card";
import CreateGroup from "./group/CreateGroup";
import GroupList from "./group/GroupList";
import DetailGroup from "./group/DetailGroup";
import GroupView from "./group/GroupView";

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
