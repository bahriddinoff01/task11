import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div className="app">
      <h1>Student Directory</h1>
      <div className="card-list">
        {/* TODO: replace with YOUR real information (student ID is REQUIRED) */}
        <StudentProfileCard
          name="Abdulaziz Bahriddinov"
          studentId="YOUR_STUDENT_ID"
          major="Computer Engineering"
          year={3}
          gpa={3.75}
        />
        {/* TODO: replace with two classmates' real names and details */}
        <StudentProfileCard
          name="Classmate One Name"
          studentId="CLASSMATE_1_ID"
          major="Computer Engineering"
          year={2}
          gpa={3.5}
        />
        <StudentProfileCard
          name="Classmate Two Name"
          studentId="CLASSMATE_2_ID"
          major="Computer Engineering"
          year={4}
          gpa={3.9}
        />
      </div>
    </div>
  );
}

export default App;
