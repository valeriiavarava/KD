var printButton = document.getElementById('print');
var divToPrint = document.getElementById('rider-body');

printButton.addEventListener('click', function () {
    newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
});
