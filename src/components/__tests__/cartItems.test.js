
import "@testing-library/jest-dom";
import {screen,render, fireEvent} from "@testing-library/react";
import RestMenu from "../RestMenu";
import { BrowserRouter } from "react-router-dom";
import Mock_Res from "../../utils/Mock_Res";
import { act } from "react-dom/test-utils";
import RestaurantCategory from "../RestaurantCat";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(Mock_Res);
        }
    });
});

it("should check whther item in cart got updated or not",async() => {
    await act(async() => render(
        <Provider store={appStore}>
        <BrowserRouter>
        <Header/>
        <RestMenu/>
        </BrowserRouter>
        </Provider>  
    ));

    const meals = screen.getByText("Recommended(13)");
    expect(meals).toBeInTheDocument();
    fireEvent.click(meals);
    const items = screen.getAllByRole("button",{name : "ADD"});
    fireEvent.click(items[0]);
    const cart = screen.getByText("Cart-(1Items)");
    expect(cart).toBeInTheDocument();
})

