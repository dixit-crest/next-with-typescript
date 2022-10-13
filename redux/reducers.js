import { combineReducers } from "redux"
import userReducer from "./auth/reducer"
// import clientsReducer from "./clients/reducer"
// import dealsReducer from "./deals/reducer"
// import productsReducer from "./products/reducer"
// import tasksReducer from "./tasks/reducer"
// import userManagementReducer from "./user-management/reducer"
// import vendorsReducer from "./vendors/reducer"

const rootReducer = combineReducers({
    user: userReducer,
    // tasks: tasksReducer,
    // userManagement: userManagementReducer,
    // products: productsReducer,
    // vendors: vendorsReducer,
    // clients: clientsReducer,
    // deals: dealsReducer
})

export default rootReducer
