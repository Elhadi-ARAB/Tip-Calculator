const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')


let numberOfPeople = Number(numberOfPeopleDiv.innerText)
const calculateBill = () => {

  const bill = Number(billInput.value)

  const tipPerc = Number(tipInput.value) / 100

  const tipAmount = tipPerc * bill

  const total = tipAmount + bill
  const perPersonTotal = total / numberOfPeople
  console.log({ perPersonTotal })
  perPersonTotalDiv.innerText = `€${perPersonTotal.toFixed(2)}`
}


const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    console.log({ numberOfPeople })
  
    calculateBill()
  
}



const decreasePeople = () => {

    if (numberOfPeople <= 1) {
      throw 'You Cannot have less than one !'
      
    }
  
    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople
  
  calculateBill ()
}  