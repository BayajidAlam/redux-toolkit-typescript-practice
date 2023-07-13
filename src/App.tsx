import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
function App() {

  const { count } = useAppSelector((state)=>state.counter)
  const dispatch = useAppDispatch();

  return   <div className="flex items-center justify-center mt-12">
  <button 
  id="decrement" 
  className="border-none bg-transparent cursor-pointer text-2xl px-3 py-2 bg-pink-600 text-white rounded-md"
  onClick={()=>dispatch(increment())}
  >increment</button>

  <button 
  id="decrement" 
  className="border-none bg-transparent cursor-pointer text-2xl px-3 py-2 ml-2 bg-pink-600 text-white rounded-md"
  onClick={()=>dispatch(incrementByAmount(5))}
  >incrementByAmount</button>



  <span 
  id="count" 
  className="text-2xl px-3 bg-pink-600 text-white rounded-md mx-2 py-2"
  >{count}</span>

  <button 
  id="increment" 
  className="border-none bg-transparent cursor-pointer text-2xl px-3 py-2 bg-pink-600 text-white rounded-md"
  onClick={()=>dispatch(decrement())}
  >decrement</button>
</div>
}

export default App
