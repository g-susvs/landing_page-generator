'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {

  const [changePage, setChangePage] = useState(false)

  const onSetTemplate = async (option: string) => {

    const resp = await fetch('http://localhost:3001/gen/system', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        template: option
      })
    })

    if (!resp.ok) {
      console.log('error - set template')
      return
    }

    const data = await resp.json()

    if (data.msg === 'system prompt already exists') {
      console.log(option)
      setChangePage(true)
    } else {
      console.log(data.msg)
    }

  }

  useEffect(() => {
    if (changePage) {
      location.href = '/create'
    }
  }, [changePage])


  return (
    <div className="p-4">
      <h4 className="text-3xl">Plantillas</h4>
      <br />
      <br />
      <div className="flex gap-2">
        <div
          className="cardTemplate"
          onClick={() => onSetTemplate('1')}
        >
          <Image
            src="/templates/template1.png"
            width={300}
            height={200}
            alt="template 1"
            className="cardTemplate__img"
          />
        </div>
        <div
          className="cardTemplate"
          onClick={() => onSetTemplate('2')}
        >
          <Image
            src="/templates/template2.png"
            width={300}
            height={200}
            alt="template 2"
            className="cardTemplate__img"
          />
        </div>
      </div>
    </div>
  );
}
