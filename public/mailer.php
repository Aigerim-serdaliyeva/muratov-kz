<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

require __DIR__.'/mailer/PHPMailerAutoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 2;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'info@ladyssecrets.kz';                     // SMTP username
    $mail->Password   = 'Ko87Zh85!';                               // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465;      
    $mail->CharSet 	= 'utf-8';                              // TCP port to connect to

    //Recipients
    $mail->setFrom('info@ladyssecrets.kz', 'Newestate');
    $mail->addAddress('sanch941@gmail.com', 'Main');           
    $_POST = json_decode(file_get_contents('php://input'), true);   
    $input_name = $_POST["companyName"];

    // Content
    $mail->isHTML(true);        
    $mail->Subject = "Заказали звонок";                          // Set email format to HTML    
    $mail->Body	= "<p>Имя клиента - $input_name</p>   ";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}