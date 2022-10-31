import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test('on initial render, the pay button is disabled', async () => {
    render (<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}} />)

    //ASSERTIONs
    //console logs the HTML body of the test
        //screen.debug();

    //shows available roles in this element
        //screen.getByRoll('');

    //target specific roll, button "pay"
    expect(await screen.getByRole('button', {name: /pay/i})).toBeDisabled();
})