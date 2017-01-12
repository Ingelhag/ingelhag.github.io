$( document ).ready(function() {

    var result = [];
 
    $('#add').on("click", function() {
        var name = $('#name');
        var company = $('#company');
        var time = $('#time');
        var place = 1;

        var person = {
            'name' : name.val(),
            'company' : company.val(),
            'time' : time.val()
        }

        result.push(person);
        result.sort(function(a, b){
            return a.time - b.time;
        });

        
        paint();

        name.val('');
        company.val('');
        time.val('');

    });

    function findPlace(time) {
        for(var i = 0; i < result.length; i++) {
            if(time === result[i]) return (i+1);
        }
        return result.length;
    }

    function addPerson(name, company, time, place) {
        var tr = $('<tr/>');
        $('<th scope="row"/>').text(place).appendTo(tr);
        $('<td>').text(name).appendTo(tr);
        $('<td>').text(company).appendTo(tr);
        $('<td>').text(time).appendTo(tr);
        $('tbody').append(tr);
    }

    function paint() {
        $('tbody').empty();

        result.forEach(function(person, index) {
            addPerson(person.name, person.company, person.time, (index+1));
        }); 

    }
 
});