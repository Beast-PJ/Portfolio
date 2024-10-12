<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path_to_phpmailer/PHPMailer/src/Exception.php';
require 'path_to_phpmailer/PHPMailer/src/PHPMailer.php';
require 'path_to_phpmailer/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Use Gmail's SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@gmail.com'; // Your Gmail address
        $mail->Password = 'your-password'; // Your Gmail password or App-specific password
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('your-email@gmail.com'); // Send to your Gmail

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "Name: $name<br>Email: $email<br>Message: $message";

        $mail->send();
        echo 'Message has been sent successfully';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
