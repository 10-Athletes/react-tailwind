
import NewsFeed from "../components/NewsFeed"
import RecentMatches from "../components/RecentMatches"


const Dashboard = () => {
  return (
      <div className="container-fluid">
          <NewsFeed/>
          <RecentMatches/>
      </div>
  )
}

export default Dashboard