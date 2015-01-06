/**
 * Created by Amanpreet on 12/31/14.
 */

var orderButton;
var daysList = ['mondayList', 'tuesdayList', 'wednesdayList', 'thursdayList', 'fridayList', 'saturdayList', 'sundayList'];
var mealsList = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Dessert'];

$(document).ready(function(){
    orderButton = $(".btn.orderButton");
    orderButton.click(function(){
        orderClicked();
    });
});

function orderClicked(){
    $(".topLevel").show();

}
function customSelect(){
    $("#customOptionBtn").prop("checked", true);
}
function full(){
    var meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
    clearList();
    selectLoop(daysList, meals, true);

}
function seven(){
    var meals = ['Breakfast', 'Lunch', 'Dinner'];
    clearList();
    selectLoop(daysList, meals, true);
}
function five(){
    var meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    clearList();
    selectLoop(days, meals, true);
}
function fiveNoS(){
    var meals = ['Breakfast', 'Lunch', 'Dinner'];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    clearList();
    selectLoop(days, meals, true);
}
function fiveNoB(){
    var meals = ['Lunch', 'Dinner'];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    clearList();
    selectLoop(days, meals, true);
}
function fiveOnlyD(){
    var meals = ['Dinner'];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    clearList();
    selectLoop(days, meals, true);
}
function three(){
    var meals = ['Dinner'];
    var days = ['Monday', 'Wednesday', 'Friday'];
    clearList();
    selectLoop(days, meals, true);
}
function selectLoop(days, meals, state){
    numDays = days.length;
    numMeals = meals.length;
    for (var i = 0; i < numDays; i++){
        for (var j = 0; j < numMeals; j++){
            var selector = "." + days[i] + " ." + meals[j];
            $(selector).prop( "checked", state);
        }
    }
}
function clearList(){
    selectLoop(daysList, mealsList, false);
}
function submitOrders(){
    numDays = daysList.length;
    numMeals = mealsList.length;
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    result = new Array();
    for (var i = 0; i < numDays; i++){
        result[days[i]] = new Array();
        for (var j = 0; j < numMeals; j++){
            if ($('.' + daysList[i] + ' input[class="' + mealsList[j] + ' mealOption"]:checked').length > 0){
                result[days[i]].push('true');
            }
            else{
                result[days[i]].push('false');
            }
        }
    }
    result['numPeople'] = new Array();
    result['numPeople'].push($('input[name=numPeople]:checked').val());
/*
    type: "POST",
       contentType: "application/json",
       dataType: "json",
       url: "/users/profile/update/",
       data: JSON.stringify(result)
       }).done(function( msg ) {
               debug = msg;
               console.log(msg)
               });
*/
}