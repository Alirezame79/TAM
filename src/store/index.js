import { configureStore } from "@reduxjs/toolkit";
import { VerificationSlice, setVerification } from "./slices/VerificationSlice";
import { StudentCoursesSlice, setStudentCourses, } from "./slices/StudentCoursesSlice";
import { AssistantCoursesSlice, setAssistantCourses, } from "./slices/AssistantCoursesSlice";
import { TeacherCoursesSlice, setTeacherCourses, } from "./slices/TeacherCoursesSlice";
import { ProfileSlice, setProfile } from "./slices/ProfileSlices";
import { SelectedCourseSlice, setCourse } from "./slices/SelectedCourseSlice";
import { ModalsSlice, setModal } from "./slices/ModalsSlice";
import { CheckAssistantSlice, setAssistant } from './slices/CheckAssistantSlice'
import { CourseSettingSlice, setCourseSetting } from './slices/CourseSettingSlice'
import { AssistantListSlice, setAssistantList } from './slices/AssistantListSlice'
import { GroupListSlice, setGroupList } from './slices/GroupListSlice'
import { CheckMemberSlice, setMember } from './slices/CheckMemberSlice'
import { MembersListSlice, setMembersList } from './slices/MembersListSlice'
import { ProjectSlice, setProject } from './slices/ProjectSlice'
import { ProjectListSlice, setProjectList } from './slices/ProjectListSlice'
import { MoreProjectDataSlice, setProjectData } from './slices/MoreProjectDataSlice'
import { StudentProjectSlice, setStudentProject } from './slices/StudentProjectSlice'
import { TeacherRoundListSlice, setTeacherRoundList } from './slices/TeacherRoundListSlice'
import { StudentRoundListSlice, setStudentRoundList } from './slices/StudentRoundListSlice'
import { ScheduleRoleSlice, setScheduleRole } from './slices/ScheduleRoleSlice'
import reset from "./actions/ProfileCourseActions";

const store = configureStore({
  reducer: {
    verification: VerificationSlice.reducer,
    studentCourses: StudentCoursesSlice.reducer,
    assistantCourses: AssistantCoursesSlice.reducer,
    teacherCourses: TeacherCoursesSlice.reducer,
    profile: ProfileSlice.reducer,
    course: SelectedCourseSlice.reducer,
    modal: ModalsSlice.reducer,
    checkAssistant: CheckAssistantSlice.reducer,
    courseSetting: CourseSettingSlice.reducer,
    assistantList: AssistantListSlice.reducer,
    groupList: GroupListSlice.reducer,
    checkMember: CheckMemberSlice.reducer,
    membersList: MembersListSlice.reducer, 
    project: ProjectSlice.reducer,
    projectList: ProjectListSlice.reducer,
    projectData: MoreProjectDataSlice.reducer,
    studentProject: StudentProjectSlice.reducer,
    teacherRoundList: TeacherRoundListSlice.reducer,
    studentRoundList: StudentRoundListSlice.reducer,
    scheduleRole: ScheduleRoleSlice.reducer,
  },
});

export {
  store,
  setVerification,
  setStudentCourses,
  setAssistantCourses,
  setTeacherCourses,
  setProfile,
  setCourse,
  setModal,
  setAssistant,
  setCourseSetting,
  setAssistantList,
  setGroupList,
  setMember,
  setMembersList,
  setProject,
  setProjectList,
  setProjectData,
  setStudentProject,
  setTeacherRoundList,
  setStudentRoundList,
  setScheduleRole,
  reset,
};
