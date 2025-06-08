const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>    
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.name1} exercise={props.exercise1}/>
      <Part part={props.name2} exercise={props.exercise2}/>
      <Part part={props.name3} exercise={props.exercise3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercises {props.total}</p>
  )  
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'state of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content 
        name1={parts[0].name} 
        exercise1={parts[0].exercises}
        name2={parts[1].name} 
        exercise2={parts[1].exercises}
        name3={parts[2].name} 
        exercise3={parts[2].exercises}
      />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App