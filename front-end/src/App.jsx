import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="invoice-container  p-6 shadow-md bg-white">
      <div className="header">
        <div className="company-name">Enaton</div>
        <div className="invoice-info">
          Invoice #: 12345<br />
          Date: 01/01/2023<br />
          Due Date: 01/15/2023
        </div>
      </div>

      <h3 className="text-lg font-bold mb-4">Issued To:</h3>
      <p>John Doe<br />
        123 Main Street<br />
        Anytown, USA 12345</p>

      <table className="invoice-table mt-8">
        <thead>
          <tr>
            <th className="p-2 font-bold">Description</th>
            <th className="p-2 font-bold text-right">Quantity</th>
            <th className="p-2 font-bold text-right">Unit Price</th>
            <th className="p-2 font-bold text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Product 1</td>
            <td className="p-2 text-right">2</td>
            <td className="p-2 text-right">$10.00</td>
            <td className="p-2 text-right">$20.00</td>
          </tr>
          <tr>
            <td className="p-2">Product 2</td>
            <td className="p-2 text-right">1</td>
            <td className="p-2 text-right">$50.00</td>
            <td className="p-2 text-right">$50.00</td>
          </tr>
        </tbody>
      </table>

      <div className="total mt-8">
        <div className="w-1/2 text-right font-bold">Subtotal:</div>
        <div className="w-1/2 text-right">$70.00</div>

        <div className="w-1/2 text-right font-bold mt-2">Tax (10%):</div>
        <div className="w-1/2 text-right mt-2">$7.00</div>

        <div className="w-1/2 text-right font-bold mt-2">Total:</div>
        <div className="w-1/2 text-right mt-2">$77.00</div>
      </div>
    </div>

  )
}

export default App
