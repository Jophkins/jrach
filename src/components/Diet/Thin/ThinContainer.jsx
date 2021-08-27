import {addProductAC} from "../../../redux/thinReducer";
import {connect} from "react-redux";
import Thin from "./Thin";


let mapStateToProps = (state) => {
    return {
        products: state.thinDiet.products,
        lunch: state.thinDiet.lunch
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (name, calories) => {
            dispatch(addProductAC(name, calories))
        }
    }
}

const ThinContainer = connect(mapStateToProps, mapDispatchToProps)(Thin);

export default ThinContainer;