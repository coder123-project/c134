var date = new Date()
let display_date= "Date:" + date.toLocaleDateString()

//Load HTML DOM suign JQUERY



let predicted_emotion;
//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

$(function () {
    $("#predict_button").click(function () {

        let input_data = {
          // store user entered text value


        }
        console.log(input_data)

        $.ajax({
       //ajax syntax
       
       
       
       
       
       
            {
                
                // Result Received From Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                
                // Display Result Using JavaScript----->HTML
                $("#prediction").html(predicted_emotion)
                $('#prediction').css("display", "block");

                $("#emo_img_url").attr('src', emo_url);
                $('#emo_img_url').css("display", "block");
            },
            //error message 
        });
    });
})
