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
import { toast } from "react-toastify";

export default function ProjectList() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectList = useSelector((state) => {
    return state.projectList;
  });
  const projectData = useSelector((state) => {
    return state.projectData;
  });
  const zipProjects = useSelector((state) => {
    return state.allProjects;
  });
  const [sendRequest, setSendRequest] = useState(null);
  const [allFiles, setAllFiles] = useState(false);

  useProjectList();
  useMoreProjectData(sendRequest);
  useGetAllProjectFiles(allFiles);

  // console.log(projectList)
  // console.log(zipProjects)

  function getAllFilesClicked() {
    if (projectList.length === 0) {
      toast.error("هیچ گروهی پروژه این درس را آپلود نکرده است");
      return;
    }
    setAllFiles(true);

    if (zipProjects !== undefined) {
      window.open(BASEURL + zipProjects, "_blank", "noreferrer");
    }
  }

  function scheduleBtnClicked() {
    navigate("/course/" + id + "/project/schedule/");
  }

  return (
    <Card projectList>
      <div className={classes.header}>
        <IoTimeOutline
          className={classes.timeIcon}
          onClick={scheduleBtnClicked}
        />
        <h2 className={classes.title}>لیست پروژه ها</h2>
        <FaFileArchive
          onClick={getAllFilesClicked}
          className={classes.zipIcon}
        />
      </div>
      {projectList.length === 0 && (
        <p className={classes.alertTitle}>لیست خالی است</p>
      )}
      {projectList.map((eachProject) => {
        if (projectData !== undefined && projectData.id === eachProject.id) {
          return (
            <div key={projectData.id}>
              <Card projectListItemMoreInfo>
                <div className={`${classes.downFile} ${classes.bottom}`}>
                  <h3 className={classes.groupName} dir="rtl">
                    گروه {projectData.group.name}
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
                <h3 dir="rtl">
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
