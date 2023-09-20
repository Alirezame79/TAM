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

export default function UploadProject() {
  const project = useSelector((state) => {
    return state.studentProject;
  });
  const [file, setFile] = useState(null)
  const [data, setData] = useState(null)

  useGetStudentProject();
  useUploadProject(data)

  console.log(project)

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

  return (
    <Card uploadProject>
      <h2 className={classes.title}> پروژه</h2>
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
      <h3>:توضیحات بروژه</h3>
      <h4>{project.project_detail !== undefined && project.project_detail.description}</h4>
      {project.group_detail !== undefined && 
      <> 
        <h3> نام گروه</h3>
        <Input type="text" placeholder={project.group_detail.name} readOnly />
      </>}
      {project.group_uploaded_project !== undefined && 
        project.group_uploaded_project.length !== 0 && 
        <>
          <h2>:آخرین فایل ارسالی</h2>
          <h3> ارسال کننده فایل</h3>
          <Input type="text" placeholder={project.group_uploaded_project[project.group_uploaded_project.length - 1].sender.name} readOnly />
          <a className={classes.downLink}
            href={BASEURL + project.group_uploaded_project[project.group_uploaded_project.length - 1].file}
            target="_blank"
            rel="noreferrer">
            <h3>دانلود آخرین فایل ارسالی</h3>
            </a>
            </>
      }
      <h2>:ارسال فایل جدید</h2>
      <input type="file" onChange={getFileHandler}/>

      <Button submit click={sendProjectClicked}>ارسال پروژه</Button>
    </Card>
  );
}
