'use server'
import { JSDOM } from "jsdom"

export const updateSectionContent = (html: string, oldText: string, currentText: string)=> {
  
    const dom = new JSDOM(html)
    const $document = dom.window.document

    const $heroSection = $document.getElementById('hero')

    const $editedElement = $heroSection?.querySelector('h1')

    $editedElement!.innerHTML = currentText

    console.log('Actulizando data en la web')
    console.log($editedElement?.textContent)

    return dom.serialize()
}
