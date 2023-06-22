document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var componentLength = parseFloat(document.getElementById('component_length').value);
    var componentWeight = parseFloat(document.getElementById('component_weight').value);
    var rodWeight = parseFloat(document.getElementById('rod_weight').value);
    var rodLength = parseFloat(document.getElementById('rod_length').value);
    var endBit = parseFloat(document.getElementById('end_bit').value);

    componentLength += 2;
    var gramWeight = componentWeight * 1000;
    var usableRod = rodLength - endBit;
    var partsProduced = usableRod / componentLength;
    var makeableWeight = gramWeight * partsProduced;
    var makeableKg = makeableWeight / 1000;
    var scrapValue = (rodWeight - makeableKg).toFixed(2);

    // Update UI with results
    var results = document.getElementById('results');
    results.innerHTML = "Scrap Value: " + scrapValue;

    // You can send the data to the server if needed
    // using AJAX or fetch() to save the results
});
