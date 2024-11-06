import PropTypes from 'prop-types';
import NavBar from "./NavBar"

const Main = ({child}) => {
  return (
    <div>
        <NavBar/>
        {child}
    </div>
  )
}

Main.propTypes = {
    child: PropTypes.node.isRequired
};

export default Main