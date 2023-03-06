

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
  
  chrome.notifications.create('choix_multiples', {
    type: 'basic',
    iconUrl: 'icone.png',
    title: 'Choix multiples détectés',
    message: 'Il y a des choix multiples sur cette page.'
  }, function(notificationId) {
    console.log('Notification affichée avec l\'ID ' + notificationId);
  });
});


// Fonction principale qui est appelée lorsque l'extension est activée
function main() {

afficherNotification();

}