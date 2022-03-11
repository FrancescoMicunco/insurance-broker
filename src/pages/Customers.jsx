import React from 'react'
import SingleCustomer from '../Components/itemCustomer'
import { useSelector } from 'react-redux'
import { Table, Form, Button, FormControl } from 'react-bootstrap'



const users = [{
    id: 1,
    name: "num1",
    lastName: "Lucci",
    email: "ali@ali.com",
    job: "journay",
    family: { married: true, sons: 2 },
    privacy: { first_field: true, second_field: false, third_field: false },
    compliance: { identify: true, PPI: false },
    isActive: true,
    contracts: {
        contract_name: 'aliud',
        premium: 500.20,
        rate_earnings: 5,
    },
    seller: 'Arino Lacca',


},
{
    id: 2,
    name: "num2",
    lastName: "Lnum2",
    email: "uri@uri.com",
    job: "manager",
    family: { married: false, sons: 2 },
    privacy: { first_field: true, second_field: true, third_field: false },
    compliance: { identify: true, PPI: true },
    isActive: true,
    contracts: {
        contract_name: 'lassm',
        premium: 200.20,
        rate_earnings: 5,
    },
    seller: 'Verio Sola',
},
{
    id: 3,
    name: "num3",
    lastName: "Lnum3",
    email: "sushi@sushi.com",
    job: "manager",
    family: { married: false, sons: 1 },
    privacy: { first_field: false, second_field: true, third_field: false },
    compliance: { identify: true, PPI: false },
    isActive: true,
    contracts: {
        contract_name: 'pulp',
        premium: 1200.00,
        rate_earnings: 5,
    },
    seller: 'Arino Lacca',
},
];

const Customers = () => {

    const updateCustomer = () => {
        alert("Stai modificando il cliente")
    }

    const customers = useSelector((state) => state.customers)
    console.log('props from state Customers', customers)
    console.log('those are the users', users)
    return (
        <div >
            <>
                <div style={{ display: 'block', justifyContent: 'center' }}>
                    <div style={{ text: 'center' }}>
                        <Form inline style={{ width: '50%', display: 'flex', }}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </div><div>
                        <i class="bi bi-arrow-left"></i>
                        <i class="bi bi-arrow-right"></i>
                    </div>

                </div>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>LastName <i class="bi bi-arrow-down-up"></i>
                            </th>
                            <th>Seller <i class="bi bi-arrow-down-up"></i></th>
                            <th>Premium <i class="bi bi-arrow-down-up"></i></th>
                            <th>Privacy <i class="bi bi-arrow-down-up"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u =>

                            <tr onClick={updateCustomer}>
                                <SingleCustomer customer={u} />
                            </tr>

                        )}
                    </tbody>

                </Table>
            </>
        </div >
    )
}

export default Customers