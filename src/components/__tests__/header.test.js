// import {fireEvent, render,screen} from "@testing-library/react";
// import "@testing-library/jest-dom";
// import Header from "../Header";
// import { BrowserRouter } from "react-router-dom";
// import appStore from "../../utils/appStore";
// import { Provider } from "react-redux";

// it("should load header component",() => {
//     render(
//     <BrowserRouter>
//     <Provider store={appStore}>
//     <Header/>
//     </Provider>
//     </BrowserRouter>
//     )
//     const buttons = screen.getByText("Login",{value : "Login"});
//     expect(buttons).toBeInTheDocument();
// })

// it("should render cart items with value 0",() => {
//     render(
//         <BrowserRouter>
//         <Provider store={appStore}>
//             <Header/>
//         </Provider>
//         </BrowserRouter>
//     );
//     const cart = screen.getByText(/Cart/);
//     expect(cart).toBeInTheDocument();
// })

// it("should change login to logout and vice-versa in header",() => {
//     render(
//         <BrowserRouter>
//         <Provider store={appStore}>
//             <Header/>
//         </Provider>
//         </BrowserRouter>
//     )
//     const login = screen.getByRole("button",{value : "Login"});
//     fireEvent.click(login);
//     const logout = screen.getByRole("button",{value : "Logout"});
//     expect(logout).toBeInTheDocument();
// })