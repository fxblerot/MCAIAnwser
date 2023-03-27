
function IsThereMultipleChoiceOnThePage(){
// Récupération de tous les éléments de la page
var elements = document.getElementsByTagName('*');

// Parcours de tous les éléments
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  // Vérification si l'élément est un élément de formulaire
  if (element.tagName.toLowerCase() == 'select' || element.tagName.toLowerCase() == 'input') {
    // Vérification si l'élément est une liste déroulante ou une case à cocher
    if (element.type.toLowerCase() == 'checkbox' || element.type.toLowerCase() == 'radio' || element.tagName.toLowerCase() == 'select') {
      // Vérification si l'élément a l'attribut "multiple" défini
      if (element.multiple) {
        // L'élément est un choix multiple
        return true;
        break;
      }
    }
  }
}
return true;
} ;

function afficherNotification() {
  chrome.notifications.create('choix_multiples', {
    type: 'basic',
    iconUrl: 'icone.png',
    title: 'Choix multiples détectés',
    message: 'Il y a des choix multiples sur cette page.'
  }, function(notificationId) {
    console.log('Notification affichée avec l\'ID ' + notificationId);
  });
}


// Appelle la fonction principale lorsque la page a fini de charger
chrome.runtime.onInstalled.addListener(function() {
  console.log('Extension installée');
});

chrome.action.onClicked.addListener(async (tab) => {

  chrome.action.setBadgeText({
    text: "OFF",
  });
  
main();

});


// Fonction principale qui est appelée lorsque l'extension est activée
function main() {

//if(IsThereMultipleChoiceOnThePage())
 //   afficherNotification();

}