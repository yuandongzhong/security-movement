
function Table({movements, deleteData, update}) {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AUD',
  });

  return (
    <>
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">ID</th>
            <th className="w-16 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Security movement type </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Buyer</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Seller</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">No. of units</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price per unit</th>
            <th className="title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            movements.map(movement => (
              <tr key={ movement.id }>
                <td className="px-4 py-3">{ movement.id }</td>
                <td className="px-4 py-3">{ movement.security_movement_type }</td>
                <td className="px-4 py-3">{ movement.buyer }</td>
                <td className="px-4 py-3">{ movement.seller }</td>
                <td className="px-4 py-3">{ movement.no_of_units }</td>
                <td className="px-4 py-3">{ formatter.format(movement.price_per_unit) }</td>
                <td className="px-4 py-3"> 
                  <div className="cursor-pointer hover:underline"
                      onClick={() => update(movement.id)}>edit</div>
                  <div className="cursor-pointer hover:underline"
                      onClick={() => deleteData(movement.id)}>delete</div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;
