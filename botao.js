
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+=";

    const lengthEl = document.getElementById("length");
    const uppercaseEl = document.getElementById("uppercase");
    const numbersEl = document.getElementById("numbers");
    const symbolsEl = document.getElementById("symbols");
    const generateEl = document.getElementById("generate");
    const passwordEl = document.getElementById("password");

    generateEl.addEventListener("click", () => {
      const length = +lengthEl.value;
      const uppercase = uppercaseEl.checked;
      const numbers = numbersEl.checked;
      const symbols = symbolsEl.checked;

      let chars = lowercaseChars;
      if (uppercase) chars += uppercaseChars;
      if (numbers) chars += numberChars;
      if (symbols) chars += symbolChars;


      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }

      passwordEl.textContent = password;

      passwordEl.setAttribute("maxlength", "35"); // Adiciona um limite máximo de 20 caracteres
    if (length <= 0 || length > 35) {
      passwordEl.textContent = "O comprimento da senha deve ser entre 0 e 35 caractéres!";
    } else ""
    });