const Total = ({ parts }) => {
    const total = parts.reduce((sum, curr) => {
        return sum + curr.exercises
    }, 0)

    return (
      <p> Number of exercises {total}</p>
    )  
  }

export default Total