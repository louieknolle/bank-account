// Business Logic for Bank Account
function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}

BankAccount.prototype.depositFunds = function(depositAmount) {
  // deposit.id = this.assignId();
  // this.name[NewAccount.id] = name; 
  this.balance += depositAmount;
};

BankAccount.prototype.withdrawFunds = function(withdrawalAmount) {
  this.balance -= withdrawalAmount;
};


// Business Logic for Name
// function NewAccount(name, initialDeposit) {
//   this.name = name;
//   this.initialDeposit = initialDeposit; 
// }

// BankAccount.prototype.registration = function(newAccount) {
  
//   return this.name + this.initialDeposit; 
// }; 





// UI Logic

$(document).ready(function() {
  let bankAccount1 = {};

  $("form#newAccount").submit(function(event) {
    event.preventDefault();
    const userName = $("#newName").val();
    const initialDeposit = $("#initialDeposit").val();

    bankAccount1 = new BankAccount(userName, initialDeposit);
  });
  
  $("form#depositWithdrawal").submit(function(event) {
    event.preventDefault();
    const newDeposit= $("#newDeposit").val();
    // const newWithdrawal = $("#newWithdrawal").val();

    bankAccount1.depositFunds(newDeposit);
    // bankAccount1.withdrawFunds(newWithdrawal);

    console.log(bankAccount1.balance);
  });

  

  



});

