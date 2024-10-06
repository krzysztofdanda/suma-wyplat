$(document).ready(function() {
    
    $('#count-sum').click(function() {
        var totalSalary = 0; 

        
        $('.salary').each(function() {
           
            totalSalary += parseFloat($(this).text());
        });

        
        $('#sum').text(totalSalary);
    });
});