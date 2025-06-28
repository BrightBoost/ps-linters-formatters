function toggleComplete(id){
actions.forEach(function(a){ if(a.id===id) a.completed=!a.completed })
save();renderDashboard()
}