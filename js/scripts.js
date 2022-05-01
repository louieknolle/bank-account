// Business Logic for Bank Account
function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = parseInt(initialDeposit);
  this.updateBalance();
}

BankAccount.prototype.depositFunds = function(depositAmount) {
  this.balance += parseInt(depositAmount);
  this.updateBalance();
};

BankAccount.prototype.withdrawFunds = function(withdrawalAmount) {
  this.balance -= parseInt(withdrawalAmount);
  this.updateBalance();
};

BankAccount.prototype.updateBalance = function() {
  $("#currentBalance").html("$" + this.balance.toLocaleString());
}
// UI Logic

$(document).ready(function() {
  let bankAccount1 = {};

  $("form#newAccount").submit(function(event) {
    event.preventDefault();
    const userName = $("#newName").val();
    const initialDeposit = $("#initialDeposit").val();
  
    bankAccount1 = new BankAccount(userName, initialDeposit);
  });
  
  $("form#fundsDeposit").submit(function(event) {
    event.preventDefault();
    const newDeposit= $("#newDeposit").val();
    
    bankAccount1.depositFunds(newDeposit);
  });

  $("form#fundsWithdrawal").submit(function(event) {
    event.preventDefault();
    const newWithdrawal = $("#newWithdrawal").val();

    bankAccount1.withdrawFunds(newWithdrawal);
    
  });
});

