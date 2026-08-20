function ArrayRendering() {
  const students = ["Jeeva", "Rahul", "Priya", "Anu"];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((val, ind) => {
          const a = ind+2
          return <li key={ a }>{val}</li>;
        })}
      </ul>
    </div>
  );
}

export default ArrayRendering;
