import { useEffect, useState } from "react";

export default function useCourseSetting(id) {
  const [res, setRes] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/course/" + id + "/setting", {
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
