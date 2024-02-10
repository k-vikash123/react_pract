import {render,screen} from "@testing-library/react";
import Restcard from "../RestCard";
import "@testing-library/jest-dom";
import Mock_Data from "../../utils/MockData";

it("should check if restCard componenet is loaded or not",() => {
    render(
     <Restcard resData = {Mock_Data}/>
    );
    const name = screen.getByText("Bedekar Misal");
    expect(name).toBeInTheDocument();
})