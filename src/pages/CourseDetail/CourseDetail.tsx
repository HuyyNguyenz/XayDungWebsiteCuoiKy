import DefaultLayout from "../../layouts/DefaultLayout";
import { useState, useEffect } from "react";

const CourseDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DefaultLayout>
      <div className="flex-1 p-4 mb-20 md:px-8 lg:px-12 w-full overflow-hidden">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-32 font-bold text-title-color py-4">
            Kiến thức nhập môn IT
          </h1>
          <span className="text-14 text-text-color">
            Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem
            các videos tại khóa này trước nhé.
          </span>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CourseDetail;
