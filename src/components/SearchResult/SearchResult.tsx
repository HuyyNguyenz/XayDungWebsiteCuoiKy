import { NavLink } from "react-router-dom";
import { Course } from "../../interface";
import { root } from "../../utils";

interface Props {
  title: string;
  data: Array<Course>;
}

const SearchResult: React.FC<Props> = (props) => {
  const { title, data } = props;

  return (
    <>
      <div className="flex items-center justify-between text-14 pt-6 pb-3 mb-[0.375rem] border-b border-solid border-border-color">
        <h5 className="text-title-color uppercase font-medium">{title}</h5>
        <button className="text-text-color-2 hover:text-primary-color">
          Xem thêm
        </button>
      </div>

      {data.length > 0
        ? data.map((course) => {
            if (Number(course.price) === 0) {
              return (
                <NavLink key={course.id} to={`/courses/${course.id}`}>
                  <div className="flex items-center justify-start py-[0.375rem]">
                    <div className="w-8 h-8">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={`${root}/users/image/${course.image}`}
                        alt={course.name}
                      />
                    </div>
                    <span className="text-14 text-text-color line-clamp-2 ml-3 flex-1">
                      {course.name}
                    </span>
                  </div>
                </NavLink>
              );
            }
          })
        : ""}
    </>
  );
};

export default SearchResult;
