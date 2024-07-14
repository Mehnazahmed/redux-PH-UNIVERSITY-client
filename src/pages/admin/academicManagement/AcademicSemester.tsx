import { useGetAllSemestersQuery } from "../../../redux/features/academicSemeter/academicSemeterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return <div>This is AcademicSemester Component</div>;
};

export default AcademicSemester;
