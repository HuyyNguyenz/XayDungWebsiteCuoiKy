import htmlCssCourse from "../../assets/images/free_course.png";

const CoursePreview: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start border-2 border-solid border-border-color rounded-2xl my-4 p-4 md:p-6 md:flex-row">
      <div className="w-full md:w-[14.25rem]">
        <img
          className="w-full rounded-2xl"
          src={htmlCssCourse}
          alt="course_img"
        />
      </div>
      <div className="flex-1 mt-2 md:ml-6 md:mt-0">
        <h2 className="text-18 text-title-color font-bold">
          Kiến Thức Nhập Môn IT
        </h2>
        <span className="text-16 text-primary-color font-semibold">
          Miễn phí
        </span>
        <p className="text-14 text-text-color my-2 line-clamp-2">
          Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem
          các videos tại khóa này trước nhé.
        </p>
        <button className="w-full md:max-w-[8.5rem] text-14 text-white bg-primary-color rounded-full px-4 py-2 font-semibold hover:opacity-90">
          Xem khoá học
        </button>
      </div>
    </div>
  );
};

export default CoursePreview;
