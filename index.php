<html>
    <head>
        <!-- Latest compiled and minified CSS -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
        <!-- Add the slick-theme.css if you want default styling -->
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <link rel="stylesheet" href="dist/styles.css" >
    </head>

    <body>

    <?php $url =  "//{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}"; ?>

    <?php include('./dist/header/comp-header.php'); ?>

    <?php include('./dist/templates.php'); ?>

    <div id="content"></div>

    <?php include('./dist/footer/comp-footer.php'); ?>

    </body>

    <script src="dist/vendor.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <script src="dist/pwd.min.js"></script>

    <!--<script src="js/globals/globals.js"></script>-->
    <!--<script src="dist/all.js"></script>-->
    <!--<script src="components/app.js"></script>-->

    <script>
        window.onload = function() {
            app.init();
        }
    </script>
</html>

