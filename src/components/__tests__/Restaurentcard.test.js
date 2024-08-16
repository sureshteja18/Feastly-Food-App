import {render,screen,} from '@testing-library/react'
import Restaurentcard ,{withPromotedLabel}  from "../Restaurentcard"
import MOCK_DATA from "../Mocks/Restaurentcardmock.json";

const MOCK = {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
}

test('should component render the data with card details',async()=>{
    render(<Restaurentcard resData={MOCK_DATA}/>)
 
    const name = await screen.findByText("Pizza Hut")  
    expect(name).toBeInTheDocument()

})

test('should component render the image in card',async()=>{
    render(<Restaurentcard resData={MOCK_DATA}/>)
 
    const image = await screen.findByRole("img")  
    expect(image).toHaveAttribute('src', "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7")

})

test('should withPromotedLabel component renders the data', async()=>{
    const ComponentWithPromotedLabel = withPromotedLabel(Restaurentcard)
    render(<ComponentWithPromotedLabel resData={MOCK_DATA} data={MOCK}/>)

    const header = await screen.findByText("50% OFF")
    expect(header).toBeInTheDocument()
})