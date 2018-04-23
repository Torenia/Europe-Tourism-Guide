$(".carousel").carousel({
    interval: 3000
});


$(document).ready(function () {
    $.getJSON("resources/countries.json", function (countries) {
        var country = countries[countryName];
        $('#currency').html(country.Currency);
        $('#population').html(country.Population);
        $('#timeZone').html(country.TimeZone);
        $('#area').html(country.Area);
        $('#capital').html(country.Capital);
        $('#language').html(country.OfficialLanguage);
        $('#code').html(country.CapitalCallingCode);
    });
});
