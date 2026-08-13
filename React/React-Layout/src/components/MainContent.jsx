export default function MainContent() {

 const student = [
        {id:1, name: "Sakthi", age:20, msg: "Good Morning"},
        {id:2, name: "JayaKanth", age:20, msg: "Good Afternoon"},
        {id:3, name: "Naresh", age:20, msg: "Good evening"},
        {id:4, name: "Mahesh", age:20, msg: "Good night"},
        
    ];

const fetchStudent = student.map((val, key) => (
  <div key={key}>
    <h3>{val.name}</h3>
    <p>Age: {val.age}</p>
    <p>Message: {val.msg}</p>
    <hr />
  </div>
))

  return (
    <main className="main-content">
      <h1>Student Details</h1>
      <br />
      <hr />
      {fetchStudent}
    </main>
  );
}