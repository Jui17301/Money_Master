
document.getElementById('btn-calculate').addEventListener('click',function(){
  const incomeField = document.getElementById('income-field');
  const incomeFieldText =incomeField.value ;
  const income = parseFloat(incomeFieldText);

  const foodField = document.getElementById('food-field');
  const foodFieldText =foodField.value ;
  const food = parseFloat(foodFieldText);

  const rentField = document.getElementById('rent-field');
  const rentFieldText =rentField.value ;
  const rent = parseFloat(rentFieldText);

  const clotheField = document.getElementById('clothes-field');
  const clotheFieldText =clotheField.value;
  const clothe = parseFloat(clotheFieldText);

  const expensesField = document.getElementById('total-expenses');
  const totalExpenses = food+rent+clothe;
  expensesField.innerText = totalExpenses;


  const balanceField = document.getElementById('balance-field');
  const balance = income - totalExpenses;
  balanceField.innerText = balance;

  if(isNaN(foodFieldText) || isNaN(rentFieldText) || isNaN(clotheFieldText)){
    alert ('Insert Number Please')
  }
  document.getElementById('btn-save').addEventListener('click',function(){
    const savingsField = document.getElementById('savings-field');
    const savingsValueText = savingsField.value ;
    const savings = parseFloat(savingsValueText);

    const save = totalExpenses*(savings/100);

    const savingAmount =save ;
    const savingAmountField  = document.getElementById('saving-amount');
    savingAmountField.innerText = savingAmount; 

    const remainingAmountField = document.getElementById('remaining-amount');
    const remainAmount = totalExpenses - save;
    remainingAmountField.innerText = remainAmount;
  })
})