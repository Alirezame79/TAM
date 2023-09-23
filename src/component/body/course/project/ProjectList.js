import classes from "./style/ProjectList.module.css";
import Card from "../../../../ui/Card";
import { FaFileDownload, FaFileArchive, FaFileMedical } from "react-icons/fa";
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
  const [allFiles, setAllFiles] = useState(false);

  useProjectList();
  useMoreProjectData(sendRequest);
  useGetAllProjectFiles(allFiles);

  // console.log(projectList)

  function getAllFilesClicked() {
    setAllFiles(true);
  }

  return (
    <Card projectList>
      <h2 className={classes.title}>لیست پروژه ها</h2>
      <FaFileArchive onClick={getAllFilesClicked} className={classes.zipIcon} />

      {projectList.map((eachProject) => {
        if (projectData !== undefined && projectData.id === eachProject.id) {
          return (
            <div key={projectData.id}>
              <Card projectListItemMoreInfo>
                <div className={`${classes.downFile} ${classes.bottom}`}>
                  <h3 className={classes.groupName}>
                    {" "}
                    گروه {projectData.group.name}{" "}
                  </h3>

                  <a
                    href={BASEURL + projectData.file}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFileDownload className={classes.icon} />
                  </a>
                </div>
                <h3 className={classes.bottom}>
                  {" "}
                  سرگروه : {projectData.group.creator.name}{" "}
                </h3>

                <h3 className={classes.bottom}>
                  {" "}
                  ارسال کننده پروژه : {projectData.sender.name}
                </h3>
                <h3> {projectData.created}</h3>
              </Card>
            </div>
          );
        } else {
          return (
            <div key={eachProject.id} className={classes.projectListItem}>
              <Card projectListItem>
                <h3>
                  {" "}
                  گروه {eachProject.group.name} -{" "}
                  {eachProject.group.creator.name}{" "}
                </h3>
                <FaFileMedical
                  className={classes.icon}
                  onClick={function moreDataClicked() {
                    let readyData = {
                      upload_project_id: eachProject.id,
                    };
                    setSendRequest(readyData);
                  }}
                />
              </Card>
            </div>
          );
        }
      })}
    </Card>
  );
}
