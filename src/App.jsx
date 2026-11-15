import StudentProfileCard from "./StudentProfileCard";

function App() {
  return (
    <div className="app">
      <h1>Student Directory</h1>
      <div className="card-list">
        <StudentProfileCard
          name="Abdulaziz Bahriddinov"
          studentId="202537225"
          major="Computer Engineering"
          year={3}
          gpa={3.75}
        />

        <StudentProfileCard
          name="Nosirjonov Asadbek"
          studentId="202537228"
          major="Computer Engineering"
          year={2}
          gpa={3.5}
        />
        <StudentProfileCard
          name="Khakimov Mukhammadamin"
          studentId="202537558"
          major="Computer Engineering"
          year={4}
          gpa={3.9}
        />
      </div>
    </div>
  );
}

export default App;
