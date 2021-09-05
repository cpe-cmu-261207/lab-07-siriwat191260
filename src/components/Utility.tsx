import { empty, PixelPainterStore, random } from "../stores/PixelPainterStore"

const Utility = () => {
  const state = PixelPainterStore.useState()

  return (
    <div className="flex justify-center space-x-3">
      <button onClick={()=>{empty()}} className="w-36">Clear</button>
      <button onClick={()=>{random()}} className="w-36">Random color</button>
    </div>
  )
}

export default Utility