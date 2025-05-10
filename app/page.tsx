'use client'
import { Button } from '@/components/ui/button'
import { increment, decrement, incrementByAmount } from '../store/slices/counterSlices'
import { useAppDispatch, useAppSelector } from '@/store/hook'

export default function Home() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="text-center mt-20">
      <h1>Redux Toolkit Counter (TS)</h1>
      <h2>{count}</h2>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())} className='ml-5'>Decrement</Button>
      <Button className='ml-5' onClick={()=>dispatch(incrementByAmount(5))}>Increment With Amount</Button>
    </div>
  )
}
