import {useEffect} from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Home = () => {

  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if(response.ok){
        dispatch({type: 'SET_WORKOUTS', payload: json})
        // after we make the fetch and if the json data is ok we then fire this dispatch which fires the workoutsReducer function in WorkoutContext.js and passes in the action 
        // and the action being passed is {type: 'SET_WORKOUTS', payload: json}
      }
    }
    fetchWorkouts()
  }, [dispatch]) // this second argument of a empty array (called the dependency array) will render the effect once rather than fetching it everytime the component is rendered
  // added dispatch into the array to get rid of a warning

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

// the {workouts && workouts.map } check to see if there is any workouts in workouts to display if there are no workouts the the code will not run 

export default Home
