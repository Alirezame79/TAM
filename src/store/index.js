import { configureStore } from '@reduxjs/toolkit'
import { VerificationSlice, setVerification } from './slices/VerificationSlice';
import { StudentCoursesSlice, setStudentCourses } from './slices/StudentCoursesSlice'
import { AssistantCoursesSlice, setAssistantCourses } from './slices/AssistantCoursesSlice'
import { TeacherCoursesSlice, setTeacherCourses } from './slices/TeacherCoursesSlice'
import { ProfileSlice, setProfile } from './slices/ProfileSlices'
import reset from './actions/ProfileCourseActions'

const store = configureStore({
    reducer: {
        verification: VerificationSlice.reducer,
        studentCourses: StudentCoursesSlice.reducer,
        assistantCourses: AssistantCoursesSlice.reducer,
        teacherCourses: TeacherCoursesSlice.reducer,
        profile: ProfileSlice.reducer
    }
});

export { store, setVerification, setStudentCourses, setAssistantCourses, setTeacherCourses, setProfile, reset }