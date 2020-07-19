import React from "react";
import Home from "./Home";
import { shallow, mount, render } from "enzyme";

// console.log(shallow(<Home />));
it("expect it render a Home component", ()=> {
    // expect( shallow(<Home />).length ).toEqual(1)
    expect(shallow(<Home />)).toMatchSnapshot();
})