import React from "react";

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  specialInstructions: '',
  ///// DROPDOWN /////
  size: '',
  ///// RADIO BUTTONS /////
  sauce: '',
  ///// CHECKBOXES /////
  pinapple: false, 
  anchovies: false,
  broccoli: false,
  artichokes: false,
  eggplant: false,
}
const initialFormErrors = {
  name: '',
  size: '',
  specialInstructions: '',
  sauce: '',
}
const initialOrders = []
const initialDisabled = true


export default function App() {
  //////////////// STATES ////////////////

  const [orders, setOrders] = useState(initialOrders)          
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean


  const getOrders = () => {
  
    axios.get(`https://reqres.in/api/orders`)
      .then(res => {
        setOrders([res.data, ...orders]);
      }).catch(err => {
        console.error(err);
      })
  }

  const postNewOrder = newOrder => {
  
    axios.post(`https://reqres.in/api/orders`, newOrder)
      .then(res => {
        setOrders([res.data, ...orders]);
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {

    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      specialInstructions: formValues.specialInstructions.trim(),
      toppings: ['pinapple', 'anchovies', 'broccoli', 'artichokes', 'eggplant'].filter(hobby => !!formValues[hobby])
    }

    console.log(newOrder);
    postNewOrder(newOrder);

  }

  useEffect(() => {
    getOrders()
  }, [])

  useEffect(() => {

    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>Lambda's Pizza School</h1></header>

      <OrderForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <h2>List of orders</h2>
      {
        users.map(order => {
          return (
            <Order key={order.id} details={order} />
          )
        })
      }
    </div>
  )

}
