let $submit = $('#submit')

$submit.on('click', function() {
    event.preventDefault();
    //Create item to add to list from form input
    let $title = $('#movieTitle').val();
    let $rating = $('#movieRating').val();
    let $newItem = $("<li id='listItem'>" + $title + "  " + $rating + "/10</li>")

    let $removeButton = $('<button id="removeItem">Remove</button>');

    // make sure remove button works
    $removeButton.on('click', function(){
            $(this).parent().remove();
    })

    // if rating is not a number between 0 and 10:
    //if title has less than 2 characters, alert Asking for full input
    if($title === "" || $title.length < 2){
        alert("Please provide a full movie title")
    }
    if($rating < 0 || $rating > 10 || $rating === ""){
        alert("Please use a number between 0 and 10")
    }
    //Otherwise, add it to the list!
    else {
        $('#movies').append($newItem.append($removeButton))
        this.form.reset();
        $("#movies").sort();
    }
});

