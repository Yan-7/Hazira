if (goalState.team) {
  document.getElementById("teamInput").value = goalState.team;
}
if (goalState.challenge) {
  document.getElementById("challengeInput").value = goalState.challenge;
}
function saveTeam() {
    goalState.team = document.getElementById('teamInput').value;
    saveData(); // Save the entire state including the team
}

function saveChallenge() {
    goalState.challenge = document.getElementById('challengeInput').value;
    saveData(); // Save the entire state including the challenge
}