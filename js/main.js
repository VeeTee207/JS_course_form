"use strict";

let startBtn = document.getElementById ("start"),

budgetValue = document.getElementsByClassName("budget-value")[0],
dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
levelValue = document.getElementsByClassName("level-value")[0],
expensesValue = document.getElementsByClassName("expenses-value")[0],
optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
incomeValue = document.getElementsByClassName("income-value")[0],
monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],

expensesItems = document.getElementsByClassName("expenses-item"),

expensesItemBtn = document.getElementsByTagName("button")[0],
optionalExpensesBtn = document.getElementsByTagName("button")[1],
countBtn = document.getElementsByTagName("button")[2],

optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

incomeItems = document.querySelector(".choose-income"),
savings = document.querySelector("#savings"),
savingsAmmount = document.querySelector(".choose-sum"),
savingsPercent = document.querySelector(".choose-percent"),
year = document.querySelector(".year-value"),
month = document.querySelector(".month-value"),
day = document.querySelector(".day-value");

