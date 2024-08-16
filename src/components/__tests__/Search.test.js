import { render,screen } from "@testing-library/react" 
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import AppStore from "../../utils/AppStore"


test('should render the search feild when loaded',async()=>{
    render(<BrowserRouter><Provider store={AppStore}>
        <Header/>
        </Provider></BrowserRouter>
    )

    const search = await screen.findByText('input')
    expect(search).toBeInTheDocument()

})