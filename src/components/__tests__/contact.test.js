import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("test case for contact page",() => {
      beforeEach(() => {
        console.log("before each");
      });   
  
    it("should load contact us page",() => {
        render(<Contact/>);
    
        const loaded = screen.getByRole("heading");
    
        expect(loaded).toBeInTheDocument();
    });
    
    it("should load button inside contact page",() => {
        render(<Contact/>);
        const btn = screen.getByText("Call");
        expect(btn).toBeInTheDocument();
    });
    
    it("should load 2 input boxes",() => {
        render(<Contact/>);
        const inputs = screen.getAllByRole("textbox");
        // console.log(inputs);
        expect(inputs.length).toBe(2);
    })
})

