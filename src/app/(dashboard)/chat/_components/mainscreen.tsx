import Question from './question-section'
import Tabs from './tabs'

const MainScreen = ({url , detailedSummary} : {url : string, detailedSummary : string}) => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="w-7/12  hidden md:block ">
        <Tabs url={url} detailedSummary={detailedSummary} />
      </div>
      <div className="bg-gradient-to-r w-[3px] from-blue-500 to-green-400 hidden md:block"></div>
      <Question/>
    </div>
  )
}

export default MainScreen
