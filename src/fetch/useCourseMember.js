import { useEffect, useState } from "react";
import BASEURL from "./BaseURL";

export default function useCourseMember(id) {
  const [res, setRes] = useState(null);

  useEffect(() => {
    fetch(BASEURL + "course/" + id + "/members", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRes(data);
      });
  }, [id]);

  return { res };
}
