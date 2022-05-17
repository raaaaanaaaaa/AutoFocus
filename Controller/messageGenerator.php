<?php
// here message type defines types of message (success - error)
function generateAlertMessages($messageText, $messageType){
    $message;
    if($messageType == "success")
      $message = generateSuccessMessage($messageText);
    else
      $message = generateErrorMessage($messageText);
    return $message;
}

function generateSuccessMessage($messageText){
  $message = '<div class="alert-success">
                <span>' . $messageText . '</span>
              </div>';
  return $message;
}

function generateErrorMessage($messageText){
  $message = '<div class="alert-error">
                <span>' . $messageText . '</span>
              </div>';
  return $message;
}
?>