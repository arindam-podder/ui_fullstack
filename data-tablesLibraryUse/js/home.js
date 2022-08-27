
let arrayOfObjects = [

    { 'no':1 , 'name':'Arindam Podder', 'age':23, 'address':'raiganj,WB' },
    { 'no':2 , 'name':'Arin Pod', 'age':26, 'address':'kon,WB' }

]


$(function(){

    $("#myTable").DataTable( {
        data : arrayOfObjects,
        columns : [
            {data : 'no'},
            {data : 'name'},
            {data : 'age'},
            {data : 'address'}
        ]
    } )


})