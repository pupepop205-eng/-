import classroomEntrance from "./assets/classroom-entrance.webp?url";
import elementaryStudy from "./assets/elementary-school-study.webp?url";
import highSchoolExam from "./assets/high-school-exam-study.webp?url";
import juniorHighTextbooks from "./assets/junior-high-school-textbooks.webp?url";
import heroClassroom from "./assets/kumamoto-individual-tutoring-classroom.webp?url";
import parentInterview from "./assets/parent-interview-table.webp?url";
import studyDesk from "./assets/study-desk-notebook.webp?url";
import studyPlan from "./assets/study-plan-calendar.webp?url";

/**
 * 掲載している写真は、学習塾の環境をイメージした写真です。
 * 実際の教室・生徒・講師の写真ではありません。
 * ファイル名は内容が分かる名前にし、alt属性には写真に写っている内容だけを書きます。
 */
export const media = {
  heroClassroom,
  studyDesk,
  elementaryStudy,
  juniorHighTextbooks,
  highSchoolExam,
  studyPlan,
  classroomEntrance,
  parentInterview,
} as const;
