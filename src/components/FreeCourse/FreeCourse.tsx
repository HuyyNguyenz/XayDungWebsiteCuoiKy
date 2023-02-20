import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Course } from "../../interface";

interface Props {
  course: Course;
}

const FreeCourse: React.FC<Props> = (props) => {
  const { course } = props;

  const subscribers: string = course.subscribers.toLocaleString("vi-vn");

  return (
    <div className="w-[60vw] mr-4 mb-4 flex-shrink-0 md:w-full md:flex-shrink-0 md:mb-0 md:mr-0">
      <div className="group relative top-0 left-0 cursor-pointer select-none">
        <div className="w-full">
          <img
            className="w-full h-full rounded-2xl object-cover"
            src={course.image}
            alt={course.name}
          />
        </div>
        <div className="overlay absolute w-full h-full rounded-2xl group-hover:opacity-100 opacity-0"></div>
        <button className="center_item text-14 font-semibold text-text-color py-2 px-4 rounded-full bg-white z-20 animate-bottom-up group-hover:block hidden">
          Xem khoá học
        </button>
      </div>
      <h3 className="text-16 text-text-color font-semibold my-2 cursor-pointer select-none line-clamp-1">
        {course.name}
      </h3>
      <div className="flex items-center justify-start">
        <div className="mr-3 text-text-color-2">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <span className="text-14 text-text-color">{subscribers}</span>
      </div>
    </div>
  );
};

export default FreeCourse;
