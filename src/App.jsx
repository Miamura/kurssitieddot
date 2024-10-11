import Parts from "./component/parts.jsx";

const Header = ({ course }) => <h1>Web development curriculum</h1>;

const Course = ({ course }) => (
  <>
    <h2>{course.name}</h2>
    <ul>
      <Parts parts={course.parts} />
    </ul>
    <Total parts={course.parts} />
  </>
);

const Total = ({ parts = [] }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <strong>total of {totalExercises} exercises</strong>
    </p>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;

/*
import Partsx from "./component/parts.jsx";

const Header = () => <h1> Web development curriculum </h1>;

const Content = ({ course }) => {
  <>
    <h2>{course.name}</h2>
    <ul>
      <Partsx parts={course.parts} />
    </ul>
  </>;
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>total of {totalExercises} exercises</p>;
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        {courses.map((course) => (
          <Content key={course.id} course={course} />
        ))}
      </section>
      <section>
              <Total parts={courses.parts} />
      </section>
    </>
  );
};

export default App;
-----------------------------------
crashed how can i fix ?  its more complicated but i will fix, first try parts = [] then
write again the map func in total section
--------------------

console.log("toimi");

const Content = (props) => {
  return (
    <>
      <p>
        {props.parts[0].name} <br /> {props.parts[0].exercises}
      </p>
      <p>
        {props.parts[1].name} <br /> {props.parts[1].exercises}
      </p>
      <p>
        {props.parts[2].name} <br /> {props.parts[2].exercises}
      </p>
    </>
  );
};

const Content = ({ parts }) => (
  <>
    {parts.map((part, index) => (
      <p key={index}>
        {part.name} {part.exercises}
      </p>
    ))}
  </>
);

const Content = ({parts}) => {
  
    <>
      {parts.map((part) => (
        <p key= {part.name} {part.exercises}></p>
      ))}
    </>
};


const Total = (props) => {
  return (
    <>
      <p>
        total of{" "}
        {parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises +
          props.parts[3].exercises}{" "}
        exercises
      </p>
    </>
  );
};


*/
