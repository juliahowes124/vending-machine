
import {Link} from 'react-router-dom';


function VendingMachine() {

  return (
    <div>
      <Link to="/cheetos">Cheetos</Link><br/>
      <Link to="/reeses">Reeses</Link><br/>
      <Link to="/kitkat">Kitkat</Link><br/>
      <img src="https://www.clipartkey.com/mpngs/m/94-946079_free-cartoon-vending-machine.png" 
        style={{height: "300px", width:"300px"}} />
    </div>
  )
}

export default VendingMachine;