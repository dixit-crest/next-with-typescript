import { all, fork } from "redux-saga/effects"
import { userWatcher } from "./auth/saga"
// import { clientsWatcher } from "./clients/saga"
// import { dealsWatcher } from "./deals/saga"
// import { productsWatcher } from "./products/saga"
// import { tasksWatcher } from "./tasks/saga"
// import { userManagementWatcher } from "./user-management/saga"
// import { vendorsWatcher } from "./vendors/saga"

function* rootSaga() {
    yield all([
        fork(userWatcher),
        // tasksWatcher(),
        // userManagementWatcher(),
        // productsWatcher(),
        // vendorsWatcher(),
        // clientsWatcher(),
        // dealsWatcher()
    ])
}

export default rootSaga
