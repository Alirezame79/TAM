import { useParams } from "react-router-dom";
import useDetailGroup from "../../../../fetch/useDetailGroup";
import Card from "../../../../ui/Card";


export default function GroupView() {
    const { id } = useParams()
    const { data } = useDetailGroup(id)

    if (data === undefined) return
    console.log(data)

    return (
        <Card profile>
            <h1>Group View</h1>
        </Card>
    )
}