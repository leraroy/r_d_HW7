/*У Postman надішліть запит GET lists. Отриманий body збережіть 
у файл з назвою list.json і додайте його до вашого проєкту.

Ваше завдання — зчитати файл spaces.json, знайти всі об'єкти 
lists і вивести на екран їхні ID та name.
*/

import {readFileSync} from 'fs'

var body = readFileSync('api/lists.json', 'utf8')
const data = JSON.parse(body)

data.lists.forEach(element => {
    console.log(`\nName: ${element.name}\nID: ${element.id}`)
});






