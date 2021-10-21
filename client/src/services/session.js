import router from "../router/index";
import { Login } from "./users";

const session = {
    user: null,
    messages: [],
    toRoute: '/socialfeed',
    Login(handle, password) {
        try {
            const response = Login(handle, password);
            this.user = response.user;
            router.push(this.toRoute);

        } catch (error) {
            this.messages.push({ text: error.msg, type: 'warning' })
        }
    }
};
export default session;
