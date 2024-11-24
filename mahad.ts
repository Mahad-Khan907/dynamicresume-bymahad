window.addEventListener("DOMContentLoaded", () => {
    const myform = document.getElementById("resumeForm") as HTMLFormElement;
    const getmyresume = document.getElementById("getresume") as HTMLElement;

    myform.addEventListener("submit", (event) => {
        event.preventDefault();

        const mypic = document.getElementById("profile") as HTMLInputElement;
        const profilePicture = mypic.files ? mypic.files[0] : null;
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

        let resumeHTML = "";

        if (profilePicture) {
            const imageUrl = URL.createObjectURL(profilePicture);
            resumeHTML += `
                <div style="display: flex; background-color: yellow;   border: 2px solid navy; width: 80%; margin: auto; margin-bottom: 20px; align-items: center;">
                    <div style="flex: 1; text-align: center;">
                        <img src="${imageUrl}" alt="Profile pic" style="width:150px; height:150px;
                         border-radius:50%; border:2px solid #ddd;">
                    </div>
                    <div style="flex: 1; padding-left: 20px;">
                        <h2>${name}</h2>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                    </div>
                </div>`;
        }

        // Resume Information Section (Skills, Education, Experience)
        resumeHTML += `
            <div style="display: flex; justify-content: space-between; padding: 20px;
             background-color: skyblue; border-radius: 8px;
              border: 2px solid navy; width: 80%; margin: auto;">
                <div style="flex: 1; padding-right: 20px;">
                    <h3>Skills:</h3>
                    <p>${skills}</p>
                    <h3>Education:</h3>
                    <p>${education}</p>
                    <h3>Experience:</h3>
                    <p>${experience}</p>
                </div>
            </div>
        `;

        // Inject the generated resume into the DOM
        getmyresume.innerHTML = resumeHTML;
    });
});