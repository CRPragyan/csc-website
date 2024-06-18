import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Syllabus({ courseTitle, SyllabusData }) {
  const componentRef = useRef();
  const syllabus = SyllabusData[courseTitle];

  if (!syllabus)
    return (
      <div className="">
        <h1 className="text-3xl">No syllabus available</h1>
      </div>
    );

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Syllabus0" + courseTitle,
    onAfterPrint: () => alert("Data save In pdf"),
  });

  return (
    <div>
      <div ref={componentRef}>
        {Object.keys(syllabus).map((semester, index) => (
          <div className="max-w-6xl mx-auto my-0 py-5" key={index}>
            <h2 className="md:text-2xl text-xl text-start  text-orange-500 my-3">
              {semester}
            </h2>
            <table className="md:text-lg tracking-wide text-sm">
              <thead>
                <tr>
                  <th className="w-[50%]">Paper Code</th>

                  <th colSpan="">Paper Name</th>
                </tr>
              </thead>
              <tbody>
                {syllabus[semester].map((paper, index) => (
                  <>
                    <tr key={index}>
                      <td>{paper.Code}</td>

                      <td>{paper.Subject}</td>
                    </tr>
                    {paper.CodeO && paper.SubjectO && (
                      <>
                        <tr>
                          <td>{paper.CodeO} (Optional)</td>
                          <td>{paper.SubjectO}</td>
                        </tr>
                      </>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <button className="primary-btn" onClick={handlePrint}>
        Save
      </button>
    </div>
  );
}
