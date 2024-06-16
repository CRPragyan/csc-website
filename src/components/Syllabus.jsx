export default function Syllabus({ courseTitle, SyllabusData }) {
  const syllabus = SyllabusData[courseTitle];

  if (!syllabus)
    return (
      <div className="">
        <h1 className="text-3xl">No syllabus available</h1>
      </div>
    );

  return (
    <div className="syllabus">
      {Object.keys(syllabus).map((semester, index) => (
        <div className="max-w-6xl mx-auto my-0 py-5" key={index}>
          <h2 className="md:text-2xl text-xl text-start  text-orange-500 my-3">
            {semester}
          </h2>
          <table className="md:text-lg tracking-wide text-sm">
            <thead>
              <tr>
                <th className="w-[40%]">Paper Code</th>
                <th>Paper Name</th>
              </tr>
            </thead>
            <tbody>
              {syllabus[semester].map((paper, index) => (
                <>
                  <tr>
                    <td>{paper.Code}</td>
                    <td>{paper.Subject}</td>
                  </tr>
                  <tr>
                    {paper.CodeO && paper.SubjectO && (
                      <>
                        <td>{paper.CodeO}(Optional)</td>
                        <td>{paper.SubjectO}</td>
                      </>
                    )}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
