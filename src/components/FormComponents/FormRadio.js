import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
  {
    name: 'Solo Sport',
    ram: '1 player',
    cpus: 'game',
    disk: '24 Locations',
  },
  {
    name: 'Duo Sport',
    ram: '2 - 4 players',
    cpus: 'game',
    disk: '412 Locations',
  },
  {
    name: 'Team Sport',
    ram: '4-32 players',
    cpus: 'game',
    disk: '72 Locations',
  },
]

export default function FormRadio() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <div className="w-full py-4">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label>Match size</RadioGroup.Label>
          <div className="space-y-2 mt-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-offset-2 ring-offset-blue-300 ring-white ring-opacity-30 transition-50'
                      : 'transition-150'
                  }
                  ${
                    checked ? 'bg-blue-500 text-gray-100' : 'bg-white'
                  }
                    relative transition rounded-sm shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              {plan.ram}/{plan.cpus}
                            </span>{' '}
                            <span aria-hidden="true">&middot;</span>{' '}
                            <span>{plan.disk}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
