<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>chat boot</title>
  <!-- Font Awesome -->
<link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">

  <link rel="stylesheet" href="./ccs/chat.css">
  <link rel="stylesheet" href="./css/inicio.css">
  
</head>
<body>
  <!-- ChatBar -->
<div class="chat-bar-collapsible">
<button id="chat-button" type="button"  class="collapsible"> chat con us!
  <i id="chat-icon" style="color: gray;" class="fa fa-comment-dots"></i> 
</button>

<div class="content">
  <di class="full-chat-block">

    <div class="oter-container">
      <div class="chat-container">
          <div id="chatbox"></div>
              <h5 id="chat-timestamp"></h5>
              <p id="botStarterMessage" class="botText"> <span>Cargando...</span> </p>
              <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span>
            </div>

      <div class="chat-bar-input-block">
    <div id="userInput">
          <input type="text" id="textInput" class="input-box" name="msg"
          placeholder="Tap entrer tyo send messajke">
          <p></p>
    </div>

    <div class="chat-bar-icons">
      <i class="fa fa-fw fa-heart" id="chat-icon" style="color: red;"
      onclick="heartButton()"></i>
      <i class="fa fa-paper-plane" id="chat-icon" style="color: green;" 
      onclick="sendButton()"></i>
      </div>

      </div>

    </div>

  </di>
</div>

</div>



<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<script src="./js/response.js"></script>
<script src="./js/chat.js"></script>
</body>
</html>