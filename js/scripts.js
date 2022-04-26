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
  // handling user name and initial deposit form submit
  
  // let bankAccount1 = new BankAccount(name, deposit);


  // bankAccount1.depositFunds(depositAmount);
  // bankAccount1.withdrawFunds(withdrawAmount);


});

