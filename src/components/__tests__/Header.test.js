import {fireEvent, render,screen} from '@testing-library/react'
import Header from "../Header"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppStore from '../../utils/AppStore'


test('should logout when you click on login', async()=>{
    render(<BrowserRouter>
    <Provider store={AppStore}>    
     <Header/>
    </Provider>
    </BrowserRouter>)

    const button = await screen.findByRole('button',{name:'Logout'})
    

    expect(button).toBeInTheDocument()
})

test('should render the header component with Cart', async()=>{
    render(<BrowserRouter>
    <Provider store={AppStore}>
        <Header/>
    </Provider>
    </BrowserRouter>)

    const Cart = await screen.findByText('Cart');
    expect(Cart).toBeInTheDocument()
})

test('should check the toggling function of Logout Login button onClick',async()=>{
    render(<BrowserRouter>
    <Provider store={AppStore}>
        <Header/>
    </Provider>
    </BrowserRouter>)

    const logoutButton = await screen.findByRole('button', {name:'Logout'})
    fireEvent.click(logoutButton)
    const loginButton = await screen.findByRole('button',{name:'Login'})
    expect(loginButton).toBeInTheDocument()

    fireEvent.click(loginButton)
    expect(logoutButton).toBeInTheDocument()
    
})

