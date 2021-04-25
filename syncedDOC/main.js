<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

    <title>React App</title>
    <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

    <h1>Googel Docs</h1>

    <form name="submit-to-google-sheet">
      <input name="email" type="email" placeholder="Email" value="alasj@asd">
      <button type="submit">Send</button>
    </form>

    <div class="container" id="maion">
      <textarea rows="11" id="articleContent" name="content" class="form-control"> 
        
      </textarea>
      
      <script type="text/javascript">

        const scriptURL = "your--app---script---url";
        

        CKEDITOR.replace( 'articleContent' );
        var intervalId=setInterval(function(){
          try {
            console.log(window.innerHeight)
            document.getElementById("cke_1_contents").style.height=window.innerHeight+"px";
            var form=new FormData();
            form.append("data","get data");

            $.ajax({
              url: scriptURL,
              type: 'post',
              data: form, 
              contentType: false,
              processData: false,
              success: function(response){
                console.log(response);
                CKEDITOR.instances.articleContent.setData(response["row"]);
              }

            });
            clearInterval(intervalId);
          } catch (error) {
            console.log(error);
          }
        },100);
       
        
       setInterval(function(){
        var editorContent=CKEDITOR.instances.articleContent.getData();
        var form=new FormData();
        form.append("data",editorContent);
        $.ajax({
              url: scriptURL,
              type: 'post',
              data: form, 
              contentType: false,
              processData: false,
              success: function(response){
                console.log(response);
              }

            });  
      },1000);

        console.log(CKEDITOR.instances);
        console.log(CKEDITOR.instances.articleContent.getData());


      </script>
     
    </div>
 



    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->

    
  </body>
</html>
