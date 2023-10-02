import classes from "./style/ProjectList.module.css";
import Card from "../../../../ui/Card";
import { FaFileDownload, FaFileArchive, FaFileMedical } from "react-icons/fa";
import useProjectList from "../../../../fetch/useProjectList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useMoreProjectData from "../../../../fetch/useMoreProjectData";
import BASEURL from "../../../../fetch/BaseURL";
import useGetAllProjectFiles from "../../../../fetch/useGetAllProjectFiles";
import { IoTimeOutline } from "react-icons/io5";
import Schedule from "./schedule/Schedule";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectList() {
  const {id} = useParams()
  const navigate = useNavigate()
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
    console.log('step 0')
    setAllFiles(true);
  }

  function scheduleBtnClicked() {
    navigate('/course/' + id + '/project/schedule/')
  }

  return (
    <Card projectList>
      <div className={classes.header}>
        <IoTimeOutline className={classes.timeIcon} onClick={scheduleBtnClicked}/>
        <h2 className={classes.title}>لیست پروژه ها</h2>
        <a href={BASEURL + "/files/projects/archives/%D9%BE%D8%B1%D9%88%DA%98%D9%87%20%D8%A2%D9%BE%D9%84%D9%88%D8%AF%20%D8%B4%D8%AF%D9%87%20%D8%AF%D8%A7%D9%86%D8%B4%D8%AC%D9%88%DB%8C%D8%A7%D9%86%20%D8%AF%D8%B1%D8%B3%20%D9%85%D8%AF%D8%A7%D8%B1%20%D8%A7%D9%84%DA%A9%D8%AA%D8%B1%D9%88%D9%86%DB%8C%DA%A9%DB%8C.zip"}>
        <FaFileArchive
          onClick={getAllFilesClicked}
          className={classes.zipIcon}
        /></a>
      </div>
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
