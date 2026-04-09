let employeeId = "EMP@2007";

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let employee = document.getElementById("employee").value;
    let company = document.getElementById("company").value;
    let role = document.getElementById("role").value;
    let salary = document.getElementById("salary").value;
    let hours = document.getElementById("hours").value;
    let notice = document.getElementById("notice").value;

    // =========================
    // CONTRACT OUTPUT
    // =========================
    document.getElementById("output").innerText =
        `EMPLOYMENT CONTRACT

Employee: ${employee}
Company: ${company}
Role: ${role}
Salary: ${salary}
Working Hours: ${hours}
Notice Period: ${notice}

Status: Pending Verification`;

    document.getElementById("resultMessage").innerText =
        "Contract Generated ✔️ Please verify employee & accept terms";

    document.getElementById("verifyBox").style.display = "block";

    // =========================
    // CONTRACT-BASED RISKS
    // =========================
    let risks = [];
    let suggestions = [];
    let score = 100;

    // -------------------------
    // EMPLOYEE SIDE RISKS
    // -------------------------
    risks.push("If employee fails to follow company policies, disciplinary action may be taken.");
    risks.push("Unauthorized absence or repeated late attendance may lead to salary deduction or termination.");
    risks.push("Sharing confidential company data may result in legal action.");

    // -------------------------
    // COMPANY SIDE RISKS
    // -------------------------
    risks.push("If company delays salary payments, employee may raise legal complaint.");
    risks.push("If working conditions violate labor laws, company may face penalties.");
    risks.push("If termination is done without notice period, compensation may be required.");

    // -------------------------
    // CONTRACT BREACH RISKS
    // -------------------------
    risks.push("Breaking notice period rules may require compensation from either party.");
    risks.push("Violation of agreed working hours may lead to contract revision or termination.");
    risks.push("Any fraud or misrepresentation can void the contract legally.");

    // =========================
    // SUGGESTIONS (IMPROVEMENTS)
    // =========================
    suggestions.push("Maintain clear communication between employee and employer.");
    suggestions.push("Follow labor law regulations for working hours and salary.");
    suggestions.push("Include confidentiality agreement (NDA) for protection.");
    suggestions.push("Add grievance system for dispute resolution.");
    suggestions.push("Define clear termination conditions in contract.");

    // =========================
    // RISK SCORE (CONTRACT QUALITY)
    // =========================
    score -= 5; // base complexity score

    if (salary < 20000) score -= 5;
    if (!hours.includes("8")) score -= 5;
    if (!notice.includes("30")) score -= 5;

    // =========================
    // DISPLAY RISKS
    // =========================
    document.getElementById("risks").innerHTML =
        risks.map(r => `<li>${r}</li>`).join("");

    document.getElementById("suggestions").innerHTML =
        suggestions.map(s => `<li>${s}</li>`).join("");

    document.getElementById("score").innerText =
        "Contract Risk Score: " + score + "/100";
});

// =========================
// VERIFICATION
// =========================
function verifyEmployee() {
    let input = document.getElementById("verifyInput").value;
    let agree = document.getElementById("agree").checked;
    let msg = document.getElementById("verifyMessage");

    if (!agree) {
        msg.style.color = "red";
        msg.innerText = "You must accept the contract first ❌";
        return;
    }

    if (input === employeeId) {
        msg.style.color = "green";
        msg.innerText = "Employee Verified Successfully ✔️";
        document.getElementById("resultMessage").innerText =
            "Employee Successfully Added to System ✔️";
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid Employee ID ❌";
    }
}