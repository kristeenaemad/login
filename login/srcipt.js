document.addEventListener("DOMContentLoaded", function () {
   
    const form = document.querySelector("form");
    const userNameInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // 

       
        const userName = userNameInput.value.trim();
        const password = passwordInput.value.trim();

      
        if (userName === "admin" && password === "12345") {
            alert("تم تسجيل الدخول بنجاح!");
           
            window.location.href = "dashboard.html";
        } else {
            alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
        }
    });
});