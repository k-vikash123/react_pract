
import {fireEvent, render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import Mock_Res from "../../utils/Mock_Res";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(Mock_Res);
        }
    })
})

it("should search the restautrants",async() => {
    await act(async() => 
    render(
        <BrowserRouter> 
        <Body/>
        </BrowserRouter>
    )
    );

    const restcardBefore = screen.getAllByTestId("restcardid");
    expect(restcardBefore.length).toBe(9);

    const button = screen.getByRole("button");
    const searchBox = screen.getByTestId("searchid")
    fireEvent.change(searchBox,{ target : {value : "KFC"}})
    fireEvent.click(button);
    const restcardAfter = screen.getAllByTestId("restcardid");
    expect(restcardAfter.length).toBe(1);
})