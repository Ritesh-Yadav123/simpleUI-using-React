
import Header from '../Header/Header.jsx'
import Left from '../Left/Left.jsx'
import Right from '../Right/Right.jsx'

function Main() {
  return (
    <div>
      <Header />
      <div className="flex">
      <Left />
      <Right />
      </div>
    </div>
  )
}

export default Main
