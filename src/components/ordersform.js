import React from 'react'

export default function OrdersForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Pizza</h2>

        <button disabled={disabled}>submit</button>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
          <div>{errors.specialInstructions}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        <label>Name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>Special Instructions
          <input
            value={values.specialInstructions}
            onChange={onChange}
            name='specialInstructions'
            type='text'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        <label>Size
          <select
            onChange={onChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select a Size -</option>
            <option value='S'>Small</option>
            <option value='M'>Medium</option>
            <option value='L'>Large</option>
            <option value='XL'>Extra Large</option>
          </select>
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Tomato Sauce
          <input
            type="radio"
            name="sauce"
            value="Tomato"
            onChange={onChange}
            checked={values.sauce === "Tomato"}
          />
        </label>

        <label>BBQ
          <input
            type="radio"
            name="sauce"
            value="BBQ"
            onChange={onChange}
            checked={values.sauce === "BBQ"}
          />
        </label>

        <label>Garlic Ranch
          <input
            type="radio"
            name="sauce"
            value="GR"
            onChange={onChange}
            checked={values.sauce === "GR"}
          />
        </label>

        <label>Spinach Alfredo
          <input
            type="radio"
            name="sauce"
            value="SA"
            onChange={onChange}
            checked={values.sauce === "SA"}
          />
        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Toppings</h4>

        {/* ////////// CHECKBOXES ////////// */}
        <label>pinapple
          <input
            type="checkbox"
            name="pinapple"
            onChange={onChange}
            checked={values.pinapple}
          />
        </label>

        <label>anchovies
          <input
            type="checkbox"
            name="anchovies"
            onChange={onChange}
            checked={values.anchovies}
          />
        </label>

        <label>broccoli
          <input
            type="checkbox"
            name="broccoli"
            onChange={onChange}
            checked={values.broccoli}
          />
        </label>

        <label>artichokes
          <input
            type="checkbox"
            name="artichokes"
            onChange={onChange}
            checked={values.artichokes}
          />
        </label>

        <label>eggplant
          <input
            type="checkbox"
            name="eggplant"
            onChange={onChange}
            checked={values.eggplant}
          />
        </label>
      </div>
    </form>
  )
}