window.addEventListener("DOMContentLoaded", function () {
    var myform = document.getElementById("resumeForm");
    var getmyresume = document.getElementById("getresume");
    myform.addEventListener("submit", function (event) {
        event.preventDefault();
        var mypic = document.getElementById("profile");
        var profilePicture = mypic.files ? mypic.files[0] : null;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var skills = document.getElementById("skills").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var resumeHTML = "";
        if (profilePicture) {
            var imageUrl = URL.createObjectURL(profilePicture);
            resumeHTML += "\n                <div style=\"display: flex; background-color: yellow;   border: 2px solid navy; width: 80%; margin: auto; margin-bottom: 20px; align-items: center;\">\n                    <div style=\"flex: 1; text-align: center;\">\n                        <img src=\"".concat(imageUrl, "\" alt=\"Profile pic\" style=\"width:150px; height:150px;\n                         border-radius:50%; border:2px solid #ddd;\">\n                    </div>\n                    <div style=\"flex: 1; padding-left: 20px;\">\n                        <h2>").concat(name, "</h2>\n                        <p><strong>Email:</strong> ").concat(email, "</p>\n                        <p><strong>Phone:</strong> ").concat(phone, "</p>\n                    </div>\n                </div>");
        }
        // Resume Information Section (Skills, Education, Experience)
        resumeHTML += "\n            <div style=\"display: flex; justify-content: space-between; padding: 20px;\n             background-color: skyblue; border-radius: 8px;\n              border: 2px solid navy; width: 80%; margin: auto;\">\n                <div style=\"flex: 1; padding-right: 20px;\">\n                    <h3>Skills:</h3>\n                    <p>".concat(skills, "</p>\n                    <h3>Education:</h3>\n                    <p>").concat(education, "</p>\n                    <h3>Experience:</h3>\n                    <p>").concat(experience, "</p>\n                </div>\n            </div>\n        ");
        // Inject the generated resume into the DOM
        getmyresume.innerHTML = resumeHTML;
    });
});
