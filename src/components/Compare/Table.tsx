import React from 'react'
import { Check, CreditCard, Wallet, Wifi, Smartphone } from "lucide-react"
export default function Table() {
  return (
    <div className='max-w-[1400px] mx-auto px-4'>
     <p>Credit Card</p>
     <div className="hidden md:block border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className="p-4 text-left font-medium text-gray-500 w-1/3"></th>
                  <th className="p-4 text-center font-medium text-gray-500">Basic</th>
                  <th className="p-4 text-center font-medium text-gray-500">Standard</th>
                  <th className="p-4 text-center font-medium text-gray-500">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-50 p-2 rounded-md">
                        <CreditCard className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="font-medium">Physical Card</p>
                        <p className="text-sm text-gray-500">Does it in and outside esteemed</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center">Optional</td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-50 p-2 rounded-md">
                        <Wallet className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="font-medium">Virtual Card</p>
                        <p className="text-sm text-gray-500">Does it in and outside esteemed</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">Up to 2</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-50 p-2 rounded-md">
                        <Wifi className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="font-medium">Contactless Payments</p>
                        <p className="text-sm text-gray-500">Does it in and outside esteemed</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-50 p-2 rounded-md">
                        <Smartphone className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="font-medium">Mobile Payments</p>
                        <p className="text-sm text-gray-500">Does it in and outside esteemed</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
          
    </div>
  )
}
