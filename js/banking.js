
// Deposit
const depositBtn = document.getElementById('deposit-button').addEventListener('click', function () {
    const depositTotal = document.getElementById('deposit-total')
    const depositTotalText = depositTotal.innerText;
    const depositTotalNumber = parseFloat(depositTotalText);

    const newDeposit = document.getElementById('deposit-input');
    const newDepositText = newDeposit.value;
    const newDepositNumber = parseFloat(newDepositText);
    depositTotal.innerText = depositTotalNumber + newDepositNumber;
    newDeposit.value = '';



    // debodit-theke-blance-added
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalNumber + newDepositNumber;
});

// withdraw-button-etc 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawText = withdrawTotal.innerText;
    const withdrawNumber = parseFloat(withdrawText);

    const newWithdraw = document.getElementById('withdraw-input');
    const newWithdrawText = newWithdraw.value;
    const newWithdrawNumber = parseFloat(newWithdrawText);

    withdrawTotal.innerText = withdrawNumber + newWithdrawNumber;
    newWithdraw.value = '';


    // blance-total 
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalNumber - newWithdrawNumber;


});