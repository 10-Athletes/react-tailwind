import { Link } from "react-router-dom";

const Card = (props) => {
    return(
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to={props.cardPropsPath} className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-white title-font text-lg font-medium">The Catalyzer</h2>
        </div>
      </div>

    )
}


const RecentMatches = () => {

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-left w-full mb-20">
      <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">Review Matches</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Recent Matches played</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <Card cardPropsPath="/recent"/>
      <Card cardPropsPath="/recent"/>
      <Card cardPropsPath="/recent"/>
      <Card cardPropsPath="/recent"/>
      <Card cardPropsPath="/recent"/>
      <Card cardPropsPath="/recent"/>
    </div>
  </div>
</section>

    )
}
export default RecentMatches