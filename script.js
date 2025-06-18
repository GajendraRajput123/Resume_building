document.getElementById('resumeForm').addEventListener('input', updatePreview);

let eduCount = 0;
let expCount = 0;

function addEducation() {
  eduCount++;
  const eduDiv = document.createElement('div');
  eduDiv.innerHTML = `
    <input type="text" placeholder="Degree" id="eduDegree${eduCount}" oninput="updatePreview()">
    <input type="text" placeholder="Institution" id="eduInst${eduCount}" oninput="updatePreview()">
    <input type="text" placeholder="Year" id="eduYear${eduCount}" oninput="updatePreview()">
  `;
  document.getElementById('educationSection').appendChild(eduDiv);
}

function addExperience() {
  expCount++;
  const expDiv = document.createElement('div');
  expDiv.innerHTML = `
    <input type="text" placeholder="Job Title" id="expTitle${expCount}" oninput="updatePreview()">
    <input type="text" placeholder="Company" id="expCompany${expCount}" oninput="updatePreview()">
    <input type="text" placeholder="Years" id="expYears${expCount}" oninput="updatePreview()">
  `;
  document.getElementById('experienceSection').appendChild(expDiv);
}

function updatePreview() {
  document.getElementById('previewName').textContent = document.getElementById('name').value;
  document.getElementById('previewEmail').textContent = document.getElementById('email').value;
  document.getElementById('previewPhone').textContent = document.getElementById('phone').value;
  document.getElementById('previewSummary').textContent = document.getElementById('summary').value;

  let eduHTML = "<h3>Education</h3>";
  for (let i = 1; i <= eduCount; i++) {
    const degree = document.getElementById(`eduDegree${i}`)?.value || '';
    const inst = document.getElementById(`eduInst${i}`)?.value || '';
    const year = document.getElementById(`eduYear${i}`)?.value || '';
    if (degree || inst || year) {
      eduHTML += `<p>${degree} - ${inst} (${year})</p>`;
    }
  }
  document.getElementById('previewEducation').innerHTML = eduHTML;

  let skills = [];
  document.querySelectorAll('.skills input[type=checkbox]').forEach(cb => {
    if (cb.checked) skills.push(cb.value);
  });
  document.getElementById('previewSkills').innerHTML = `<h3>Skills</h3><p>${skills.join(', ')}</p>`;

  let expHTML = "<h3>Experience</h3>";
  for (let i = 1; i <= expCount; i++) {
    const title = document.getElementById(`expTitle${i}`)?.value || '';
    const company = document.getElementById(`expCompany${i}`)?.value || '';
    const years = document.getElementById(`expYears${i}`)?.value || '';
    if (title || company || years) {
      expHTML += `<p>${title} at ${company} (${years})</p>`;
    }
  }
  document.getElementById('previewExperience').innerHTML = expHTML;
}

function clearForm() {
  document.getElementById('resumePreview').innerHTML = '';
  document.getElementById('educationSection').innerHTML = '';
  document.getElementById('experienceSection').innerHTML = '';
  eduCount = 0;
  expCount = 0;
}
