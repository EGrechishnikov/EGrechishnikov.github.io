function popupInit(){var e=JSON.parse(localStorage.getItem("popupShowingDate"));null!==e&&new Date(e).getDate()===(new Date).getDate()||(localStorage.setItem("popupShowingDate",JSON.stringify(new Date)),$("#popup").modal())}window.onload=popupInit;