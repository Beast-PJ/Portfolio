<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up email parameters
    $to = 'your-email@gmail.com'; // Your Gmail address
    $subject = 'New Message from Contact Form';
    $message_body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

    // Headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $message_body, $headers)) {
        http_response_code(200);
        echo json_encode(array('message' => 'Message sent successfully!'));
    } else {
        http_response_code(500);
        echo json_encode(array('message' => 'Failed to send message.'));
    }
} else {
    http_response_code(403);
    echo json_encode(array('message' => 'Method not allowed.'));
}
?>
