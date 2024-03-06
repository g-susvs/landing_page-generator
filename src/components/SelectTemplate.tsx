'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

export const SelectTemplate = () => {

    const router = useRouter()

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
  
      if (data.msg === 'success set system prompt') {
          router.push('/create')
        } else {
        console.log(data.msg)
      }
  
    }
  
  return (
    <div className="flex gap-2">
        <div
          className="cardTemplate"
          onClick={() => onSetTemplate('0')}
        >
          <Image
            src="/templates/template.png"
            width={300}
            height={200}
            alt="template 1"
            className="cardTemplate__img"
          />
        </div>
        <div
          className="cardTemplate"
          onClick={() => onSetTemplate('1')}
        >
          <Image
            src="/templates/template1.jpg"
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
  )
}
