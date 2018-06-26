/**
 * Created by Benjamin on 2016-03-02.
 */

$(function() {
    $('.portion').bind('keyup', function(event) {
        var oldPortion = parseFloat($("#previousPortion").val());
        var newPortion = parseFloat($(event.target).val());

        if (oldPortion && newPortion) {
            $('.serving').each(function(index, elem) {
                var ingredientNow = $('.amount', elem);
                var oldAmount = parseFloat(ingredientNow.text());
                var newAmount = oldAmount * newPortion / oldPortion;
                ingredientNow.text(newAmount);
            });
            $('#previousPortion').val(newPortion);
        }
    });
});


var input = document.getElementsByTagName("input");
var inputCount = input.length;
for (var i = 0; i < input.length; i++) {
    input[i].onclick = function(e) {
        alert(this.id);
    };
}

