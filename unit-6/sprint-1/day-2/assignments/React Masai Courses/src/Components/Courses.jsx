// code goes here
// do a default export

const Courses = () => {
  return (
    <div>
      <div>
        <h2>Full Time Courses</h2>
        <ol>
          <li>
            <p>Eligibility</p>
            <ul>
              <li>Graduation</li>
              <li>Entrance Exam</li>
            </ul>
            <p>Duration</p>
            <ul>
              <li>2 years</li>
            </ul>
          </li>
        </ol>
      </div>

      <div>
        <h2>Part Time Courses</h2>
        <ol>
          <li>
            <p>Eligibility</p>
            <ul>
              <li>Work Experience</li>
              <li>Interview</li>
            </ul>
            <p>Duration</p>
            <ul>
              <li>3 years</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Courses;
