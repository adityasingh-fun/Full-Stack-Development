function collectData() {
  const languageProficiencyElements =
    document.getElementsByName("languageProfiency");
  console.log(languageProficiencyElements);

  // Loop through the nodelist to find out the selected radio button
  for (let i = 0; i < languageProficiencyElements; i++) {
    if (languageProficiencyElements[i].checked) {
      console.log(
        `Selected language is: ${languageProficiencyElements[i].value}`
      );
    }
  }
  //log all elements with the name 'email'
  const emailsEl = document.getElementsByName("email");
  console.log(emailsEl);
}

