import { useForm } from "react-hook-form";

function Form ({submit, movement}) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: movement
  })
  const security_movement_type = watch('security_movement_type')

  const onSubmit = (data) => {
    console.log(data)
    if (security_movement_type === 'redemption') {
      data = {
        ...data,
        buyer: ''
      }
    } 
    
    if (security_movement_type === 'allotment') {
      data = {
        ...data,
        seller: ''
      }
    }

    data = {
      ...data,
      no_of_units: parseInt(data.no_of_units),
      price_per_unit: parseInt(data.price_per_unit)
    }

    submit(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="leading-7 text-sm text-gray-600">Security movement type</label>
      <select {...register("security_movement_type")} 
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <option value="transfer">Transfer</option>
        <option value="redemption">Redemption</option>
        <option value="allotment">Allotment</option>
      </select>

      { security_movement_type !== 'redemption' && 
        <>
          <label className="leading-7 text-sm text-gray-600">Buyer</label>
          <input 
            {...register("buyer", 
              { required: 'This is required', 
                maxLength: { value: 20, message: 'Max length exceeded'},
                pattern: { value: /^[A-Za-z\s]+$/i, message: 'Invalid characters'},
              })}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          <div className="text-red-400 text-sm">{errors.buyer?.message}</div>
        </>
      }

      { security_movement_type !== 'allotment' && 
        <>
          <label className="leading-7 text-sm text-gray-600">Seller</label>
          <input 
            {...register("seller", 
            { required: 'This is required', 
              maxLength: { value: 20, message: 'Max length exceeded'},
              pattern: { value: /^[A-Za-z\s]+$/i, message: 'Invalid characters'},
            })}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          <div className="text-red-400 text-sm">{errors.seller?.message}</div>
        </>
      }       

      <label className="leading-7 text-sm text-gray-600">No. of units</label>
      <input 
        {...register("no_of_units", 
          { required: 'This is required', 
            maxLength: { value: 10, message: 'Max length exceeded'},
            min: { value: 1, message: 'Must be larger than 0'},
            pattern: { value: /^[\d]+$/i, message: 'Invalid characters'},
          })}
        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      <div className="text-red-400 text-sm">{errors.no_of_units?.message}</div>

      <label className="leading-7 text-sm text-gray-600">Price per unit</label>
      <input 
        {...register("price_per_unit", 
        { required: 'This is required', 
          maxLength: { value: 20, message: 'Max length exceeded'},
          min: { value: 1, message: 'Must be larger than 0'},
          pattern: { value: /^[\d]+$/i, message: 'Invalid characters'},
        })}
        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <div className="text-red-400 text-sm">{errors.price_per_unit?.message}</div>

      <input type="submit" 
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-5">
      </input>    
    </form>
  )
}

export default Form
