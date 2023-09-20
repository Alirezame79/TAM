import classes from "./style/ProjectList.module.css";
import Card from "../../../../ui/Card";
import { FaFileDownload } from "react-icons/fa";
import useProjectList from "../../../../fetch/useProjectList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useMoreProjectData from "../../../../fetch/useMoreProjectData";
import BASEURL from "../../../../fetch/BaseURL";
import useGetAllProjectFiles from "../../../../fetch/useGetAllProjectFiles";

export default function ProjectList() {
  const projectList = useSelector((state) => {
    return state.projectList;
  });
  const projectData = useSelector((state) => {
    return state.projectData;
  });
  const [sendRequest, setSendRequest] = useState(null);
  const [allFiles, setAllFiles] = useState(false)

  useProjectList();
  useMoreProjectData(sendRequest);
  useGetAllProjectFiles(allFiles)

  // console.log(projectList)

  function getAllFilesClicked() {
    setAllFiles(true)
  }

  return (
    <Card projectList>
      <h2 className={classes.title}>لیست پروژه ها</h2>
      <h3 onClick={getAllFilesClicked}>All Files</h3>
      <Card projectListItem>
        {projectList.map((eachProject) => {
          if (projectData !== undefined && projectData.id === eachProject.id) {
            return (
              <div key={projectData.id}>
                <>
                  <h3>{projectData.group.name}</h3>
                  <h3>{projectData.group.creator.name}</h3>
                </>
                <>
                  <h3>{projectData.sender.name}</h3>
                  <h3>{projectData.created}</h3>
                </>
                <a
                  href={BASEURL + projectData.file}
                  target="_blank"
                  rel="noreferrer"
                >
                  file
                </a>
              </div>
            );
          } else {
            return (
              <div key={eachProject.id} className={classes.projectListItem}>
                <h3>
                  {" "}
                  گروه {eachProject.group.name} -{" "}
                  {eachProject.group.creator.name}{" "}
                </h3>
                <FaFileDownload
                  className={classes.icon}
                  onClick={function moreDataClicked() {
                    let readyData = {
                      upload_project_id: eachProject.id,
                    };
                    setSendRequest(readyData);
                  }}
                />
              </div>
            );
          }
        })}
      </Card>
    </Card>
  );
}
