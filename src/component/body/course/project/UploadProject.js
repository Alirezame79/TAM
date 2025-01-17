import classes from "./style/UploadProject.module.css";
import Card from "../../../../ui/Card";
import Button from "../../../../ui/Button";
import Input from "../../../../ui/Input";
import useGetStudentProject from "../../../../fetch/useGetStudentProject";
import { useSelector } from "react-redux";
import BASEURL from "../../../../fetch/BaseURL";
import { FaFileDownload } from "react-icons/fa";
import { useState } from "react";
import useUploadProject from "../../../../fetch/useUploadProject";
import { IoTimeOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

export default function UploadProject() {
  const {id} = useParams()
  const navigate = useNavigate()
  const project = useSelector((state) => {
    return state.studentProject;
  });
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  useGetStudentProject();
  useUploadProject(data);

  console.log(project);

  function getFileHandler(e) {
    console.log(e.target.files);
    const x = URL.createObjectURL(e.target.files[0]);
    console.log(x);
    console.log(e.target.files[0]);
    if (x === null) return;
    setFile(e.target.files[0]);
  }

  function sendProjectClicked() {
    let requestData = new FormData();

    if (file !== null) {
      requestData.append("file", file, file.name);
    } else {
      requestData.append("file", "");
    }

    setData(requestData);
  }

  function scheduleBtnClicked() {
    navigate('/course/' + id + '/project/schedule/')
  }

  return (
    <Card uploadProject>
      <div className={classes.header}>
      <h2 className={classes.title}> پروژه</h2>
      <IoTimeOutline className={classes.icon} onClick={scheduleBtnClicked} /></div>
      <div className={classes.center}>
        <div className={classes.CenterText}>
          <div className={classes.projectDownload}>
            <FaFileDownload className={classes.icon} />
            {project.project_detail !== undefined && (
              <a
                className={classes.downLink}
                href={BASEURL + project.project_detail.project_file}
                target="_blank"
                rel="noreferrer"
              >
                <h3>دانلود صورت پروژه</h3>
              </a>
            )}
          </div>
          <h3>:توضیحات پروژه</h3>
          <h4 className={`${classes.bottomSpace} ${classes.rightSpace}`}>
            {project.project_detail !== undefined &&
              project.project_detail.description}
          </h4>
          {project.group_detail !== undefined && (
            <>
              <h3>: نام گروه </h3>
              <h4 className={`${classes.bottomSpace} ${classes.rightSpace}`}>
                {project.group_detail.name}
              </h4>
              {/* <Input type="text" placeholder={project.group_detail.name} readOnly /> */}
            </>
          )}
        </div>
        <div className={classes.CenterText}>
          {project.group_uploaded_project !== undefined &&
            project.group_uploaded_project.length !== 0 && (
              <>
                <h2 className={`${classes.bottomSpace} ${classes.titleSize}`}>
                  :آخرین فایل ارسالی
                </h2>
                <h3> : ارسال کننده فایل</h3>
                <h4 className={`${classes.bottomSpace} ${classes.rightSpace}`}>
                  {
                    project.group_uploaded_project[
                      project.group_uploaded_project.length - 1
                    ].sender.name
                  }
                </h4>
                {/* <Input type="text" placeholder={project.group_uploaded_project[project.group_uploaded_project.length - 1].sender.name} readOnly /> */}
                <div className={classes.projectDownload}>
                  <FaFileDownload className={classes.icon} />
                  <a
                    className={classes.downLink}
                    href={
                      BASEURL +
                      project.group_uploaded_project[
                        project.group_uploaded_project.length - 1
                      ].file
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className={classes.bottomSpace}>
                      دانلود آخرین فایل ارسالی
                    </h3>
                  </a>
                </div>
              </>
            )}
        </div>
      </div>
      <div className={classes.uploadFile}>
        <h2 className={`${classes.bottomSpace} ${classes.titleSize}`}>
          {" "}
          :بارگذاری فایل جدید
        </h2>
        <input
          type="file"
          onChange={getFileHandler}
          className={classes.uploadFileInput}
        />
      </div>
      <Button submit click={sendProjectClicked}>
        ارسال فایل پروژه
      </Button>
    </Card>
  );
}
